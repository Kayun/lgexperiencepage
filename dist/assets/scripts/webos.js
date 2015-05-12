var	dataPlayer,
	$window = $(window),
	$document = $(document),
	$dataPlayer = $('#dataVideo'),
	$dataSection = $('#dateSection'),
	$dataImg = $('.js-data-img'),
	flag = true;

$window.load(function () {
	if(!device.mobile() || !device.tablet() || !isIE8() || !isIE7()) {

		dataPlayer = videojs('dataVideo', {
			width: 900,
			height: 436,
			controls: false,
			preload: 'auto',
			autoplay: false,
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

});


