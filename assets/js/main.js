$(document).ready(function () {
	// The site ships a single light theme; load its colour variables.
	// Root-absolute so the path also resolves from pages under /blog/.
	localStorage.theme = "light";

	$('<link>').appendTo('head').attr({
		type: 'text/css',
		rel: 'stylesheet',
		href: '/assets/css/light.css'
	});
});
