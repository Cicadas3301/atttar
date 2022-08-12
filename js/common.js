$(document).ready(function() {
	
	$('.btn_search').click(function() {
		$('.input').toggleClass('active');
	});
	$('.big_slider .slider').slick({
		dots: true,

	});

	$('.big_video_play').click(function() {
		$('.big_video_play').toggleClass('in_active');
		$('.big_video_img').toggleClass('in_active');
	});

	if (window.matchMedia("(max-width: 991.99px)").matches) {
		$('.header_location, .header_socials, .header_button, .header_nav').appendTo('.header_mob');
	}

	$('.header_burger').on('click', function () {
		$(this).toggleClass('active');
		$('.header_mob').toggleClass('active');
		$('body').toggleClass('ov-hidden');
	})



});