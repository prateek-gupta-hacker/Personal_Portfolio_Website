$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	// slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});


	// toggle menu/navbar script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	// owl carousel script

	$('.carousel').owlCarousel({
		margin:20,
		loop:true,
		autoplayTimeOut: 2000,
		autoplayHoverPause:true,
		responsive: {
			0:{
				items:1,
				nav: false
			},
			600:{
				items:2,
				nav: false
			},
			1000:{
				items:3,
				nav: false
			}
		}
	});
});

// typing animation script

var typed = new Typed(".typing",{
	strings: ["FrontEnd Developer", "Graphic Designer","Youtuber", "Video Editor", "Freelancer"],
	typeSpeed: 100,
	backSpeed:60,
	loop: true
});

var typed = new Typed(".typing-2",{
	strings: ["FrontEnd Developer", "Graphic Designer","Youtuber", "Video Editor", "Freelancer"],
	typeSpeed: 100,
	backSpeed:60,
	loop: true
});

// video script 
var videoPlayer = document.getElementById("video-player");
var myVideo = document.getElementById("my-video");
function closeVideo(){
	videoPlayer.style.display = "none";
	myVideo.src="";

}
function playVideo(file){
	myVideo.src = file;
	videoPlayer.style.display = "block";
	videoPlayer.style.transition="all 0.5s ease!important";

}