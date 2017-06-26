$(function() {
    // 此处为调用
    if (window.PIE) {
        $('.echarts-container').each(function() {
            PIE.attach(this);
        });
        $('tooltip-txt').each(function() {
            PIE.attach(this);
        });
        $('.card-wrap li').each(function() {
            PIE.attach(this);
        });
        $('.form-input').each(function() {
            PIE.attach(this);
        });
        $('.form-textarea').each(function() {
            PIE.attach(this);
        });
        $('.dropdwon-header p').each(function() {
            PIE.attach(this);
        });
        $('.form-card').each(function() {
            PIE.attach(this);
        });
        $('.submit-card').each(function() {
            PIE.attach(this);
        });
        $('.nav > div.active a').each(function() {
            PIE.attach(this);
        });
    }
});
