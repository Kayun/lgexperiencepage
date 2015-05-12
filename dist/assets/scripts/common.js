if ( !isIE8() && !isIE7()) {
	var scroll = skrollr.init();
}

if (isIE8() || isIE7()) {
	var $imgBgCover = $('.js-bg-cover');

	$imgBgCover.each(function () {
		$(this).css('background-size', 'cover');
	});
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

