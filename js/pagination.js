(function () {
	"use strict";

	function render(container, currentPage, totalPages, onChange) {
		if (!container) return;
		const total = Math.max(0, Number(totalPages) || 0);
		const current = Math.min(Math.max(1, Number(currentPage) || 1), Math.max(1, total));

		if (total <= 1) {
			container.replaceChildren();
			return;
		}

		const fragment = document.createDocumentFragment();
		for (let page = 1; page <= total; page += 1) {
			const button = document.createElement("button");
			button.type = "button";
			button.textContent = String(page);
			button.className = page === current ? "active" : "";
			button.setAttribute("aria-label", "الصفحة " + page);
			button.setAttribute("aria-current", page === current ? "page" : "false");
			button.addEventListener("click", function () {
				if (typeof onChange === "function") onChange(page);
			});
			fragment.appendChild(button);
		}
		container.replaceChildren(fragment);
	}

	window.MajalatiPagination = { render: render };
})();
