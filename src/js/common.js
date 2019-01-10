$(function() {
	 
	 var logoSlider = function() {
	// Custom JS
		$('.gallery').slick({
			infinite: true,
			arrows: false
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
	// $('.js-gallery').on('click', function() {
	// 	// $(function hpInitDeveloper() {
	// 		logoSlider(),
	// 	 // }),
	// 	$('.popap').addClass('open');
		
	// });

	// $('.btn-close').on('click', function() {

	// 	$('.popap').removeClass('open'),
	// 	logoUnSlider();
	// })
	/* Initialize
		 * ------------------------------------------------------ */
		 // $(function hpInitDeveloper() {
			// 	logoSlider();
		 // });


	var trigerPopap = $('[data-popap-triger]');
	var close = $('.btn-close');
	trigerPopap.click(function() {
	  var popapName = $(this).data('popap-triger');
	  // console.log(propName);
	  	$('[data-popap="'+popapName+'"]').addClass('open')
	  	//logoSlider();
	  	// console.log($('[data-popap="'+popapName+'"]'));	
	  });

	close.click(function(event) {
		// console.log($(this).parents('.popap'));
		$(this).parents('.popap').removeClass('open');
	  	 //$('.popap').removeClass('open'),
	  	 //logoUnSlider();
	  	 event.stopPropagation();
	});




	var trigerPopapMap = $('[data-popap-triger]');
	var closeMap = $('.btn-close-map');
	trigerPopapMap.click(function() {
	  var popapNameMap = $(this).data('popap-triger');
	  // console.log(propName);
	  	$('[data-popap="'+popapNameMap+'"]').addClass('open')
	  	//logoSlider();
	  	// console.log($('[data-popap="'+popapName+'"]'));	
	  });

	closeMap.click(function(event) {
		// console.log($(this).parents('.popap'));
		$(this).parents('.popap-map').removeClass('open');
	  	 //$('.popap').removeClass('open'),
	  	 //logoUnSlider();
	  	 event.stopPropagation();
	});

	$('.button-in-big').click(function() {
		$('.form-user__user-in').toggleClass('open');
	})

})(jQuery);

