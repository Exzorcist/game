$(document).ready(function(){
	NProgress.start();
});

$(window).on("load", function() {
	setTimeout(function(){
		NProgress.set(0.1);
		$('.fon_site').removeClass('out').addClass('fade');
	}, 500);
	setTimeout(function(){
		NProgress.set(0.2);
		$('header').removeClass('out').addClass('fade');
	}, 1000);
	setTimeout(function(){
		NProgress.set(0.3);
		$('.content_for_game').removeClass('out').addClass('fade');
	}, 1500);
	setTimeout(function(){
		NProgress.set(0.4);
		$('.title_game').removeClass('out').addClass('fade');
	}, 2000);
	setTimeout(function(){
		NProgress.set(0.5);
		$('.specification_game').removeClass('out').addClass('fade');
	}, 2500);
	setTimeout(function(){
		NProgress.set(0.6);
		$('.block_spec').removeClass('out').addClass('fade');
	}, 3000);
	setTimeout(function(){
		NProgress.set(0.7);
		$('.block_spec').removeClass('out').addClass('fade');
	}, 3500);
	setTimeout(function(){
		NProgress.set(0.7);
		$('.keys').removeClass('out').addClass('fade');
	}, 4000);
	setTimeout(function(){
		NProgress.set(0.7);
		$('.description_game').removeClass('out').addClass('fade');
	}, 4500);
	setTimeout(function(){
		NProgress.set(0.7);
		$('.sreen_game').removeClass('out').addClass('fade');
	}, 5000);
	setTimeout(function(){
		NProgress.set(0.8);
		$('.screen1').removeClass('out').addClass('fade');
	}, 5500);
	setTimeout(function(){
		NProgress.set(0.8);
		$('.screen2').removeClass('out').addClass('fade');
	}, 6000);
	setTimeout(function(){
		NProgress.set(0.8);
		$('.screen3').removeClass('out').addClass('fade');
	}, 6500);
	setTimeout(function(){
		NProgress.set(0.9);
		$('footer').removeClass('out').addClass('fade');
	}, 7000);
	setTimeout(function(){
		NProgress.done();
		$('canvas').removeClass('out').addClass('fade');
	}, 7500);
});