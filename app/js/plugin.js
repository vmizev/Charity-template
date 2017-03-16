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

(function ($) {
	var toggle = $('.navbar-toggle');
	var header = $('.navbar-fixed-top');
	
	toggle.click(function(){
		header.toggleClass("on-click");
	})

})(jQuery);