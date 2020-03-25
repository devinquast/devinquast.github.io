(function( $ ) {
    "use strict";

    $(window).load(function() {

	    //These functions are affected by fonts loading

	});

	$( document ).ready(function() {

		//Need to make sure this isn't applying to background videos
		$(".hentry .entry-content").fitVids();

        // var isMobile = {
		//     Windows: function() {
		//         return /IEMobile/i.test(navigator.userAgent);
		//     },
		//     Android: function() {
		//         return /Android/i.test(navigator.userAgent);
		//     },
		//     BlackBerry: function() {
		//         return /BlackBerry/i.test(navigator.userAgent);
		//     },
		//     iOS: function() {
		//         return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		//     },
		//     any: function() {
		//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
		//     }
		// };

		function resizePageElements() {

			var windowHeight = $( window ).height();
			var windowWidth = $('body').innerWidth();

		}

        $(window).resize(function() {
			resizePageElements();
		});

		resizePageElements();

        $("#flygirl-sidebar-nav a").attr('tabindex',"-1");
		
		$( "#navbar-toggler" ).click(function() {
			if ($("#flygirl-sidebar-nav").hasClass('show')) {
				$("#flygirl-sidebar-nav").removeClass("show");
				$("#flygirl-top-nav").removeClass("open");
				$("#flygirl-sidebar-nav a").attr('tabindex',"-1");
			} else {
				$("#flygirl-sidebar-nav").addClass("show");
				$("#flygirl-top-nav").addClass("open");
				$("#flygirl-sidebar-nav a").attr('tabindex',"0");
			}
        });
        
        function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();
			
			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
			
			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}
		
		function isScrolledIntoView(el) {
		    var rect = el.getBoundingClientRect();
		    var elemTop = rect.top;
		    var elemBottom = rect.bottom;
		
		    // Only completely visible elements return true:
		    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
		    // Partially visible elements return true:
		    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		    return isVisible;
		}
		
		function animatedElements() {
			$('.animated').each(function() {
				if (isScrolledIntoView(this) === true) {
					var animatedclass = $(this).data('animatedclass');
					$(this).addClass(animatedclass);
				}
			});
		}
		
		animatedElements();
		
		// If element is scrolled into view, fade it in
		$(window).scroll(function() {
			animatedElements();
		});

	});

}(jQuery));
