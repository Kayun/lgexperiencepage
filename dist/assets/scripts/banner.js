document.ready = function () {
	var $text = $('span[class^="js-banner-text"]'),
		$logo = $('.js-banner-logo'),
		$btn = $('.js-banner-btn');

	$text.each(function () {
		$(this).css('opacity', 0);
	});

	$logo.css('opacity', 0);
	$btn.css('opacity', 0);

	setTimeout(function () {
		var i = 1

		$text.each(function () {
			$(this).css('transition', 'opacity .3s ease');
		});

		$logo.css('transition', 'opacity .3s ease');
		$btn.css('transition', 'opacity 1s ease');

		var interva = setInterval(function () {

			$text.each(function () {

				if ($(this).hasClass('js-banner-text-' + i)) {
					$(this).css('opacity', 1);
				}

				if (i >= $text.length) {
					clearInterval(interva);
					setTimeout(function () {$logo.css('opacity', 1);}, 100);
					setTimeout(function () {$btn.css('opacity', 1);}, 1000);
				}

			});

			i++;

		}, 100);

	}, 3000);

}
