$(function() {
    $('.nav a').click(function() {
        $('.nav a').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $(this).next().slideDown();
            $(this).parent().siblings().children('.second-nav').slideUp();
        }
    });

})
