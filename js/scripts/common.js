if (!device.mobile() || !device.tablet() || !isIE8() || !isIE7()) {
	var scroll = skrollr.init();
}


function isIE8() {
	if (document.all && document.querySelector && !document.addEventListener) {
		return true;
	} else {
		return false;
	}
}

function isIE7() {
	if (document.all && !document.querySelector) {
		return true;
	} else {
		return false;
	}
}

