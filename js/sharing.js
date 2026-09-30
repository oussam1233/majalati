(function () {
	"use strict";

	async function copyURL(url) {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			try {
				await navigator.clipboard.writeText(url);
				return;
			} catch (error) {
				// Fall back to the selection-based copy for restricted clipboard access.
			}
		}

		const input = document.createElement("textarea");
		input.value = url;
		input.setAttribute("readonly", "");
		input.style.position = "fixed";
		input.style.opacity = "0";
		document.body.appendChild(input);
		input.select();
		document.execCommand("copy");
		input.remove();
	}

	async function share(details) {
		const data = {
			title: details && details.title ? details.title : document.title,
			text: details && details.text ? details.text : "",
			url: details && details.url ? details.url : window.location.href
		};

		if (navigator.share) {
			if (details && details.image && navigator.canShare) {
				try {
					const response = await fetch(details.image);
					if (response.ok) {
						const image = await response.blob();
						const imageFile = new File([image], "article-image", { type: image.type });
						const imageData = { ...data, files: [imageFile] };
						if (navigator.canShare(imageData)) {
							await navigator.share(imageData);
							return "shared";
						}
					}
				} catch (error) {
					// Continue with a text-and-link share if the image cannot be attached.
				}
			}

			await navigator.share(data);
			return "shared";
		}

		await copyURL(data.url);
		return "copied";
	}

	window.MajalatiSharing = { share: share };

	document.addEventListener("DOMContentLoaded", function () {
		const button = document.getElementById("shareArticle");
		if (!button) return;

		const page = document.body.dataset.page;
		const itemId = Number(new URLSearchParams(window.location.search).get("id"));
		const items = page === "news-article"
			? window.MajalatiData?.news
			: window.MajalatiData?.articles;
		const item = items?.find(function (entry) { return Number(entry.id) === itemId; });
		const articleURL = window.location.href;
		const title = item?.title || document.querySelector('meta[property="og:title"]')?.content || document.title;
		const text = item?.excerpt || document.querySelector('meta[property="og:description"]')?.content || "";
		const image = item?.image ? new URL(item.image, document.baseURI).href : "";
		let url = articleURL;
		if (item) {
			const shareURL = new URL(articleURL);
			shareURL.searchParams.set("id", String(item.id));
			shareURL.searchParams.set("title", title);
			shareURL.searchParams.delete("description");
			shareURL.searchParams.delete("type");
			if (image) shareURL.searchParams.set("image", image);
			url = shareURL.href;
		}
		const encodedUrl = encodeURIComponent(url);
		const encodedTitle = encodeURIComponent(title);

		document.querySelectorAll("[data-share-network]").forEach(function (link) {
			const network = link.dataset.shareNetwork;
			if (network === "tiktok") {
				link.href = "https://www.tiktok.com/";
				link.addEventListener("click", function () {
					const originalLabel = link.textContent;
					copyURL(url).then(function () {
						link.textContent = "تم نسخ الرابط";
						setTimeout(function () {
							link.textContent = originalLabel;
						}, 2200);
					});
				});
				return;
			}

			const targets = {
				whatsapp: "https://wa.me/?text=" + encodeURIComponent(title + "\n" + url),
				facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl,
				x: "https://x.com/intent/post?text=" + encodedTitle + "&url=" + encodedUrl
			};
			link.href = targets[network] || url;
		});

		button.addEventListener("click", async function () {
			const originalLabel = button.textContent;
			try {
				const result = await share({ title: title, text: text, url: url, image: image });
				button.textContent = result === "shared" ? "تمت المشاركة" : "تم نسخ الرابط";
			} catch (error) {
				button.textContent = "تعذر المشاركة";
			}
			setTimeout(function () {
				button.textContent = originalLabel;
			}, 2200);
		});
	});
})();
