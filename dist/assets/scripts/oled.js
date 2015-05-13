var $window = $(window),
	$document = $(document),
	$setupSection = $('#setupSection'),
	$animContainer = $('.js-setup-cont'),
	$setupPoint = $('.js-setup-point'),
	$playBtn = $('.js-play-btn'),
	setupPointActionClass = 'setup__point_state_action',
	setupPointDurationClass = 'setup__point_duration',
	animCountClass = 'setup__container_frame_',
	count = 1,
	flag = true;

$window.load(function () {

	pixelAnim();

	if (!device.mobile() && !device.tablet() && !isIE8() && !isIE7()) {

		$document.bind('scroll', function () {


			if ($setupSection.position().top +
				$setupSection.innerHeight() <= $document.scrollTop() +
				$window.height()) {

				// при доскроливании до блока запускается анимация
				// flag устанавливается в false, тем самым новые интервалы
				// не создаются

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

});

// анимация блока "настрйки"

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

// функция анимации блока "самопдсвечивающиеся пиксели"

function pixelAnim() {
	var $pixelText = $('.js-pixel-text'),
		$pixelImg = $('.js-pixel-img'),
		$pixelMask = $('.js-pixel-mask'),
		playBtnHideClass = 'pixel__play_state_hide',
		pixelTextHideClass = 'pixel-wrap_state_hide',
		pixelMaskTranslClass = 'pixel__mask_transform_transl',
		pixelMaskRotateClass = 'pixel__mask_transform_rotate',
		pixelImgHideClass = 'pixel__img_state_hide';

	$playBtn.bind('click', function () {
		$(this).addClass(playBtnHideClass);
		$pixelText.addClass(pixelTextHideClass);
		$pixelImg.addClass(pixelImgHideClass);
		setTimeout(function () {
			$pixelMask.addClass(pixelMaskTranslClass);
			setTimeout(function () {
				$pixelMask.addClass(pixelMaskRotateClass);
			}, 500);
		}, 300);
	});
}
