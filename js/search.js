(function () {
	"use strict";

	function normalize(value) {
		return String(value || "").trim().toLocaleLowerCase();
	}

	function matches(item, query) {
		const needle = normalize(query);
		if (!needle) return true;
		return [item.title, item.excerpt, item.category].some(function (value) {
			return normalize(value).includes(needle);
		});
	}

	window.MajalatiSearch = {
		normalize: normalize,
		filter: function (items, query) {
			return (Array.isArray(items) ? items : []).filter(function (item) {
				return matches(item, query);
			});
		}
	};
})();
