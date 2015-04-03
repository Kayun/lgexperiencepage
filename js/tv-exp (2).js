$(function() {



    var smartvid = document.getElementById('smart-vid');

    $('.jslide1').hover(function() {
      $('.slayer_1_bg').stop().animate({
       width:'451px',
       height:'352px',
       top:'64px'
      }, 800);
      $('.slayer_1_horse').animate({
        left: '-10px'
      }, 800);

          //  smartvid2.play();  top: 87px;  left: 20px;                width:410px;  height: 320px;


        $('.jslide2').addClass("hover").stop()
        .animate({
          left: "470px"
        }, 800, "easeOutExpo");
        $('.jslide3').addClass("hover").stop()
        .animate({
          left: "720px"
        }, 800, "easeOutExpo");
      },
      function() {
        $('.jslide2').addClass("hover").stop()
        .animate({
          left: "350px"
        }, 800, "easeOutExpo");
        $('.jslide3').addClass("hover").stop()
        .animate({
          left: "640px"
        }, 800, "easeOutExpo");

        $('.slayer_1_bg').stop().animate({
         width:'410px',
         height:'320px',
         top:'89px'
        }, 800);
        $('.slayer_1_horse').animate({
          left: '0px'
        }, 600);

    });
    
    $('.jslide2').hover(function() {
      $('.slayer_2_bg').stop().animate({
         // backgroundSize: '105%'
         width:'480px',
         height:'335px',
         top:'57px'
        }, 800);
        $('.slayer_2_horse').animate({
          left: '-30px'
      }, 800);


        $('.jslide2').addClass("hover").stop()
        .animate({
          left: "156px"
        }, 800, "easeOutExpo");
        $('.jslide3').addClass("hover").stop()
        .animate({
          left: "700px"
        }, 800, "easeOutExpo");
      }, 
      function() {
        $('.jslide2').addClass("hover").stop()
        .animate({
          left: "320px"
        }, 800, "easeOutExpo");
        $('.jslide3').addClass("hover").stop()
        .animate({
          left: "640px"
        }, 800, "easeOutExpo");

        $('.slayer_2_bg').stop().animate({
           width:'537px',
           height:'375px',
           top:'39px'
          }, 800);
          $('.slayer_2_horse').animate({
            left: '10px'
          }, 600);
     //   smartvid2.pause();
    });
    
    $('.jslide3').hover(function() {

     //   smartvid.setAttribute('loop','');
        smartvid.play();
        $('.jslide2').addClass("hover").stop()
        .animate({
          left: "240px"
        }, 800, "easeOutExpo");
        $('.jslide3').addClass("hover").stop()
        .animate({
          left: "496px"
        }, 800, "easeOutExpo");
      }, 
      function() {
        $('.jslide2').addClass("hover").stop()
        .animate({
          left: "320px"
        }, 800, "easeOutExpo");
        $('.jslide3').addClass("hover").stop()
        .animate({
          left: "640px"
        }, 800, "easeOutExpo");
        smartvid.pause();
    });

  
});


