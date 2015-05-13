$(window).load(function() {

	if (isIE8() || isIE7()) {
		$btn.append('<div class="banner__btn-icon"></div>');
	}

	textAnim();

});

// Глобальные переменные

var $img = $('.js-banner-img'),
	$info = $('.js-banner-info'),
	$btn = $('.js-banner-btn'),
	$playBtn = $('.js-play-btn'),
	imgHideClass = 'banner__img_state_hide',
	infoHideClass = 'banner__info_state_hide',
	activeVideoClass = 'video__item_state_active',
	flag = true;



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
			showinfo: 0
		},
		events: {
			'onReady': playVideo
		}
	});

	var $player = $('.js-pixel-video'),
		idPlayer = $player.attr('id'),
		idVideo = $player.attr('data-video-id'),
		player;

	playerPixel = new YT.Player (idPlayer, {
		height: '450',
		width: '1025',
		videoId: idVideo,
		playerVars : {
			autohide: 1,
			controls: 2,
			fs: 0,
			modestbranding: 0,
			showinfo: 0
		},
		events: {
			'onReady': playVideoPixel
		}
});



// Функция запуска видео

function playVideoPixel(event) {
	var $player = $('.js-pixel-video');

	$playBtn.bind('click', function () {
		event.target.playVideo();
		setTimeout(function () {
			$player.css('z-index', 4);
		}, 1500)
	});
	}
}


function onYouTubePlayerReady() {
	var $playerBanner = $('#bannerPlayer'),
		$playerPixel = $('#pixelPlayer'),
		playerBanner = $playerBanner.get(0),
		playerPixel = $playerPixel.get(0);

	$btn.bind('click', function () {
		$img.addClass(imgHideClass);
		$info.addClass(infoHideClass);
		$playerBanner.css('z-index', 10);
		playerBanner.playVideo();
	});

	changeVideo('', $playerBanner);

	// видео из блока "самопдсвечивающиеся пиксели"

	$playBtn.bind('click', function () {
		$playerPixel.css('z-index', 10);
		playerPixel.playVideo();
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
		flag = !flag;
	});

	changeVideo(event);

}

// Функция переключения видео

function changeVideo(event, $swfPlayer) {
	var $switchers = $('.js-video-switch'),
		$player = $('.js-banner-video') ? $('.js-banner-video') : $swfPlayer,
		player = event ? event.target : $swfPlayer.get(0),
		id;

	$switchers.each(function () {
		$(this).bind('click', function () {
			var $this = $(this);
			activeVideo($this);
			id = $this.attr('data-video-id');
			player.loadVideoById({videoId: id});

			if (flag) {

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

