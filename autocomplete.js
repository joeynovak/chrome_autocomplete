(function() {
	var i;
	var nl = document.querySelectorAll("[autocomplete='off']");
	for (i = 0; i < nl.length; i++) {
		nl[i].setAttribute("autocomplete", "on");
	}
})();
