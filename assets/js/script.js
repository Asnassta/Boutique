$(document).ready(function() {

	/*Contacts*/
		let $contacts = $('.contacts')
			$contactsOpen = $('.menu__burger')
			$contactsClose = $('.contacts__close')


		$contactsOpen.on('click', function(event) {
			event.preventDefault();
			$contacts.slideToggle(400)
		});
		$contactsClose.on('click', function() {
			$contacts.slideToggle(400)
		});

		/*Content*/
		let $contentItem = $('.content__item')
			$contentMore = $('.content__more')


		$contentItem.hover(function() {
			if($(window).width() < 992)
			{
				$(this).find($contentMore).slideToggle()
			}
			else
			{

				if($(this).hasClass('big') == false)
				{
						 $contentMore.hide();
				 
				 }
				 $contentItem.removeClass('big');
				$contentItem.addClass('small');

					 $(this).removeClass('small');
					$(this).addClass('big');
					
					 
						
					
					setTimeout(function() { 
							$('.big').find($contentMore).slideDown();
					}, 400)

			  
			}

		 }

		 );

		/*Slider*/
		$('.slider-products').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		prevArrow: $('.arrow-slider__prev--products'),
		nextArrow: $('.arrow-slider__next--products'),
		responsive: [
	{
		breakpoint: 1281,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2500,
			dots: true,
			prevArrow: $('.arrow-slider__prev--products-m'),
			nextArrow: $('.arrow-slider__next--products-m')
		}
	}
  ]
		});

		$('.slider-expert').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		prevArrow: $('.arrow-slider__prev--expert'),
		nextArrow: $('.arrow-slider__next--expert'),
		responsive: [
	{
		breakpoint: 1280,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2500,
			dots: true,
			prevArrow: $('.arrow-slider__prev--expert-m'),
			nextArrow: $('.arrow-slider__next--expert-m')
		}
	}
  ]
		});

		$('.slider-program').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		prevArrow: $('.arrow-slider__prev--program'),
		nextArrow: $('.arrow-slider__next--program'),
		responsive: [
	{
		breakpoint: 1281,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2500,
			dots: true,
			prevArrow: $('.arrow-slider__prev--program-m'),
			nextArrow: $('.arrow-slider__next--program-m')
		}
	}
  ]
		});

		/*Popup*/
		let $popupProducts = $('#popup-products')
			$popupExpert = $('#popup-expert')
			$popupProgram = $('#popup-program')
			$popup = $('.popup__wrapper')
			$showExpert = $('#show-expert')
			$showProgram = $('#show-program')
			$showProducts = $('#show-products')
			$closePopup = $('.popup__close');

			$showProducts.on('click', function(event) {
				event.preventDefault();
				$popupProducts.addClass('show')
			});

			$showExpert.on('click', function(event) {
				event.preventDefault();
				$popupExpert.addClass('show')
			});

			$showProgram.on('click', function(event) {
				event.preventDefault();
				$popupProgram.addClass('show')
			});
			$closePopup.on('click', function() {
				$popup.removeClass('show')
			});


});


$(window).load(function() {
	$(".after_load").each(function () {
	    var $back = $(this).attr("data-src");
	
	        $(this).prop('style','background-image: url('+$back+');');
	
	});
});