$(function() {

  /*$('[data-stellar]').each(function(){
    $(this).stellar();  
  })
*/
  //$('document').stellar(); 

 var s = skrollr.init({
  easing:'bounce',
  //
  render: function(data) {
      if ($(".layer_onview").length > 0){
        var $seventh = $(".layer_onview");
        
        var $video = $seventh.find("video");
        var videoElem = $video[0];
        
        var videoTop = $video.offset().top;
        var videoBottom = videoTop + $video.height();
        
        var viewTop = $(window).scrollTop();
        var viewBottom = viewTop + $(window).height();

        //play video when opacity is at least 50% and at least some of the video player is show
        var isViewable = $seventh.css("opacity") > 0.5 && (videoTop < viewBottom && videoBottom > viewTop);
        if(isViewable) {
          if(videoElem.paused) {
            videoElem.play();
            console.log("play");
          }
        }
        else {
          if(!videoElem.paused) {
            videoElem.pause();
            console.log("pause");
          }
        }
    }
  }
 });




exp_init = function(){
  
  $('body').show();

  if($('.wrapper_main').length>0){
    $('.wrapper_main .featureVisual img').hide();
    
    var vid = document.getElementById('vid');
    vid.play();

    $('#vid').on('timeupdate',function(e) {
      if(this.duration - this.currentTime < 0.01) {
        setTimeout(videoEnd, 300);
      }
    })
  }
/*
// перышки
if($('.wrapper_main').hasClass('ultra')){
  imagesLoaded( document.querySelector('.wrapper_main'), function( instance ) {
    $('body').delay(500);

    var $feathers = $('.jfeathers').find('img');
    var last = $feathers.last().index();
    
    feathersIn($feathers, last);
  });
}

// фейерверк
if($('.wrapper_main').hasClass('smart')){
  imagesLoaded( document.querySelector('.wrapper_main'), function( instance ) {
    $('body').delay(500);
    var time = 500;
    $('.jfireworks').find('img').each(function(i){
      setTimeout( function(){$('.jfireworks img').eq(i).fadeIn(300)}, time)
      time += 600;
    });
  });
}
*/


}
$(window).on('load', exp_init());

function videoEnd(){
  
  $('.layer_video_oled').hide();
  $('.wrapper_main .featureVisual img').show();
  $('.wrapper_main .h-video').show();
  dataFade();  
}

function dataFade(){
  //  появляющиеся надписи  
  $('[data-fade]').each(function(){
    //console.log($(this));
    var i = $(this).data('fade');
    var t = 500 + i*500;
    setTimeout( function(){
      $('[data-fade="'+i+'"]').fadeIn({
        duration:800
      })
    }, t);
  });

}

function feathersIn($feathers, last){
  var time = 500;

  $feathers.each(function(i){
    setTimeout( function(){$feathers.eq(i).fadeIn({
    duration:4000, 
    complete: function(){
      featherOut($(this));
      if (i === last){
        feathersIn($feathers, last);
      }
    }
  })
      }, time)
    time += 700;
  });
}
function featherOut($el){
  $('body').delay(4000);
  $el.fadeOut(4000);
}


// шевелящийся бэкграунд
$('[data-wmouse]').mousemove(function(e){
    var $back = $(this).find('[data-mouse-layer]');

    var pos     = $(this).offset();
    var elPos   = { X:pos.left , Y:pos.top };
    var mPos    = { X:(e.pageX - elPos.X), Y:(e.pageY - elPos.Y) };
    var movePos = { X: Math.floor(mPos.X * -1 / 28), Y: Math.floor(mPos.Y * -1 / 28)};
    
    $back.css('background-position', movePos.X + 'px ' + movePos.Y + 'px');
    
});



//видео

 playerObjects = {}

  function onYouTubePlayerReady() {
    playerObjects['0'] = new YT.Player('webOSMovie_main');
    console.log(playerObjects['0']);
  }

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
    $par.find('.mask').delay(500)
        .animate({
          width: 0,
          height:495
        }, 1500);
  }

  $('.jMovie').click(function(){    
    var id = $(this).attr('data-id');
    var $holder = $(this).parent();

    $holder.find('[data-cover-el]').fadeOut(300);
    $(this).parent().find('.closeWebOS').show();

    if ($holder.find('.mask').length > 0){
      $holder.find('.mask').delay(500)
        .animate({
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
    $(this).hide();
    if ($(this).parent().hasClass('wrapper_wide')){
      $(this).parent().parent().removeClass('h-wrapper_wide_transparent');  
    }
    
    $(this).parent().find('.featureVisual').fadeIn(500);
    $(this).parent().find('.mask').delay(500)
    .animate({
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
  $holder.find('[data-cover-img]').fadeOut(1500);
 // exp_change('webOSMovie_main', embed);
});


//  эмулятор

$('[data-emulator]').click(function(){
  var $holder = $(this).parent();
  $holder.append('<iframe id="emulator"></iframe>');
  $holder.find('iframe#emulator').attr({
    'width' : '960',
    'height': '685',
    'src': 'http://webos.test.promo.ru/tv/'
  });

  
  $holder.find('[data-cover-el]').fadeOut(300);
  $holder.parent().toggleClass('opened');

  $holder.find('.mask').delay(500).animate({
      width: 0,
      height:495
    }, 1500, "easeOutBounce", function(){
      
      $holder.delay(1000).find('[data-cover-img]').fadeOut(300);
      
      $holder.animate({height: 685}, 1500, function(){
        $holder.prepend('<div class="modal_backdrop"></div>');
      })
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
  
})

$('[data-remote]').click(function(){
  $(this).parent().find('[data-remote-action]').fadeOut(600, function(){
    $(this).parent().find('[data-remote-info]').fadeIn();
  });
});

$('[data-pigeon-switch]').click(function(){
  var q = $(this).parent().data('pigeon');
  var $p = $(this).parent().parent();
  q = 1-q;
  $p.find('[data-pigeon]').data('pigeon', q);
  $p.find('[data-pigeon-switch]').toggleClass('active');
  $p.find('img').fadeOut(400, 
    function(){
      $p.find('img').remove();
      $p.find('.h-pigeon').append('<img style="display:none" data-pigeon src="../images/ultra/pigeon_'+(q)+'.png" height="342" width="499" />');

      $p.find("img").one("load", function() {
        $(this).fadeIn(400);
      }).each(function() {
        if(this.complete) $(this).load();
      });
  });

  

  
  
})


});
