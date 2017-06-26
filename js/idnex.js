$(function() {
    // 弹窗
    $('.js-z-pop-close').click(function() {
        $(this).parents('pop').hide();
        $('mask').hide();
    })
})
