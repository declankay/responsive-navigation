(function ($, root, undefined) {
	
	$(function () {
		
		// Ensure high standard of JS
		'use strict'; 
		
		/*------------------------------------*\
		    Mobile navigation menu 
		\*------------------------------------*/
		
		// When the mobile navicon is clicked
		$('.hamburger').on('click', function() {
		
			// Show or hide the mobile nvaigation and change the navicon
			$(this).toggleClass('is-active');
			$('.mobile-navigation').toggleClass('nav-open');
			$('html, body').toggleClass('no-scroll');
		
		});
			
	}); // End doc ready
	
})(jQuery, this); // End root function