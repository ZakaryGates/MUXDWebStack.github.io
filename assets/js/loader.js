jQuery(function ($) {
    'use strict';
    $(window).load(function(){
    	$(".preloader").delay(2000).fadeOut('slow', function () {    		
            $(".preloader").remove();            
    	});
    });
});