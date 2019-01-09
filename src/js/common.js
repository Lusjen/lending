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
	$('.btn__text').on('click', function() {
		// $(function hpInitDeveloper() {
			logoSlider(),
		 // }),
		$('.popap').addClass('open');
		
	});

	$('.btn-close').on('click', function() {

		$('.popap').removeClass('open'),
		logoUnSlider();
	})
	/* Initialize
		 * ------------------------------------------------------ */
		 // $(function hpInitDeveloper() {
			// 	logoSlider();
		 // });

})(jQuery);

