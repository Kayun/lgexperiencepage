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
			dataVideo (this)
		});

		function dataVideo (player) {

			$document.bind('scroll', function () {
				if (flag) {

					if ($dataSection.position().top + $dataSection.innerHeight()-100 <= $document.scrollTop() + $window.height()) {
						player.play();
						flag = !flag;
					}

				} else {
					return false
				}
			});

			player.on('ended', function () {
				setTimeout(function () {
					player.play();
				}, 5000);
			});
		}
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


