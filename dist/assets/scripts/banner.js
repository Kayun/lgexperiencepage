document.ready = function() {
	'use strict';

	textAnim();
	$img.onload(function () {

	});

}

// Глобальные переменные

var $img = $('.js-banner-img'),
	$info = $('.js-banner-info'),
	$btn = $('.js-banner-btn'),
	imgHideClass = 'banner__img_state_hide',
	infoHideClass = 'banner__info_state_hide',
	activeVideoClass = 'video__item_state_active',
	flag = false;

// Инициализация плееров в блоке banner

function onYouTubeIframeAPIReady() {

	var $player = $('.js-banner-video'),
		idPlayer = $player.attr('id'),
		idVideo = $player.attr('data-video-id'),
		player;

	player = new YT.Player (idPlayer, {
		height: '442',
		width: '1260',
		videoId: idVideo,
		playerVars : {
			autohide: 1,
			controls: 2,
			fs: 0,
			modestbranding: 0,
			showinfo: 0,
		},
		events: {
			'onReady': playVideo
		}
	});
}


// Функция запуска видео

function playVideo(event) {
	var $player = $('.js-banner-video'),
		$firstVideo = $('.js-video-first');

	$btn.bind('click', function () {
		$img.addClass(imgHideClass);
		$info.addClass(infoHideClass);

		setTimeout(function () {
			$player.css('z-index', '10');
		}, 2000);
		$firstVideo.addClass(activeVideoClass);

		event.target.playVideo();
		flag = true;
	});

	changeVideo(event);

}

// Функция переключения видео

function changeVideo(event) {
	var $switchers = $('.js-video-switch'),
		player = event.target,
		id;

	$switchers.each(function () {
		$(this).bind('click', function () {
			activeVideo($(this));
			id = $(this).attr('data-video-id');
			player.loadVideoById({videoId: id});

			if (!flag) {

				$img.addClass(imgHideClass);
				$info.addClass(infoHideClass);
				setTimeout(function () {
					$player.css('z-index', 10);
				}, 2000);

			}

		});

	});
}

// Функция переключения активного видео

function activeVideo(elem) {
	elem.siblings().removeClass(activeVideoClass);
	elem.addClass(activeVideoClass);
}

// Функция появления текста

function textAnim() {
	var $text = $('.js-banner-text'),
		$logo = $('.js-banner-logo'),
		$title = $('.js-banner-title'),
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

