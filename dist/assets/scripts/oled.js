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


			if ($setupSection.position().top +
				$setupSection.innerHeight() <= $document.scrollTop() +
				$window.height()) {

				if (flag) {
					anim();
					setInterval(function () {
						anim();
					}, 8000);
					flag = !flag;
				}
			}
		});
	}

	function anim() {
		var interval = setInterval(function () {
			if (count === 1) {
				$animContainer.addClass(animCountClass + count);
				count++;

			} else if (count == 7) {
				clearInterval(interval);

				setTimeout(function () {
					$animContainer.removeClass(animCountClass + count);
				}, 200);

				setTimeout(function () {
					var int = setInterval(function () {

						if (count === 0) {
							$animContainer.removeClass(animCountClass + (count + 1));
							clearInterval(int);
							count = 1;
						} else {
							$animContainer.removeClass(animCountClass + (count + 1));
							$animContainer.addClass(animCountClass + count);
							count--;
						}

					}, 200);
				}, 550);

				$animContainer.removeClass(animCountClass + (count - 1));
				$animContainer.addClass(animCountClass + count);

			} else {
				$animContainer.removeClass(animCountClass + (count - 1));
				$animContainer.addClass(animCountClass + count);
				count++;
			}

		}, 200);
		setTimeout(function () {
			$setupPoint.addClass(setupPointActionClass);
			setTimeout(function () {
				$setupPoint.removeClass(setupPointActionClass);
			}, 2000);

		}, 200);
	}

});
