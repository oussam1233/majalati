(function () {
	"use strict";

	async function share(details) {
		const data = {
			title: details && details.title ? details.title : document.title,
			text: details && details.text ? details.text : "",
			url: details && details.url ? details.url : window.location.href
		};

		if (navigator.share) {
			await navigator.share(data);
			return "shared";
		}

		if (navigator.clipboard && navigator.clipboard.writeText) {
			await navigator.clipboard.writeText(data.url);
			return "copied";
		}

		const input = document.createElement("textarea");
		input.value = data.url;
		input.setAttribute("readonly", "");
		input.style.position = "fixed";
		input.style.opacity = "0";
		document.body.appendChild(input);
		input.select();
		document.execCommand("copy");
		input.remove();
		return "copied";
	}

	window.MajalatiSharing = { share: share };

	document.addEventListener("DOMContentLoaded", function () {
		const button = document.getElementById("shareArticle");
		if (!button) return;

		const url = window.location.href;
		const title = document.title;
		const encodedUrl = encodeURIComponent(url);
		const encodedTitle = encodeURIComponent(title);

		document.querySelectorAll("[data-share-network]").forEach(function (link) {
			const network = link.dataset.shareNetwork;
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
				const result = await share({ title: title, url: url });
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
