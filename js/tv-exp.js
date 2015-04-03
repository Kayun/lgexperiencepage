


  (function(tvexp) {

    // The global jQuery object is passed as a parameter
    tvexp(window.jQuery, window, document);

  }(function($, window, document) {

    // The $ is now locally scoped 

   // Listen for the jQuery ready event on the document
   $(function() {
     
     console.log('The DOM is ready');

     // The DOM is ready!

   });
    
    console.log('The DOM may not be ready');

   // The rest of code goes here!

  }));





function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
ie = isIE ();

$(function() {
// Ховеры на главной
    var smartvid = document.getElementById('smart-vid');
    if ($('.exp-index').length>0){
      $('.jhover1').hover(function() {
        $('.exp_logo_1').addClass('hover');
        if (ie !== 8){
          $('.slayer_1_bg').stop().animate({
           width:'451px',
           height:'352px',
           top:'64px'
          }, 800);
        }
        $('.slayer_1_horse').stop().animate({
          left: '-10px'
        }, 800);
        $('.exp_logo_1').stop().animate({
          width: '480px'
        }, 800, "easeOutExpo");
        $('.exp_logo_n_1').stop().animate({
          width: '242px'
        }, 800, "easeOutExpo");
        $('.jslide2').stop().animate({
          left: "470px"
        }, 800, "easeOutExpo");
        $('.jslide3').stop().animate({
          left: "720px"
        }, 800, "easeOutExpo");
      },
        function() {

          $('.exp_logo_1').toggleClass('hover');
          $('.jslide2').stop().animate({
            left: "298px"
          }, 800, "easeOutExpo");

          $('.jslide3').stop().animate({
            left: "640px"
          }, 800, "easeOutExpo");

          $('.slayer_1_bg').stop().animate({
           width:'410px',
           height:'320px',
           top:'89px'
          }, 800);

          $('.slayer_1_horse').stop().animate({
            left: '0px'
          }, 600);
          $('.exp_logo_2').stop().animate({
            width: '384'
          }, 800, "easeOutExpo");
          $('.exp_logo_narrow').stop().animate({
            width: '296'
          }, 800, "easeOutExpo");

      });
      
      $('.jhover2').hover(function() {
        $('.exp_logo_2').addClass("hover");

        $('.exp_logo_1').stop().animate({
          width: '158px'
        }, 800, "easeOutExpo");

        
        $('.exp_logo_2').stop().animate({
          width: '530px'
        }, 800, "easeOutExpo");

        $('.slayer_2_bg').stop().animate({
           width:'480px',
           height:'335px',
           top:'57px'
          }, 800);
        $('.slayer_2_horse').stop().animate({
          width: '504px',
          height: '315px',
          top:'120px',
          left:'95px'
        }, 800);
        $('.slayer_2_feathers').stop().animate({
          top:'50px',
          left:'0px'
        }, 800);


        $('.slide_2').stop().animate({
          left: "156px"
        }, 800, "easeOutExpo");

        $('.jslide3').addClass("hover").stop().animate({
          left: "700px"
        }, 800, "easeOutExpo");

      },function() {
          $('.exp_logo_1').stop().animate({
            width: '296px'
          }, 800, "easeOutExpo");

          $('.exp_logo_2').stop().animate({
            width: '384px'
          }, 800, "easeOutExpo");

          $('.exp_logo_2').toggleClass("hover");

          $('.jslide2').stop().animate({
            left: "320px"
          }, 800, "easeOutExpo");

          $('.jslide3').addClass("hover").stop().animate({
            left: "640px"
          }, 800, "easeOutExpo");

          $('.slayer_2_bg').stop().animate({
             width:'537px',
             height:'375px',
             top:'39px'
            }, 800);

            $('.slayer_2_horse').stop().animate({
              width: '480px',
              height: '300px',
              top:'120px',
              left:'95px'
            }, 600);
            $('.slayer_2_feathers').stop().animate({
              left: '20px',
              top: '27px'
            }, 600);

      });
      
      $('.jhover3').hover(function() {
        if (ie !== 8){
          smartvid.play();  
        }

        $('.exp_logo_3').addClass("hover");

        $('.exp_logo_3').stop().animate({
          width: '484px'
        }, 800, "easeOutExpo");
        $('.exp_logo_n_3').stop().animate({
          width: '246px'
        }, 800, "easeOutExpo");

        $('.jslide2').stop().animate({
          left: "240px"
        }, 800, "easeOutExpo");

        $('.jslide3').stop().animate({
          left: "496px"
        }, 800, "easeOutExpo");

      }, function() {
        $('.exp_logo_3').toggleClass("hover");

        $('.exp_logo_narrow').stop().animate({
          width: '296px'
        }, 800, "easeOutExpo");
        $('.exp_logo_2').stop().animate({
          width: '384px'
        }, 800, "easeOutExpo");
        
        $('.jslide2').stop().animate({
          left: "320px"
        }, 800, "easeOutExpo");
        $('.jslide3').stop().animate({
          left: "640px"
        }, 800, "easeOutExpo");
        
        if (ie !== 8){
          smartvid.pause();  
        }
        
      });
    }

  
});


