document.ready = function () {
	var $text = $('.js-banner-text'),
		$logo = $('.js-banner-logo'),
		$title = $('.js-banner-title'),
		$btn = $('.js-banner-btn'),
		titleHideClass = 'banner__title_state_hide',
		textHideClass = 'banner__text_state_hide',
		logoHideClass = 'banner__logo_state_hide',
		btnHideClass = 'banner__btn_state_hide';

	setTimeout(function () {
		$logo.removeClass(logoHideClass);
	}, 1000);

	setTimeout(function () {
		$title.removeClass(titleHideClass);
	}, 1500);

	setTimeout(function () {
		$text.removeClass(textHideClass);
	}, 2000);

	setTimeout(function () {
		$btn.removeClass(btnHideClass);
	}, 2500);

}

function onYouTubeIframeAPIReady() {

	var ultraPlayer = new YT.Player ('bannerPlayerUltra', {
		height: '442',
		width: '1260',
		videoId: 'W9vgYbH8Jcg',
		playerVars : {
			autohide: 1,
			controls: 1,
			fs: 0,
			modestbranding: 0,
			showinfo: 0,
		},
		events: {
			'onReady': playVideo,
		}
	});

	var oledPlayer = new YT.Player ('bannerPlayerOled', {
		height: '442',
		width: '1260',
		videoId: 'NiRkoX2p94o',
		playerVars : {
			autohide: 1,
			controls: 1,
			fs: 0,
			modestbranding: 0,
			showinfo: 0,
		},
		events: {
			'onReady': playVideo,
		}
	});

	var webosPlayer = new YT.Player ('bannerPlayerWebos', {
		height: '442',
		width: '1260',
		videoId: 'kWbRVrrpb4w',
		playerVars : {
			autohide: 1,
			controls: 1,
			fs: 0,
			modestbranding: 0,
			showinfo: 0,
		},
		events: {
			'onReady': playVideo,
		}
	});
}

function playVideo(event) {

	var $img = $('.js-banner-img'),
		$info = $('.js-banner-info'),
		$btn = $('.js-banner-btn'),
		$player = $('.js-banner-video'),
		imgHideClass = 'banner__img_state_hide',
		infoHideClass = 'banner__info_state_hide';

	$btn.bind('click', function () {
		$img.addClass(imgHideClass);
		$info.addClass(infoHideClass);
		setTimeout(function () {
			$player.css('z-index', 10);
		}, 2000);
		event.target.playVideo();
	});

}