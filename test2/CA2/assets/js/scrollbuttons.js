// jQuery
// When about-scroll button is clicked
$("#about-scroll").click(function() {
    // 700ms scroll to about-header
    $('html').animate({
        // get cords for top of #about-header
        scrollTop: $("#about-header").offset().top
    }, 700);
});

// Scroll to top button 
$(document).ready(function() {
    // hide scroll to top button on load
    $('#scroll-top').hide();
    $(window).scroll(function() {
        // if scroll, fade in, else, fade out
        if ($(this).scrollTop() > 20) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    
    $("#scroll-top").click(function() {
        // cords for top of page is 0, 900ms scroll to top of page
        $('html').animate({scrollTop: 0}, 900);
    });
});

// Initialize bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })