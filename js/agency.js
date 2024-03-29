// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $('a.navbar-brand').click(function() {
        if ($('.navbar-toggle').hasClass('collapsed')) {
            //do nothing
        } else {
            $('.navbar-toggle:visible').click();
        }
    })

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 150
        }
    })

    // Add class to intro cards
    $('.row .col-md-4').hover(function() {
        $(this).find('span').toggleClass('active');
    });

})(jQuery); // End of use strict
