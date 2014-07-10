/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });

        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });

    });

}(jQuery));

var index = {
    triggers: function() {
        // Show/Hide Aside Nav
        $('.logo-readium').click(function(e) {
            e.preventDefault();
            e.stopPropagation();

            $(this).hide();

            $('.wrapper').animate({
                'left': '250px'
            }, 'swing');

            $('aside').animate({
                'left': '0'
            });

            $('body, .wrapper').addClass('overflow-hidden');
        });

        $('.wrapper').click(function(e) {
            e.stopPropagation();

            if($('body').hasClass('overflow-hidden')) {
                $('.wrapper').animate({
                    'left': '0'
                }, 'swing');

                $('aside').animate({
                    'left': '-250px'
                });

                $('body, .wrapper').removeClass('overflow-hidden');

                $('.logo-readium').delay(500).fadeIn('fast');
            }
        })
    },

    init: function() {
        index.triggers();
        hljs.initHighlightingOnLoad();
    }
};
