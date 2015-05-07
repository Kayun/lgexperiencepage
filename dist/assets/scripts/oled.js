var $window = $(window),
	$document = $(document),
	$setupSection = $('#setupSection'),
	$animContainer = $('.js-setup-cont'),
	$setupPoint = $('.js-setup-point'),
	setupPointActionClass = 'setup__point_state_action',
	setupPointDurationClass = 'setup__point_duration',
	animCountClass = 'setup__container_frame_',
	count = 1,
	flag = true;

$window.load(function () {
	if (!device.mobile() || !device.tablet() || !isIE8() || !isIE7()) {

		$document.bind('scroll', function () {

			if (flag) {

				if ($setupSection.position().top +
					$setupSection.innerHeight() <= $document.scrollTop() +
					$window.height()) {

					flag = !flag;

					var interval = setInterval(function () {
						if (count === 1) {
							$animContainer.addClass(animCountClass + count);
							count++;

						} else if (count == 6) {
							clearInterval(interval);
							setTimeout(function () {
								count = 1;
							}, 300);
							$animContainer.removeClass(animCountClass + (count - 1));
							$animContainer.addClass(animCountClass + count);

						} else {
							$animContainer.removeClass(animCountClass + (count - 1));
							$animContainer.addClass(animCountClass + count);
							count++;
						}

					}, 300);
					setTimeout(function () {
						setTimeout(function () {
							$setupPoint.addClass(setupPointActionClass);
						}, 1);

						$setupPoint.removeClass(setupPointDurationClass);
					}, 300);
				}

			}

			if ($setupSection.position().top +
				$setupSection.innerHeight() > $document.scrollTop() +
				$window.height()) {

				flag = !flag;
				setTimeout(function () {
					$setupPoint.removeClass(setupPointActionClass);
				}, 1);

				$animContainer.removeClass(animCountClass + 6);
				$setupPoint.addClass(setupPointDurationClass);
			}
		});






	}
});
