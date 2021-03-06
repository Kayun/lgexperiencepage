var	dataPlayer,
	$window = $(window),
	$document = $(document),
	$dataPlayer = $('#dataVideo'),
	$demoBtn = $('.js-demo-btn'),
	$dataSection = $('#dateSection'),
	$dataImg = $('.js-data-img'),
	flag = true;

$window.load(function () {

	if (isIE8() || isIE7()) {
		$demoBtn.append('<div class="demo__btn-icon"></div>');
	}

	if(!device.mobile() && !device.tablet() && !isIE8() && !isIE7()) {

		dataPlayer = videojs('dataVideo', {
			width: 900,
			height: 432,
			controls: false,
			preload: 'auto',
			autoplay: false
		}).ready(function() {
			var player = this;
			player.on('pause', function () {
				setTimeout(function () {
					player.currentTime(0);
					player.play();
				}, 5000);
			});

			player.on('play', function () {
				setTimeout(function () {
					player.pause();
				}, 3100);
			});

			$document.bind('scroll', function () {
				if (flag) {

					if ($dataSection.position().top + $dataSection.innerHeight() <= $document.scrollTop() + $window.height()) {
						player.play();
						flag = !flag;
					}

				}
			});
		});
	}
});


