(function () {
	"use strict";

	/* =========================================================
	   Majalati Sharing
	   - Native mobile sharing
	   - Image sharing
	   - Link sharing
	   - WhatsApp
	   - Facebook
	   - X
	   - TikTok
	   - Download image fallback
	   - Copy URL fallback
	   ========================================================= */

	/**
	 * نسخ الرابط إلى الحافظة
	 */
	async function copyURL(url) {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			try {
				await navigator.clipboard.writeText(url);
				return true;
			} catch (error) {
				// الانتقال إلى الحل الاحتياطي
			}
		}

		try {
			const textarea = document.createElement("textarea");
			textarea.value = url;
			textarea.setAttribute("readonly", "");
			textarea.style.position = "fixed";
			textarea.style.left = "-9999px";
			textarea.style.top = "0";
			textarea.style.opacity = "0";
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			const copied = document.execCommand("copy");
			textarea.remove();
			return copied;
		} catch (error) {
			return false;
		}
	}

	/**
	 * تنزيل الصورة
	 */
	function downloadImage(file) {
		if (!file) return false;

		try {
			const objectURL = URL.createObjectURL(file);
			const link = document.createElement("a");
			link.href = objectURL;
			link.download = file.name || "article-image.jpg";
			document.body.appendChild(link);
			link.click();
			link.remove();
			setTimeout(function () { URL.revokeObjectURL(objectURL); }, 1000);
			return true;
		} catch (error) {
			return false;
		}
	}

	/**
	 * مشاركة المحتوى
	 */
	async function share(details) {
		const data = {
			title: details && details.title ? details.title : document.title,
			text: details && details.text ? details.text : "",
			url: details && details.url ? details.url : window.location.href
		};

		if (details && details.imageFile) {
			const shareData = {
				title: data.title,
				text: data.text + (data.url ? "\n" + data.url : ""),
				files: [details.imageFile]
			};
			let canShareFile = false;
			try {
				if (navigator.share && navigator.canShare) {
					canShareFile = navigator.canShare(shareData);
				}
			} catch (error) {
				canShareFile = false;
			}

			if (navigator.share && canShareFile) {
				await navigator.share(shareData);
				return "shared";
			}

			downloadImage(details.imageFile);
			return "downloaded";
		}

		if (navigator.share) {
			await navigator.share(data);
			return "shared";
		}

		await copyURL(data.url);
		return "copied";
	}

	window.MajalatiSharing = {
		share: share,
		copyURL: copyURL,
		downloadImage: downloadImage
	};

	document.addEventListener("DOMContentLoaded", function () {
		const button = document.getElementById("shareArticle");
		const page = document.body.dataset.page || "";
		let itemId = null;
		try {
			const params = new URLSearchParams(window.location.search);
			const id = params.get("id");
			if (id !== null && id !== "") itemId = Number(id);
		} catch (error) {
			itemId = null;
		}

		const items = page === "news-article"
			? (window.MajalatiData?.news || [])
			: (window.MajalatiData?.articles || []);
		const item = items.find(function (entry) { return Number(entry.id) === itemId; });
		const articleURL = window.location.href;
		const title = item?.title || document.querySelector('meta[property="og:title"]')?.content || document.title || "مجلة تي";
		const text = item?.excerpt || document.querySelector('meta[property="og:description"]')?.content || "";
		let image = "";
		if (item?.image) {
			try {
				image = new URL(item.image, document.baseURI).href;
			} catch (error) {
				image = "";
			}
		}

		let imageFile = null;
		function prepareImage() {
			if (!image) return Promise.resolve(null);
			return fetch(image, { mode: "cors", credentials: "omit" })
				.then(function (response) {
					if (!response.ok) throw new Error("Image could not be loaded");
					return response.blob();
				})
				.then(function (blob) {
					const mimeType = blob.type || "image/jpeg";
					let extension = "jpg";
					if (mimeType === "image/png") extension = "png";
					else if (mimeType === "image/webp") extension = "webp";
					else if (mimeType === "image/gif") extension = "gif";
					imageFile = new File([blob], "article-image." + extension, { type: mimeType });
					return imageFile;
				})
				.catch(function (error) {
					console.warn("تعذر تجهيز صورة المقال:", error);
					imageFile = null;
					return null;
				});
		}

		let imagePromise = Promise.resolve(null);
		if (image) {
			if (button) {
				button.disabled = true;
				const originalButtonLabel = button.textContent;
				button.textContent = "جارٍ تجهيز الصورة...";
				imagePromise = prepareImage().finally(function () {
					button.disabled = false;
					button.textContent = originalButtonLabel;
				});
			} else {
				imagePromise = prepareImage();
			}
		}

		const encodedURL = encodeURIComponent(articleURL);
		const encodedTitle = encodeURIComponent(title);
		const encodedWhatsAppText = encodeURIComponent(title + (text ? "\n" + text : "") + "\n" + articleURL);
		const targets = {
			whatsapp: "https://wa.me/?text=" + encodedWhatsAppText,
			facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodedURL,
			x: "https://x.com/intent/post?text=" + encodedTitle + "&url=" + encodedURL,
			tiktok: "https://www.tiktok.com/"
		};

		document.querySelectorAll("[data-share-network]").forEach(function (link) {
			const network = link.dataset.shareNetwork;
			link.href = targets[network] || articleURL;
			if (network === "whatsapp" || network === "facebook" || network === "x" || network === "tiktok") {
				link.target = "_blank";
				link.rel = "noopener noreferrer";
				return;
			}

			if (network === "native") {
				link.addEventListener("click", async function (event) {
					event.preventDefault();
					const originalLabel = link.textContent;
					try {
						await imagePromise;
						const result = await share({ title: title, text: text, url: articleURL, imageFile: imageFile });
						link.textContent = result === "shared" ? "تمت المشاركة" : result === "downloaded" ? "تم تنزيل الصورة" : result === "copied" ? "تم نسخ الرابط" : "تعذرت المشاركة";
					} catch (error) {
						console.warn("Share cancelled or failed:", error);
						link.textContent = "تعذرت المشاركة";
					}
					setTimeout(function () { link.textContent = originalLabel; }, 2200);
				});
			}
		});

		if (button) {
			button.addEventListener("click", async function () {
				const originalLabel = button.textContent;
				try {
					await imagePromise;
					const result = await share({ title: title, text: text, url: articleURL, imageFile: imageFile });
					button.textContent = result === "shared" ? "تمت المشاركة" : result === "downloaded" ? "تم تنزيل الصورة" : result === "copied" ? "تم نسخ الرابط" : "تعذرت المشاركة";
				} catch (error) {
					console.warn("Share cancelled or failed:", error);
					button.textContent = "تعذرت المشاركة";
				}
				setTimeout(function () { button.textContent = originalLabel; }, 2200);
			});
		}
	});
})();
