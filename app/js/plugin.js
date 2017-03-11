;(function ($) {
	var header = $('.navbar-fixed-top');

	$(window).on('scroll', function () {
		if( $(window).scrollTop() > 20 ) {
			header.addClass('on-scroll');
		} else {
			header.removeClass('on-scroll');
		}
	});
	
})(jQuery);

