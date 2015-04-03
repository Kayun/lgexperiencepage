/**
 * MusicFlow Script
 */
;(function($) {
	var console = window.console || { log: function() {} };
	
	/**
	 * Tab
	 */
	var TAB = function() {
		return {
			_target 	: null,
			_divs 		: null,
			_btns 		: null,
			_selIdx 	: -1,
			_maxIdx 	: -1,
			_prevBtn 	: null,
			_nextBtn 	: null,
			setEvents : function() {
				var _this = this;

				this._btns.click(function(event) {
					event.preventDefault();
					
					var idx = $(this).index();

					if( idx == _this._selIdx ) return;
					_this._selIdx = idx;

					_this.display();
				});
			},
			display : function() {
				var _this = this;

				this._target.display("hide");

				$( this._divs[ _this._selIdx + 1 ] ).show();
				_this._target.display( _this._selIdx + 1 );
				$.each(this._divs, function(index, element) {
					if( index != _this._selIdx + 1 ) {
						$( element ).hide();
					}
				});

				$.each(this._btns, function(index, element) {
					if( index == _this._selIdx )	$( element ).addClass("active");
					else 							$( element ).removeClass("active");
				});
			},
			init : function( target, divs, btns ) {
				this._target = target;
				this._divs = divs;
				this._btns = btns;
				this._btns.css("cursor", "pointer");

				this._maxIdx = this._divs.length;

				this._prevBtn = target._container.find("div.btn_prev");
				this._nextBtn = target._container.find("div.btn_next");

				this.setEvents();
			}
		}
	}

	/**
	 * Tab Slide
	 */
	var TAB_SLIDE = function() {
		return {
			_target			: null,
			_prevBtn		: null,
			_nextBtn 		: null,
			_btns 	 		: null,
			_slider 		: null,
			_sliderKv		: null,
			_moveWidth		: 930,
			_curIdx 		: 0,
			_maxIdx 		: 0,
			_speed 			: 600,
			setEvents : function() {
				var _this = this;

				this._btns.click(function(event) {
					event.preventDefault();
					var idx = $(this).index();
					
					if( _this._curIdx == idx ) return;

					_this._curIdx = idx;
					_this.display();
				});

				this._prevBtn.click(function(event) {
					event.preventDefault();

					_this._curIdx--;
					if( _this._curIdx < 0 )					_this._curIdx = _this._maxIdx - 1;

					_this.display();
				});

				this._nextBtn.click(function(event) {
					event.preventDefault();

					_this._curIdx++;
					if( _this._curIdx >= _this._maxIdx )	_this._curIdx = 0;

					_this.display();
				});
			},
			display : function( duration ) {
				var _this = this,
					movePos = -( this._moveWidth * this._curIdx );
				
				duration = duration || _this._speed;

				$.each(this._sliderKv, function(index, element) {
					$( element ).find("h3").hide();
					$( element ).find("p").hide();
					$( element ).find("div").hide();
				});

				var slideDuration = ( $.browser.msie ) ? duration * 2 : duration;
				this._slider.animate({ "margin-left": movePos }, slideDuration, function(){
					$.each(_this._sliderKv, function(index, element) {
						if( index == _this._curIdx ) {
							$( element ).find("h3").hide();
							$( element ).find("h4").hide();
							$( element ).find("p").hide();
							$( element ).find("div").hide();

							if( $.support.opacity ) {
								$( element ).find("h3").animate({ "padding-top" : 20, opacity : 0 }, 0 );
								$( element ).find("h4").animate({ "padding-top" : 20, opacity : 0 }, 0 );
								$( element ).find("p").animate({ "padding-top" : 20, opacity : 0 }, 0 );
								$( element ).find("div").animate({ "padding-top" : 20, opacity : 0 }, 0 );

								$( element ).find("h3").show().animate({ "padding-top" : 0, opacity : 1 }, duration);
								$( element ).find("h4").delay(300).show().animate({ "padding-top" : 0, opacity : 1 }, duration);
								$( element ).find("p").delay(300).show().animate({ "padding-top" : 0, opacity : 1 }, duration);
								$( element ).find("div").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, duration );
							} else {
								$( element ).find("h3").animate({ "padding-top" : 20 }, 0 );
								$( element ).find("h4").animate({ "padding-top" : 20 }, 0 );
								$( element ).find("p").animate({ "padding-top" : 20 }, 0 );
								$( element ).find("div").animate({ "padding-top" : 20, opacity : 0 }, 0 );

								$( element ).find("h3").show().animate({ "padding-top" : 0 }, duration);
								$( element ).find("h4").delay(300).show().animate({ "padding-top" : 0 }, duration);
								$( element ).find("p").delay(300).show().animate({ "padding-top" : 0 }, duration);
								$( element ).find("div").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, duration );
							}
						} else {
							$( element ).find("h3").hide();
							$( element ).find("h4").hide();
							$( element ).find("p").hide();
							$( element ).find("div").hide();
						}
					});
				});

				$.each(this._btns, function(index, element) {
					if( index == _this._curIdx ) 	_this.btnOver( element );
					else 							_this.btnOut( element );
				});
			},
			btnOver : function( target ) {
				var thisSrc = $( target ).find("a>img").attr("src");
				$( target ).find("a>img").attr( "src", thisSrc.replace("_on", "_over") );
			},
			btnOut : function( target ) {
				var thisSrc = $( target ).find("a>img").attr("src");
				$( target ).find("a>img").attr( "src", thisSrc.replace("_over", "_on") );
			},
			init : function( target, slider, prevBtn, nextBtn, btns ) {
				this._target = target;
				this._slider = slider;
				this._sliderKv = this._slider.find("li");
				this._prevBtn = prevBtn;
				this._nextBtn = nextBtn;

				this._btns = btns;
				this._maxIdx = this._sliderKv.length;

				this.setEvents();
			}
		}
	}

	/**
	 * View Video
	 */
	var VIDEO = function() {
		return {
			_target				: null,
			_videoBtn 			: null,
			_videoContainer 	: null,
			_videoCloseBtn 		: null,
			setEvents : function() {
				var _this = this;

				this._videoBtn.click(function(event) {
					event.preventDefault();

					var videoUrl = $(this).attr("href"),
						videoId = $(this).data("video-id");

					if( videoId ) {
						_this.brightcoveVideo( videoId );
					} else {
						_this.playVideo( videoUrl );
					}
				});

				this._videoCloseBtn.click(function(event) {
					event.preventDefault();
					_this.closeVideo();
				});

				this._videoCloseBtn.mouseover(function(event) {
					$(this).find("img").attr("src", "../images/av/mscflow_btn_close_over.png");
				}).mouseout(function(event) {
					$(this).find("img").attr("src", "../images/av/mscflow_btn_close_on.png");
				});
			},
			brightcoveVideo : function( videoId ) {
				this._videoContainer.show();
				var opts = {
									"width"		: "100%",
									"height"	: "100%",
									"playerID"	: "3266821154001",
									"playerKey"	: "AQ~~,AAACVQVdxLk~,KTBAzBjkp0hvsfd4DD_hxb3rsOu53gas"
				}
				var playerTemplate = "";
				playerTemplate =	"<div itemscope itemtype=\"http://schema.org/VideoObject\" style=\"width:100%; height: 100%;\">";
				playerTemplate +=		"<meta itemprop=\"duration\" content=\"\" />";
				playerTemplate +=		"<meta itemprop=\"thumbnailUrl\" content=\"\" />";
				playerTemplate +=		"<meta itemprop=\"embedURL\" content=\"\" />";
				playerTemplate +=		"<object id=\"myExperience\" class=\"BrightcoveExperience\">";
				playerTemplate +=			"<param name=\"bgcolor\" value=\"#000000\" />";
				playerTemplate +=			"<param name=\"wmode\" value=\"transparent\" />";
				playerTemplate +=			'<param name="width" value="' + opts.width + '" />';
				playerTemplate +=			'<param name="height" value="' + opts.height + '" />';
				playerTemplate +=			'<param name="playerID" value="' + opts.playerID + '" />';
				playerTemplate +=			'<param name="playerKey" value="' + opts.playerKey + '" />';
				playerTemplate +=			"<param name=\"isVid\" value=\"true\" />";
				playerTemplate +=			"<param name=\"isUI\" value=\"true\" />";
				playerTemplate +=			"<param name=\"dynamicStreaming\" value=\"true\" />";
				playerTemplate +=			'<param name="@videoPlayer" value="' + videoId + '" />';
				playerTemplate +=			"<param name=\"includeAPI\" value=\"true\" />";
				playerTemplate +=			"<param name=\"templateLoadHandler\" value=\"onTemplateLoad\" />";
				playerTemplate +=		"</object>";
				playerTemplate +=	"</div>";
				$( this._videoContainer.find("div.video") ).html( playerTemplate );
				brightcove.createExperiences();
			},
			playVideo : function( url ) {
				this._videoContainer.show();
				var playerTemplate = "";
				playerTemplate = 	'<iframe frameborder="0" src="' + url + '?rel=0&wmode=opaque&vq=large&showinfo=0&autoplay=1">';
				playerTemplate += 	"</iframe>";
				//console.log( playerTemplate );
				$( this._videoContainer.find("div.video") ).html( playerTemplate );
			},
			closeVideo : function() {
				this._videoContainer.hide();
				$( this._videoContainer.find("div.video") ).html("");
			},
			init : function( target, videoBtn, videoContainer, videoCloseBtn ) {
				this._target = target;
				this._videoBtn = videoBtn;
				this._videoContainer = videoContainer;
				this._videoCloseBtn = videoCloseBtn;

				this.setEvents();
			}
		}
	}

	/**
	 * Live in Flowing Sound
	 */
	var M_LFS = {
		_container 			: null,
		_tab 				: null,
		init : function() {
			//console.log("M_LFS init");
			this._container = $("div.bside");
			this._tab = new TAB_SLIDE().init(	this,
												$("div.bside>ul.slider"),
												this._container.find("div.btn_prev"),
												this._container.find("div.btn_next"),
												this._container.find("ul.btn>li")
											);
			this._video = new VIDEO().init(
												this,
												this._container.find("div.view_video a"),
												this._container.find("div.videoContainer"),
												this._container.find("div.videoContainer>div.close_btn>a")
										  );
		}
	};

	/**
	 * Seamless Music Play
	 */
	var M_SMP = {
		_container 		: null,
		_tab 			: null,
		_prevBtn 		: null,
		_nextBtn 		: null,
		_speed 			: 600,
		_curIdx 		: 0,
		_maxIdx 		: 0,
		_slider 		: null,
		_moveWidth 		: 930,
		_video 			: null,
		_autoPlay		: true,
		_audtoDuration 	: 5000,
		setEvents : function() {
			var _this = this;

			this._prevBtn.click(function(event) {
				event.preventDefault();

				_this._curIdx--;
				if( _this._curIdx < 0 )					_this._curIdx = _this._maxIdx - 1;

				_this.display(1, 11);
			});

			this._nextBtn.click(function(event) {
				event.preventDefault();

				_this._curIdx++;
				if( _this._curIdx >= _this._maxIdx )	_this._curIdx = 0;

				_this.display(1, 22);
			});
		},
		display : function( idx, kvIdx ) {
			this._prevBtn.hide();
			this._nextBtn.hide();

			if( idx != "hide" ) {
				if( idx == 1 ) {
					kvIdx = kvIdx || 1;

					this._prevBtn.show();
					this._nextBtn.show();

					var _this = this,
						movePos = -( this._moveWidth * this._curIdx );

					var slideDuration = ( $.browser.msie ) ? _this._speed * 2 : _this._speed;
					this._slider.animate({"background-position-x": movePos}, slideDuration );

					if( kvIdx == 1 ) {
						this._container.find("div.t" + idx + ">h3").hide();
						this._container.find("div.t" + idx + ">h4").hide();
						this._container.find("div.t" + idx + ">p").hide();
						this._container.find("div.t" + idx + ">div.btn_play").hide();

						if( $.support.opacity ) {
							this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20, opacity : 0 }, 0 );
							this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20, opacity : 0 }, 0 );
							this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20, opacity : 0 }, 0 );
							this._container.find("div.t" + idx + ">div.btn_play").animate({ "padding-top" : 20, opacity : 0 }, 0 );

							this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
							this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
							this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
							this._container.find("div.t" + idx + ">div.btn_play").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						} else {
							this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20 }, 0 );
							this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20 }, 0 );
							this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20 }, 0 );
							this._container.find("div.t" + idx + ">div.btn_play").animate({ "padding-top" : 20 }, 0 );

							this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0 }, this._speed );
							this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
							this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
							this._container.find("div.t" + idx + ">div.btn_play").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
						}

						if( this._autoPlay ) {
							this._autoPlay = false;
							setTimeout(function(){
								_this._curIdx = 1;
								_this.display(1, 22);
							}, this._audtoDuration);
						}
					} else {
						if( $.support.opacity ) {
							if( this._curIdx == 0 ) {
								this._container.find("div.msc_back>img.m2").fadeOut( slideDuration );
								this._container.find("div.msc_back>img.m1").fadeIn( slideDuration );
							}
							if( this._curIdx == 1 ) {
								this._container.find("div.msc_back>img.m1").fadeOut( slideDuration );
								this._container.find("div.msc_back>img.m2").fadeIn( slideDuration );
							}
						} else {
							if( this._curIdx == 0 ) {
								this._container.find("div.msc_back>img.m2").hide();
								this._container.find("div.msc_back>img.m1").show();
							}
							if( this._curIdx == 1 ) {
								this._container.find("div.msc_back>img.m1").hide();
								this._container.find("div.msc_back>img.m2").show();
							}
						}

					}
				} else {
					this._curIdx = 0;
					this._autoPlay = true;
					this._slider.animate({"background-position-x": 0}, 0 );
					this._container.find("div.msc_back>img.m2").fadeOut( 0 );
					this._container.find("div.msc_back>img.m1").fadeIn( 0 );


					

					this._container.find("div.t" + idx + ">h3").hide();
					this._container.find("div.t" + idx + ">h4").hide();
					this._container.find("div.t" + idx + ">p").hide();
					this._container.find("div.t" + idx + ">div").hide();
					this._container.find("div.t" + idx + ">img").hide();

					if( $.support.opacity ) {
						this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">div").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">img").animate({ "padding-top" : 20, opacity : 0 }, 0 );

						this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">div").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">img").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					} else {
						this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">div").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">img").animate({ "padding-top" : 20 }, 0 );

						this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">div").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">img").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
					}
				}
			} else {
				this._curIdx = 0;
			}
		},
		init : function() {
			//console.log("M_SMP init");
			this._container = $("div.cside");

			this._prevBtn = this._container.find("div.btn_prev");
			this._nextBtn = this._container.find("div.btn_next");

			this._slider = this._container.find("div.t1>div.msc_back");
			this._maxIdx = 2;

			this._tab = new TAB().init( this, this._container.find("div.part"), this._container.find("ul.tab li") );

			this._video = new VIDEO().init(
												this,
												this._container.find("div.view_video a"),
												this._container.find("div.videoContainer"),
												this._container.find("div.videoContainer>div.close_btn>a")
										  );

			this.setEvents();
		}
	};

	/**
	 * Diverse Expansion Choices
	 */
	var M_DEC = {
		_container 	: null,
		_tab 		: null,
		_speed 		: 600,
		_video 		: null,
		display : function( idx ) {
			if( idx != "hide" ) {
				this._container.find("div.t" + idx + ">h3").hide();
				this._container.find("div.t" + idx + ">h4").hide();
				this._container.find("div.t" + idx + ">p").hide();
				this._container.find("div.t" + idx + ">img").hide();

				if( $.support.opacity ) {
					this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20, opacity : 0 }, 0 );
					this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20, opacity : 0 }, 0 );
					this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20, opacity : 0 }, 0 );
					this._container.find("div.t" + idx + ">img").animate({ "padding-top" : 20, opacity : 0 }, 0 );

					this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					this._container.find("div.t" + idx + ">img").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
				} else {
					this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20 }, 0 );
					this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20 }, 0 );
					this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20 }, 0 );
					this._container.find("div.t" + idx + ">img").animate({ "padding-top" : 20 }, 0 );

					this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0 }, this._speed );
					this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
					this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
					this._container.find("div.t" + idx + ">img").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
				}
			}
		},
		init : function() {
			//console.log("M_DEC init");
			this._container = $("div.dside");
			this._tab = new TAB().init( this, this._container.find("div.part"), this._container.find("ul.tab li") );
			this._video = new VIDEO().init(
												this,
												this._container.find("div.view_video a"),
												this._container.find("div.videoContainer"),
												this._container.find("div.videoContainer>div.close_btn>a")
										  );
		}
	};

	/**
	 * Ultimate Network Stability
	 */
	var M_UNS = {
		_container 	: null,
		_tab 		: null,
		_speed 		: 600,
		_timeoutId	: null,
		_timeoutIdx : 1,
		_aniPlayBtn : null,
		_video 		: null,
		setEvents : function() {
			var _this = this;

			this._aniPlayBtn.click(function(event) {
				event.preventDefault();
				if( _this._timeoutId ) return;
				_this.aniMotion();
				$(this).attr("src", "../images/av/mscflow_eside_t1_obj2.png");
			});

			this._aniPlayBtn.mouseover(function(event) {
				if( _this._timeoutId ) return;
				$(this).attr("src", "../images/av/mscflow_eside_t1_obj2.png");
			}).mouseout(function(event) {
				if( _this._timeoutId ) return;
				$(this).attr("src", "../images/av/mscflow_eside_t1_obj1.png");
			});
		},
		display : function( idx ) {
			var _this = this;

			if( this._timeoutId ) {
				clearTimeout( this._timeoutId );
				_this._timeoutId = null;
			}

			if( idx != "hide" ) {
				if( idx == 1 ) {
					this._container.find("div.t1>div.pop>div.obj>img.pop_obj").attr("src", "../images/av/mscflow_eside_t1_obj1.png");
					this._container.find("div.t1>div.ani>img.line").hide();
					this._container.find("div.t1>div.ani>img.bg").attr("src", "../images/av/mscflow_eside_t1_1_bg.jpg");
					this._container.find("div.t1>div.pop").hide();

					if( $.support.opacity ) {
						this._container.find("div.t1>div.pop").animate({ "margin-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t1>div.pop").delay(300).show().animate({ "margin-top" : 0, opacity: 1 }, this._speed, function(){
							_this._timeoutIdx = 1;
							_this.aniMotion();
						});
					} else {
						this._container.find("div.t1>div.pop").animate({ "margin-top" : 20 }, 0 );
						this._container.find("div.t1>div.pop").delay(300).show().animate({ "margin-top" : 0 }, this._speed, function(){
							_this._timeoutIdx = 1;
							_this.aniMotion();
						});
					}
				}

				if( idx == 2 ) {
					this._container.find("div.t" + idx + ">h3").hide();
					this._container.find("div.t" + idx + ">h4").hide();
					this._container.find("div.t" + idx + ">p").hide();
					this._container.find("div.t" + idx + ">div").hide();

					if( $.support.opacity ) {
						this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">div").animate({ "padding-top" : 20, opacity : 0 }, 0 );


						this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">div").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					} else {
						this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20 }, 0 );
						this._container.find("div.t" + idx + ">div").animate({ "padding-top" : 20 }, 0 );


						this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">h4").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">p").delay(300).show().animate({ "padding-top" : 0 }, this._speed );
						this._container.find("div.t" + idx + ">div").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
					}
				}
			}
		},
		aniMotion : function() {
			var _this = this;
			this._timeoutIdx += 1;
			this._container.find("div.t1>div.ani>img.bg").attr("src", "../images/av/mscflow_eside_t1_" + this._timeoutIdx + "_bg.jpg");
			if( this._timeoutIdx < 7 ) {
				this._timeoutId = setTimeout(function(){
					_this.aniMotion();
				}, 400 );
			} else {
				if( $.support.opacity ) {
					this._container.find("div.t1>div.ani>img.line").animate({opacity : 0 }, 0 );
					this._container.find("div.t1>div.ani>img.line").show().animate({opacity : 1 }, this._speed * 2 );
				} else {
					this._container.find("div.t1>div.ani>img.line").animate({opacity : 0 }, 0 );
					this._container.find("div.t1>div.ani>img.line").show().animate({opacity : 1 }, this._speed * 2 );
					/*
					this._container.find("div.t1>div.ani>img.line").hide();
					setTimeout(function(){
						_this._container.find("div.t1>div.ani>img.line").show();
					}, this._speed);
					*/
				}
				this._container.find("div.t1>div.pop>div.obj>img.pop_obj").attr("src", "../images/av/mscflow_eside_t1_obj2.png");
			}
		},
		init : function() {
			//console.log("M_UNS init");
			this._container = $("div.eside");
			this._tab = new TAB().init( this, this._container.find("div.part"), this._container.find("ul.tab li") );
			//this._aniPlayBtn = this._container.find("img.btn_ani");
			//this._aniPlayBtn.css("cursor", "pointer");
			//this.setEvents();

			this._video = new VIDEO().init(
												this,
												this._container.find("div.view_video a"),
												this._container.find("div.videoContainer"),
												this._container.find("div.videoContainer>div.close_btn>a")
										  );
		}
	};

	/**
	 * All-in-one Music Player
	 */
	var M_AMP = {
		_container 	: null,
		_tab 		: null,
		_speed 		: 600,
		_video 		: null,
		display : function( idx ) {
			if( idx != "hide" ) {
				this._container.find("div.t" + idx + ">h3").hide();
				this._container.find("div.t" + idx + ">h4").hide();
				this._container.find("div.t" + idx + ">p").hide();
				this._container.find("div.t" + idx + ">div").hide();
				this._container.find("div.t" + idx + ">.obj1").hide();
				this._container.find("div.t" + idx + ">.obj2").hide();

				if( $.support.opacity ) {
					this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20, opacity : 0 }, 0 );
					this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20, opacity : 0 }, 0 );
					this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20, opacity : 0 }, 0 );
					this._container.find("div.t" + idx + ">div").animate({ "padding-top" : 20, opacity : 0 }, 0 );

					// All Search || Streaming Service
					if( idx == 1 || idx == 3 ) {
						this._container.find("div.t" + idx + ">.obj1").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">.obj2").animate({ "padding-left" : 20, opacity : 0 }, 0 );
					}

					// Mood Station
					if( idx == 2 ) {
						this._container.find("div.t" + idx + ">.obj2").animate({ "padding-left" : 20, opacity : 0 }, 0 );
					}

					this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					this._container.find("div.t" + idx + ">h4").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					this._container.find("div.t" + idx + ">p").delay(600).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
					this._container.find("div.t" + idx + ">div").delay(900).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );

					// All Search || Streaming Service
					if( idx == 1 || idx == 3 ) {
						this._container.find("div.t" + idx + ">.obj1").delay(900).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">.obj2").delay(1200).show().animate({ "padding-left" : 0, opacity: 1 }, this._speed );
					}

					// Mood Station
					if( idx == 2 ) {
						this._container.find("div.t" + idx + ">.obj2").delay(1200).show().animate({ "padding-left" : 0, opacity: 1 }, this._speed );
					}
				} else {
					this._container.find("div.t" + idx + ">h3").animate({ "padding-top" : 20 }, 0 );
					this._container.find("div.t" + idx + ">h4").animate({ "padding-top" : 20 }, 0 );
					this._container.find("div.t" + idx + ">p").animate({ "padding-top" : 20 }, 0 );
					this._container.find("div.t" + idx + ">div").animate({ "padding-top" : 20 }, 0 );

					// All Search || Streaming Service
					if( idx == 1 || idx == 3 ) {
						this._container.find("div.t" + idx + ">.obj1").animate({ "padding-top" : 20, opacity : 0 }, 0 );
						this._container.find("div.t" + idx + ">.obj2").animate({ "padding-left" : 20, opacity : 0 }, 0 );
					}

					// Mood Station
					if( idx == 2 ) {
						this._container.find("div.t" + idx + ">.obj2").animate({ "padding-left" : 20, opacity : 0 }, 0 );
					}

					this._container.find("div.t" + idx + ">h3").show().animate({ "padding-top" : 0 }, this._speed );
					this._container.find("div.t" + idx + ">h4").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
					this._container.find("div.t" + idx + ">p").delay(600).show().animate({ "padding-top" : 0 }, this._speed );
					this._container.find("div.t" + idx + ">div").delay(900).show().animate({ "padding-top" : 0 }, this._speed );

					// All Search || Streaming Service
					if( idx == 1 || idx == 3 ) {
						this._container.find("div.t" + idx + ">.obj1").delay(900).show().animate({ "padding-top" : 0, opacity: 1 }, this._speed );
						this._container.find("div.t" + idx + ">.obj2").delay(1200).show().animate({ "padding-left" : 0, opacity: 1 }, this._speed );
					}

					// Mood Station
					if( idx == 2 ) {
						this._container.find("div.t" + idx + ">.obj2").delay(1200).show().animate({ "padding-left" : 0, opacity: 1 }, this._speed );
					}
				}
				
			}
		},
		init : function() {
			//console.log("M_AMP init");
			this._container = $("div.fside");
			this._tab = new TAB().init( this, this._container.find("div.part"), this._container.find("ul.tab li") );

			this._video = new VIDEO().init(
												this,
												this._container.find("div.view_video a"),
												this._container.find("div.videoContainer"),
												this._container.find("div.videoContainer>div.close_btn>a")
										  );
		}
	};

	$(document).ready(function() {
		M_LFS.init();
		M_SMP.init();
		M_DEC.init();
		M_UNS.init();
		M_AMP.init();
	});
})(jQuery);