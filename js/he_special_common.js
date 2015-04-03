var UserAgent = navigator.userAgent;
if (UserAgent.match(/iPhone|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|LG|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
  isMobileWebKit = true;
}else{
  isMobileWebKit = false;
}
if (isMobileWebKit && $(window).width() < 1024) {
	location.href="http://m.lg.com/uk/HEProductExperiencePage/tv/main.jsp"
}
function fbs_click() {
	var width = 600;
	var height = 400;
	var title = "LG HE Special";
	var url = "http://www.lg.com/uk/HEProductExperiencePage/tv/main";
	var leftPosition, topPosition;
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	u=location.href;
	t=document.title;
	window.open("http://www.facebook.com/sharer.php?u="+url+"&t="+title,'fbsharer', windowFeatures);
	return false;
}

function tws_click() {
	var width = 600;
	var height = 450;
	var title = "LG HE Special";
	var url = "http://www.lg.com/uk/HEProductExperiencePage/tv/main";
	var leftPosition, topPosition;
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	u=location.href;
	t=document.title;
	window.open("https://twitter.com/share?text="+title+"&url="+url,'twsharer', windowFeatures);
	return false;
}

function gps_click() {
	var width = 850;
	var height = 650;
	var title = "LG HE Special";
	var url = "http://www.lg.com/uk/HEProductExperiencePage/tv/main";
	var leftPosition, topPosition;
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	u=location.href;
	t=document.title;
	window.open("https://plus.google.com/share?url="+url,'gpsharer', windowFeatures);
	return false;
}

function prs_click() {
	var width = 800;
	var height = 400;
	var title = "LG HE Special";
	var url = "http://www.lg.com/uk/HEProductExperiencePage/tv/main";
	var media = "http://www.lg.com/lg3-common/images/global/lg-logo-fb.png";
	var descript = "EXPERIENCE LG's Latest Products";
	var leftPosition, topPosition;
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	u=location.href;
	t=document.title;
	window.open("http://pinterest.com/pin/create/button/?url="+url+"&media="+media+"&description="+descript,'prsharer', windowFeatures);
	return false;
}



function youtube_link(ysrc){
	$('#product_videos_box iframe').attr('src',"http://www.youtube.com/embed/"+ysrc+"?rel=0&wmode=opaque&vq=large&showinfo=0");
}

$(function(){

	$(".x2_slide01").hover(function() {
		$(".x2_slide02").addClass("hover").stop()
		.animate({
			left: "640px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x2_slide02").addClass("hover").stop()
		.animate({
			left: "480px"
		}, 800, "easeOutExpo");
	});
	
	$(".x2_slide02").hover(function() {
		$(".x2_slide02").addClass("hover").stop()
		.animate({
			left: "320px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x2_slide02").addClass("hover").stop()
		.animate({
			left: "480px"
		}, 800, "easeOutExpo");
	});
	
	$(".x3_slide01").hover(function() {
		$(".x3_slide02").addClass("hover").stop()
		.animate({
			left: "480px"
		}, 800, "easeOutExpo");
		$(".x3_slide03").addClass("hover").stop()
		.animate({
			left: "720px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x3_slide02").addClass("hover").stop()
		.animate({
			left: "320px"
		}, 800, "easeOutExpo");
		$(".x3_slide03").addClass("hover").stop()
		.animate({
			left: "640px"
		}, 800, "easeOutExpo");
	});
	
	$(".x3_slide02").hover(function() {
		$(".x3_slide02").addClass("hover").stop()
		.animate({
			left: "240px"
		}, 800, "easeOutExpo");
		$(".x3_slide03").addClass("hover").stop()
		.animate({
			left: "720px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x3_slide02").addClass("hover").stop()
		.animate({
			left: "320px"
		}, 800, "easeOutExpo");
		$(".x3_slide03").addClass("hover").stop()
		.animate({
			left: "640px"
		}, 800, "easeOutExpo");
	});
	
	$(".x3_slide03").hover(function() {
		$(".x3_slide02").addClass("hover").stop()
		.animate({
			left: "240px"
		}, 800, "easeOutExpo");
		$(".x3_slide03").addClass("hover").stop()
		.animate({
			left: "480px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x3_slide02").addClass("hover").stop()
		.animate({
			left: "320px"
		}, 800, "easeOutExpo");
		$(".x3_slide03").addClass("hover").stop()
		.animate({
			left: "640px"
		}, 800, "easeOutExpo");
	});
	
	$(".x4_slide01").hover(function() {
		$(".x4_slide02").addClass("hover").stop()
		.animate({
			left: "640px"
		}, 800, "easeOutExpo");
		$(".x4_slide03").addClass("hover").stop()
		.animate({
			left: "640px",
			top: "235px"
		}, 800, "easeOutExpo");
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "800px",
			top: "235px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x4_slide02, .x4_slide03").addClass("hover").stop()
		.animate({
			left: "480px"
		}, 800, "easeOutExpo");
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "720px"
		}, 800, "easeOutExpo");
	});
	
	$(".x4_slide02").hover(function() {
		$(".x4_slide03").addClass("hover").stop()
		.animate({
			left: "480px",
			top: "315px"
		}, 800, "easeOutExpo");
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "720px",
			top: "315px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x4_slide03").addClass("hover").stop()
		.animate({
			left: "480px",
			top: "235px"
		}, 800, "easeOutExpo");
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "720px",
			top: "235px"
		}, 800, "easeOutExpo");
	});
	
	$(".x4_slide03").hover(function() {
		$(".x4_slide03").addClass("hover").stop()
		.animate({
			left: "480px",
			top: "235px"
		}, 800, "easeOutExpo");
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "800px",
			top: "235px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x4_slide03").addClass("hover").stop()
		.animate({
			left: "480px",
			top: "235px"
		}, 800, "easeOutExpo");
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "720px",
			top: "235px"
		}, 800, "easeOutExpo");
	});
	
	$(".x4_slide04").hover(function() {
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "640px",
			top: "235px"
		}, 800, "easeOutExpo");
	}, 
	function() {
		$(".x4_slide04").addClass("hover").stop()
		.animate({
			left: "720px",
			top: "235px"
		}, 800, "easeOutExpo");
	});
	
	//videos thumb
	$(".play_mask").click(function() {
		$('.thumb_list ul li').removeClass('active');        
		$('.thumb_list ul li.' + $(this).attr('rel')).addClass('active');
		return false;
	});
	$('.p1 a').click();
	// hindu code written by british guys todo: rewrite
	$("#videos_thumb .next, #funvideos_thumb .next").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			'left': "-880px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		//$(this).parent().find(".next2").css('display', 'block');
		$(this).parent().find(".prev").css('display', 'block');
		return false;
	});
	$("#videos_thumb .next2, #funvideos_thumb .next2").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			'left': "-1760px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".next3").css('display', 'block');
		$(this).parent().find(".prev").css('display', 'none');
		$(this).parent().find(".prev2").css('display', 'block');
		return false;
	});
	$("#videos_thumb .next3, #funvideos_thumb .next3").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			'left': "-2640px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".next4").css('display', 'block');
		$(this).parent().find(".prev2").css('display', 'none');
		$(this).parent().find(".prev3").css('display', 'block');
		return false;
	});
	$("#videos_thumb .next4, #funvideos_thumb .next4").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			left: "-3520px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".prev3").css('display', 'none');
		$(this).parent().find(".prev4").css('display', 'block');
		return false;
	});
	$("#videos_thumb .prev4, #funvideos_thumb .prev4").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			left: "-2640px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".prev3").css('display', 'block');
		$(this).parent().find(".next4").css('display', 'block');
		return false;
	});
	$("#videos_thumb .prev3, #funvideos_thumb .prev3").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			left: "-1760px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".prev2").css('display', 'block');
		$(this).parent().find(".next4").css('display', 'none');
		$(this).parent().find(".next3").css('display', 'block');
		return false;
	});
	$("#videos_thumb .prev2, #funvideos_thumb .prev2").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			left: "-880px"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".prev").css('display', 'block');
		$(this).parent().find(".next3").css('display', 'none');
		$(this).parent().find(".next2").css('display', 'block');
		return false;
	});
	$("#videos_thumb .prev, #funvideos_thumb .prev").click(function() {
		$('#videos_thumb .thumb_list, #funvideos_thumb .thumb_list').animate({
			left: "0"
		}, 400, "easeOutExpo");
		$(this).css('display', 'none');
		$(this).parent().find(".next2").css('display', 'none');
		$(this).parent().find(".next").css('display', 'block');
		return false;
	});

	
	//monitor campatibility
	$(".btn_campatibility a.open").click(function() {
		$(this).css('display','none');
		$(".btn_campatibility a.close").css('display','block');
		$(".campatibility_table").slideDown(300);
	});
	$(".btn_campatibility a.close").click(function() {
		$(this).css('display','none');
		$(".btn_campatibility a.open").css('display','block');
		$(".campatibility_table").slideUp(300);
	});
	$(".btn_compare a.open").click(function() {
		$(this).css('display','none');
		$(".btn_compare a.close").css('display','block');
		$(".compare_table").slideDown(300);
	});
	$(".btn_compare a.close").click(function() {
		$(this).css('display','none');
		$(".btn_compare a.open").css('display','block');
		$(".compare_table").slideUp(300);
	});
	$(".btn_compare_uc97 a.open").click(function() {
		$(this).css('display','none');
		$(".btn_compare_uc97 a.close").css('display','block');
		$(".compare_table").slideDown(300);
	});
	$(".btn_compare_uc97 a.close").click(function() {
		$(this).css('display','none');
		$(".btn_compare_uc97 a.open").css('display','block');
		$(".compare_table").slideUp(300);
	});
	
	$(window).scroll(function() {
		if($(document).scrollTop() < 1500){
			$("#sideMenu").fadeOut(500);
		} else {
			$("#sideMenu").fadeIn(500);
		}
	});

});