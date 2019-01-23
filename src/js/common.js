jQuery(document).ready(function($) {
	 new WOW().init();
	
	 var logoSlider = function() {
		$('.gallery').slick({
			infinite: true,
			arrows: false,
			responsive: [
		                    {
		                      breakpoint: 1200,
		                      settings: {
		                        dots: true
		                      }
		                    }
		                  ]
		});
		$('.gallery__btn-prev').on('click', function(){
			$('.gallery').slick('slickPrev');
		});

		$('.gallery__btn-next').on('click', function(){
		  $('.gallery').slick('slickNext');
		});
	}
	var logoUnSlider = function() {
		$('.gallery').slick('unslick');
		
	}
	logoSlider();
	

	var trigerPopap = $('[data-popap-triger]');
	var close = $('.btn-close');
	trigerPopap.click(function() {
	  var popapName = $(this).data('popap-triger');
	  	$('[data-popap="'+popapName+'"]').addClass('open')	
	  });

	close.click(function(event) {
		$(this).parents('.popap').removeClass('open');
	  	 event.stopPropagation();
	});

	var trigerPopapMap = $('[data-popap-triger]');
	var closeMap = $('.btn-close-map');
	trigerPopapMap.click(function() {
	  var popapNameMap = $(this).data('popap-triger');
	  	$('[data-popap="'+popapNameMap+'"]').addClass('open')
	  });

	closeMap.click(function(event) {
		$(this).parents('.popap-map').removeClass('open');
	  	 event.stopPropagation();
	});

	$('.js-button-in-big').click(function() {
		$('.form-user__user-in').toggleClass('open');
		return false;
	});

	$("#map").on("click",".map__info-marker a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
	});
	if($(window).width() < 1200)
    {
        $(".block__info").removeClass('wow fadeInLeft');
        $(".block__info").removeClass('wow fadeInRight');
        $(".block__img").removeClass('wow fadeInRight');
        $(".block__img").removeClass('wow fadeInLeft');
        $(".info__title").removeClass('wow fadeInLeft');
        $(".info__title").removeClass('wow fadeInRight'); 
    }
});

