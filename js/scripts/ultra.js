var $colorPrimeSection = $('#colorPrime'),
	$checkbox = $('#chek'),
	$window = $(window),
	$document = $(document),
	flag = true;

$window.load(function () {
	if (!device.mobile() || !device.tablet() || !isIE8() || !isIE7()) {

		$document.bind('scroll', function () {

			if ($colorPrimeSection.position().top +
				$colorPrimeSection.innerHeight() + 200 <= $document.scrollTop() +
				$window.height()) {

				$checkbox.attr('checked', 'checked')
			}

			if ($colorPrimeSection.position().top +
				$colorPrimeSection.innerHeight() + 200 >= $document.scrollTop() +
				$window.height()) {

				$checkbox.removeAttr('checked')
			}
		});

	}

})