$(function() {

  if($('.exp-index').length>0){
      $('#smart-vid').bind('canplaythrough',function() {
        var vid = document.getElementById('smart-vid');
        vid.style.display = 'block';
        $(this).show();
      });
     }

   var s = skrollr.init({
      easing:'bounce',
      mobileCheck: function() {
          return false;
      },
      render: function(data) {
        // запуск видео при прокрутке
        if ($(".layer_onview").length > 0 && ie !== 8){
          var $seventh = $(".layer_onview");
          
          var $video = $seventh.find("video");

          if ($video.length>1){
            $video.each(function(i){
              var videoElem = [];
              
              videoElem[i] = $video[i];
              var videoTop = $(this).offset().top;
              var videoBottom = videoTop + $(this).height();
              
              var viewTop = $(window).scrollTop();
              var viewBottom = viewTop + $(window).height();

              var isViewable = (videoTop < viewBottom && videoBottom > viewTop);
              if(isViewable) {
                if(videoElem[i].paused) {
                  videoElem[i].play();
                }
              }
              else {
                if(!videoElem[i].paused) {
                  videoElem[i].pause();
                }
              }

            });
          }
          else{

            var videoElem = $video[0];
            
            var videoTop = $video.offset().top;
            var videoBottom = videoTop + $video.height();
            
            var viewTop = $(window).scrollTop();
            var viewBottom = viewTop + $(window).height();

            var isViewable = (videoTop < viewBottom && (videoBottom+300) > viewTop);
            if(isViewable) {
              if(videoElem.paused) {
                videoElem.play();
              }
            }
            else {
              if(!videoElem.paused) {
                videoElem.pause();
              }
            }
          }
        }
        if($('.exp-oled').length>0 && ie !== 8){
          var $elem = $('#curved');

          var videoTop = $elem.offset().top;
          var videoBottom = videoTop + $elem.height();
          
          var viewTop = $(window).scrollTop();
          var viewBottom = viewTop + $(window).height();

          var isViewable = (videoTop < viewBottom && videoBottom > viewTop);
          if(isViewable) {
            $elem.jsMovie('play');
          }
        }
        if($('.exp-3d').length>0){
          var $elem = $('[data-glasses-show]');

          var videoTop = $elem.offset().top;
          var videoBottom = videoTop + $elem.height();
          
          var viewTop = $(window).scrollTop();
          var viewBottom = viewTop + $(window).height();

          var isViewable = (videoTop < viewBottom && videoBottom > viewTop);
          if(isViewable) {
            $elem.find('.layer_lg-glasses').each(function(){
              var i = $(this).attr('class');
                  i = i.replace( /[^\d.]/g, '' );
              var t = 500 + i*250;
              console.log(i);
              setTimeout( function(){
                $('.layer_lg-glasses_'+i).fadeIn({
                  duration:800
                })
              }, t);
            });
          }
        }

      }
   });

  // Загрузка видео и подгрузка картинок в конце


  exp_init = function(){
    $('body').show();
    var isiPad = navigator.userAgent.match(/iPad/i) != null;

    if($('.wrapper_main').length>0){
      if ($('div.exp').hasClass('exp-oled')){
        dataFade();
        loadMedia();
      }
      else if (ie === 8){
        dataFade();
      }
      else{
        var vid = document.getElementById('vid');
        vid.play();
        $('#vid').bind('timeupdate',function(e) {
          if(this.duration - this.currentTime < 0.1) {
            
            dataFade(); 
            loadMedia();
            $('#vid').unbind('timeupdate');
          }
        });
      }
     /*dataFade();
     loadMedia();*/
      
     if($('.exp-oled').length>0 && ie !== 8){
      $('#curved').jsMovie({
         folder: '../images/oled/anim/',
          sequence: 'anim_#.jpg',
          from: 1,
          to: 5,
          height: 371,
          width: 374,
          repeat: false,
          performStop: false,
          fps: 9
      });
     }
    };
    /*if($('[data-animation-container]').length > 0){
      $('[data-animation-container]').each(function(){
        playAnimation($(this).data('animation-container'));
      });
    }*/

  }
  /*
  function playAnimation(name){
    var $holder = $('[data-animation-container="'+name+'"]');
    var i       = ($holder.find('[data-animation-frame]').length-1);
    var n = 0;

    playFrame(0, i, $holder);
    //
    /*$holder.find('[data-animation-frame]').each(function(n){
      $(this).
    });*/
  /*}

  function playFrame(n,i){
    console.log(n, i);
    $('body').find('[data-animation-frame]').eq(n).animate({
              opacity: 0,
           }, 500);
    $('body').find('[data-animation-frame]').eq(n+1).animate({
              opacity: 1,
           }, 600).promise().done(function(){
            
              n++;
              console.log('!',n, i);
              if (n > i){n = 0;}
              playFrame(n, i);
            });*/
    /*$('body').find('[data-animation-frame]').eq(n+1).fadeIn(30000, function(){
      n = n++;
      if (n > i){n = 0;}
      playFrame(n, i);
    });*/

  /*}*/

  function loadMedia(){
    $('.exp').find('[data-loadsrc]').each(function(){
      var dls = $(this).data('loadsrc');

      $(this).attr('src', dls)
      if ($(this).is('source')){
        $(this).parent().load();
      }
    });
    $('.exp').find('[data-loadbgsrc]').each(function(){
      var dlbgs = $(this).data('loadbgsrc');
      $(this).css('backgroundImage', 'url(' + dlbgs+ ')');
    });
  }

  function videoEnd(){
     
  }

  function dataFade(){
    //  появляющиеся надписи  
    $('[data-fade]').each(function(){
      var i = $(this).data('fade');
      var t = 250 + i*250;
      setTimeout( function(){
        $('[data-fade="'+i+'"]').fadeIn({
          duration:800
        })
      }, t);
    });
  }


  $(window).bind('load', exp_init());

  //видео

   /*playerObjects = {}

    function onYouTubePlayerReady() {
      playerObjects['0'] = new YT.Player('webOSMovie_main');
    }*/

    function exp_play(id){
      iframe = document.getElementById(id);
      iframe.contentWindow.postMessage(JSON.stringify({
          "event": "command",
          "func": "playVideo",
          "args":  []
      }), "*");
    }
    function exp_change(id, vid_id){
      iframe = document.getElementById(id);
      iframe.loadVideoById(vid_id);
    }

    function exp_stop(id){
      iframe = document.getElementById(id);

      iframe.contentWindow.postMessage(JSON.stringify({
          "event": "command",
          "func": "stopVideo",
          "args":  [],
          "id": id
      }), "*");
    }

    function exp_open_mask($par){
      $par.find('.mask').delay(500).animate({
            width: 0,
            height:495
          }, 1500);
    }

    $('.jMovie').click(function(){    
      var id = $(this).attr('data-id');
      var $holder = $(this).parent();

      if ($holder.hasClass('wrapper_main')){
        $holder.find('.h-video').show();  
      }
      
      if ($holder.find('.featureVisual').hasClass('layer_onview')){
        $holder.find('.featureVisual').hide();
      }

      $holder.find('[data-cover-el]').fadeOut(300);
      $holder.find('.closeWebOS').show();
      $holder.find('.iframe__holder').show();
      if ($holder.find('.mask').length > 0){
        $holder.find('.mask').delay(500).animate({
            width: 0,
            height:495
          }, 1500, "easeOutBounce", function(){
            $holder.find('[data-cover-img]').fadeOut(1500);
            exp_play(id);
          }); 
      }
      else{
        $holder.find('[data-cover-img]').fadeOut(1500);
        exp_play(id);
      }
    });

    $('.jcloseMovie').click(function(){
      var $holder = $(this).parent();
      var id = $(this).parent().find('.jMovie').attr('data-id');
      exp_stop(id);
      //$(this).hide();
      if ($(this).parent().hasClass('wrapper_wide')){
        $(this).parent().parent().removeClass('h-wrapper_wide_transparent');  
      }
      
      $(this).parent().find('.featureVisual').fadeIn(500);
      $(this).parent().find('.mask').delay(500).animate({
        width: "993px",
        height:"495px"
      }, 500, "easeOutExpo");
      $holder.find('[data-cover-el]').delay(1000).fadeIn(300);
      /*$(this).parent().find('.jtext').delay(1000).fadeIn(300);
      $(this).parent().find('.jMovie').delay(1500).fadeIn(300);*/
    });

  $('[data-video-link]').click(function(){
    var embed = $(this).data('video');
    var $holder = $('#webOSMovie_main').parent().parent();

    $(this).parent().parent().find('.active').removeClass('active');
    $(this).parent().addClass('active');

    $('#webOSMovie_main').attr('src', 'http://www.youtube.com/embed/'+embed+'?enablejsapi=1&version=3').attr('autoplay', 1);
    $holder.find('[data-cover-el]').fadeOut(300);
    $holder.find('.jMovie').fadeOut(300);
    $holder.find('[data-cover-img]').fadeOut(1500);
    $holder.find('.h-video').show();
   // exp_change('webOSMovie_main', embed);
  });


  //  эмулятор

  $('[data-emulator]').click(function(){
    var $holder = $(this).parent();
    
    $holder.append('<iframe id="emulator"></iframe>');
    $holder.find('iframe#emulator').attr({
      'width' : '960',
      'height': '685',
      'src': 'http://webos.promodev.ru/tv/'
    });
    $holder.find('[data-cover-el]').fadeOut(300);
    $holder.find('.mask').delay(500).animate({
        width: 0,
        height:495
      }, 1500, "easeOutBounce", function(){
        $holder.delay(300).find('[data-cover-img]').fadeOut(300);
        $holder.prepend('<div class="modal_backdrop"></div>');
        $holder.find('iframe').show();
        $holder.parent().toggleClass('opened');
      });
  });

  $('[data-close-emulator]').click(function(){
    var $holder = $(this).parent();
    $holder.find('iframe#emulator').remove();
    $holder.find('.modal_backdrop').remove();
    $holder.find('[data-cover-img]').fadeIn(1500);
    $holder.parent().toggleClass('opened');
    $holder.animate({height: 494}, 500,function(){
      
      $holder.find('.mask').delay(500)
        .animate({
          width: "993px",
          height:"495px"
        }, 500, function(){
          $holder.find('[data-cover-el]').fadeIn(300);
        });
    });
  });

  // 4ый пиксель - страница Олед

  $('[data-pixel]').click(function(){

    var $holder = $(this).parent();
    var $noise = $holder.parent().find('.noise');
    if ($noise.is(':visible')){
      $(this).toggleClass('active');
      $holder.parent().find('.layer_wpixel').show();
      $noise.fadeOut();
      $holder.find('.pixel strong').text('Выключи');  
      $holder.find(' .wrgb').html('Четыре цвета<br>пикселя (WRGB)');  
    }
    else{
      $(this).toggleClass('active');
      $holder.parent().find('.layer_wpixel').hide();
      $noise.fadeIn();
      $holder.find('.pixel strong').text('Включи');   
      $holder.find(' .wrgb').html('Три цвета<br>пикселя (RGB)');  
    }
  });

  //EVENTS >> COUNTERS 
  //EVENTS >> COUNTERS 
  $('.wrapper_main.smart .jMovie').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'SmartTV main video']);
  });
  $('.wrapper_main.ultra .jMovie').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Ultra main video']);
  });
  $('.wrapper_main.oled .jMovie').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Oled main video']);
  });

  $('.exp-smart .playlist .playlist__item:eq(0) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'SmartTV 1st playlist video']);
  });
  $('.exp-smart .playlist .playlist__item:eq(1) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'SmartTV 2nd playlist video']);
  });
  $('.exp-smart .playlist .playlist__item:eq(2) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'SmartTV 3rd playlist video']);
  });
  $('.exp-smart .playlist .playlist__item:eq(3) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'SmartTV 4th playlist video']);
  });
  $('.exp-ultra .playlist .playlist__item:eq(0) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Ultra 1st playlist video']);
  });
  $('.exp-ultra .playlist .playlist__item:eq(1) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Ultra 2nd playlist video']);
  });
  $('.exp-ultra .playlist .playlist__item:eq(2) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Ultra 3rd playlist video']);
  });
  $('.exp-ultra .playlist .playlist__item:eq(3) a').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Ultra 4th playlist video']);
  });
  $('.exp-oled .player a[data-id="webOSMovie01"]').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Oled 1st player video']);
  });
  $('.exp-oled .player a[data-id="webOSMovie02"]').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Oled 2nd player video']);
  });
  $('.exp-oled .player a[data-id="webOSMovie03"]').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Video click', 'Oled 3rd player video']);
  });
  $('.exp-oled .wrapper_choose .buy').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Item click', 'Oled TV click']);
  });
  $('.exp-ultra .wrapper_choose .buy').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Item click', 'Ultra TV click']);
  });
  $('.exp-smart .wrapper_choose .buy').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Item click', 'SmartTV TV click']);
  });
  $('.exp-oled [data-pixel]').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Switch click', 'Oled 4th pixel click']);
  });
  $('.exp-smart .wrapper_smart_emulator [data-emulator]').click(function(){
    _gaq.push(['_setAccount', 'UA-35438634-1']);
    _gaq.push(['_trackEvent', 'TV Experience', 'Emulator click', 'SmartTV emulator click']);
  });

  if ($('.wrapper_choose').length>0){
    bindScrollTVs = function() {    
      var offset = $('.wrapper_choose').offset();
      if((offset.top + $('.wrapper_choose').height()) < ($(window).scrollTop() + $(window).height())) {
        $(window).unbind('scroll');

        if ($('div.exp').hasClass('exp-smart')){
          _gaq.push(['_setAccount', 'UA-35438634-1']);
          _gaq.push(['_trackEvent', 'TV Experience', 'Scroll to end', 'Smart TV Scroll to end']);
        }
        if ($('div.exp').hasClass('exp-ultra')){
          _gaq.push(['_setAccount', 'UA-35438634-1']);
          _gaq.push(['_trackEvent', 'TV Experience', 'Scroll to end', 'Ultra Scroll to end']);
        }
        if ($('div.exp').hasClass('exp-oled')){
          _gaq.push(['_setAccount', 'UA-35438634-1']);
          _gaq.push(['_trackEvent', 'TV Experience', 'Scroll to end', 'Oled Scroll to end']);
        }
      }
    }

    $(window).scroll(bindScrollTVs);
  }


  
});

