$(document).ready(function () {
    var firstSection = $('#section1');
    var stickyHeader = $('#sticky-header');


    $(window).scroll(function () {
        if ($(this).scrollTop() >= firstSection.height() - 20) {
            // Animation for sticky header intro 
            stickyHeader.slideDown('2').removeClass('hidden');
        } else {
            stickyHeader.addClass('hidden');
        }
    });

    // SMOOTH SCROLLING SECTIONS
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
