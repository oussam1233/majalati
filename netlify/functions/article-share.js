function escapeHTML(value) {
	return String(value || "").replace(/[&<>"']/g, function (character) {
		return {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}[character];
	});
}

exports.handler = async function (event) {
	const query = event.queryStringParameters || {};
	const isNews = query.type === "news";
	const id = /^\d+$/.test(query.id || "") ? query.id : "";
	if (!id) {
		return { statusCode: 400, body: "Invalid article ID." };
	}

	const requestURL = new URL(event.rawUrl || process.env.URL || "https://heartfelt-kelpie-569825.netlify.app");
	const origin = requestURL.origin;
	const targetPath = isNews ? "news-article.html" : "article.html";
	const targetURL = new URL(`${targetPath}?id=${id}`, `${origin}/`).href;
	const title = escapeHTML((query.title || "مجَلّتكم").slice(0, 300));
	const description = escapeHTML((query.description || "").slice(0, 1000));
	let imageURL = "";

	try {
		const image = new URL(query.image || "", `${origin}/`);
		if (image.protocol === "https:") imageURL = image.href;
	} catch (error) {
		imageURL = "";
	}

	const imagePath = imageURL ? new URL(imageURL).pathname : "";
	const imageType = /\.png$/i.test(imagePath)
		? "image/png"
		: /\.webp$/i.test(imagePath)
			? "image/webp"
			: /\.jpe?g$/i.test(imagePath)
				? "image/jpeg"
				: "";
	const imageTags = imageURL
		? `<meta property="og:image" content="${escapeHTML(imageURL)}"><meta property="og:image:secure_url" content="${escapeHTML(imageURL)}">${imageType ? `<meta property="og:image:type" content="${imageType}">` : ""}<meta property="og:image:alt" content="${title}"><meta name="twitter:image" content="${escapeHTML(imageURL)}"><meta name="twitter:image:alt" content="${title}">`
		: "";
	const body = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${title} | مجَلّتكم</title><meta name="description" content="${description}"><link rel="canonical" href="${escapeHTML(targetURL)}"><meta property="og:type" content="article"><meta property="og:site_name" content="مجَلّتكم"><meta property="og:locale" content="ar_AR"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${escapeHTML(requestURL.href)}">${imageTags}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><script>window.location.replace(${JSON.stringify(targetURL)});</script></head><body><a href="${escapeHTML(targetURL)}">متابعة قراءة المقال</a></body></html>`;

	return {
		statusCode: 200,
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			"Cache-Control": "public, max-age=0, s-maxage=3600"
		},
		body: body
	};
};