$(document).ready(function() {
	
	$('.btn_search').click(function() {
		$('.input').toggleClass('active');
	});
	$('.big_slider .slider').slick({
		dots: true,

	});

	$('.calendar_item-carousel').slick({
		dots: false,
		nav: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		nextArrow: '<img class="slick-arrow slick-next" src="../images/calendararrow.png">',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
			  }
			}
		  ]
	});

	$('.big_video_play').click(function() {
		$('.big_video_play').toggleClass('in_active');
		$('.big_video_img').toggleClass('in_active');
	});

	if (window.matchMedia("(max-width: 991.90px)").matches) {
		$('.header_location, .header_socials, .header_button, .header_nav').appendTo('.header_mob');
		$('.games_top-select, .games_top-button').appendTo('.games_top-mob');
		$('.calendar_menu-item, .calendar_wrap, .calendar_menu-button').appendTo('.calendar_menu-mob')
	}

	$('.header_burger').on('click', function () {
		$(this).toggleClass('active');
		$('.header_mob').toggleClass('active');
		$('body').toggleClass('ov-hidden');
	});

	$('.games_top-input').click(function (e) {
		e.preventDefault();
		$(this).parent().find('.games_top-toggle').stop().slideToggle();
		$(this).toggleClass('active');
	});

	$('.games_top-close, .games_top-filter').on('click', function () {
		$('.games_top-mob').toggleClass('active');
	})		

	$('.games_top-toggle > span').on('click', function () {
		var inptText = $(this).html();
		$(this).parent().parent('.games_top-select').find('.games_top-input > span').html();
		$(this).parent().parent('.games_top-select').find('.games_top-input > span').html(inptText);
	});

	$('.calendar_menu-filter, .calendar_menu-close').on('click', function () {
		$('.calendar_menu-mob').toggleClass('active');
		$('body').toggleClass('ov-hidden');
	})

	$('.calendar_menu-top').on('click', function () {
		$(this).siblings('.calendar_menu-inputs').toggleClass('active');
	})

});