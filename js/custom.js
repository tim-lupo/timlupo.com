(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

		
})(jQuery);

// on page load...
moveProgressBar();

// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
  console.log("moveProgressBar");
    var getProgressWrapWidth = $('.progress-wrap').width();
    var animationLength = 2500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar1').stop().animate({
        left: .95*getProgressWrapWidth
    }, animationLength);
    $('.progress-bar2').stop().animate({
        left: .80*getProgressWrapWidth
    }, animationLength);
    $('.progress-bar3').stop().animate({
        left: .85*getProgressWrapWidth
    }, animationLength);
    $('.progress-bar4').stop().animate({
        left: .58*getProgressWrapWidth
    }, animationLength);
    $('.progress-bar5').stop().animate({
        left: .70*getProgressWrapWidth
    }, animationLength);
}