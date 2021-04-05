let $contentItem = $('.content__item')
			$contentMore = $('.content__more')
			
function close_slide()
{
	if($( ".content"  ).hasClass('active') == true)
		{

		 $contentItem.removeClass('small');
		 $contentItem.removeClass('big');
		 $contentMore.slideUp();
		 $('.content').removeClass( 'active' );
		}
}


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
		

		$( ".content" ).hover(
		  function() {
		    $( this ).addClass( 'active' );
		  }, function() {
		  
		  	if($('.popup__wrapper').hasClass('show') == true)
		  	{
		  		return false;
		  	}

			setTimeout(function() { 
					
				 close_slide();
			}, 100);
			 

		  }
		);

	


		$contentItem.hover(function() {
			if($(window).width() < 992)
			{
				$(this).find($contentMore).slideToggle();
			
			}
			else
			{
	 



				if($(this).hasClass('big') == false)
				{
						 $contentMore.hide();
						 	$('.content__text').removeClass('showtext');
				 
				 }
				 $contentItem.removeClass('big');
				$contentItem.addClass('small');

					 $(this).removeClass('small');
					$(this).addClass('big');
					
					 
						
					
					setTimeout(function() { 

							$('.big').find($contentMore).slideDown(800);
					}, 400);

						setTimeout(function() { 

						$('.content__text').addClass('showtext');
					}, 600);
					
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

		/*Slider-footer*/
		$('.slider-footer').slick({
		infinite: true,
		slidesToShow: 11,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: false,
		arrows: false,
		responsive: [
	{
		breakpoint: 1281,
			settings: {
			slidesToShow: 10,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			dots: false,
			arrows: false,
		}
	},
	{
		breakpoint: 1025,
			settings: {
			slidesToShow: 8,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			dots: false,
			arrows: false,
		}
	},
	{
		breakpoint: 769,
			settings: {
			slidesToShow: 7,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			dots: false,
			arrows: false,
		}
	},
	{
		breakpoint: 546,
			settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			dots: false,
			arrows: false,
		}
	},
	{
		breakpoint: 376,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			dots: false,
			arrows: false,
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
				$('body').addClass('active');
				$(this).addClass('active');
				$(this).addClass('hide-content');
				$popupProducts.addClass('show')
			});

			$showExpert.on('click', function(event) {
				event.preventDefault();
				$('body').addClass('active');
				$(this).addClass('active')
				$(this).addClass('hide-content')
				$popupExpert.addClass('show')
			});

			$showProgram.on('click', function(event) {
				event.preventDefault();
				$('body').addClass('active');
				$(this).addClass('active')
				$(this).addClass('hide-content')
				$popupProgram.addClass('show')
			});
			$closePopup.on('click', function() {
				close_slide();
				$popup.removeClass('show')
				$(".btn--more").removeClass('active')
				$('body').removeClass('active');
				setTimeout(function() { 
						$('.btn--more').removeClass('hide-content');
					}, 400)
			});


});


$(window).load(function() {
	$(".after_load").each(function () {
	    var $back = $(this).attr("data-src");
	
	        $(this).prop('style','background-image: url('+$back+');');
	
	});
});
