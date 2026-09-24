(function () {
	"use strict";

	const storageKey = "majalati-theme";

	function getTheme() {
		return document.body.classList.contains("dark") ? "dark" : "light";
	}

	function setTheme(theme) {
		const nextTheme = theme === "dark" ? "dark" : "light";
		document.body.classList.toggle("dark", nextTheme === "dark");
		localStorage.setItem(storageKey, nextTheme);
		return nextTheme;
	}

	window.MajalatiTheme = {
		get: getTheme,
		set: setTheme,
		toggle: function () {
			return setTheme(getTheme() === "dark" ? "light" : "dark");
		}
	};
})();
