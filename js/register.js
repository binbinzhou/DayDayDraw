//added by sunqixiong
$(function() {

    $('.js-register-email').on('blur keyup', registerEmail);

    function registerEmail() {
        var val = $(this).val(),
            warn = $(this).next();
        if (!isemail(val)) {
            warn.html('请输入正确邮箱');
        } else {
            warn.html('');
            return true;
        }
    }
    $('.js-register-password').on('blur keyup', registerPassword);

    function registerPassword() {
        var val = $(this).val(),
            warn = $(this).next(),
            aa = new RegExp("(?![a-z]+$|[0-9]+$)^[a-zA-Z0-9]{7,}$");
        if (aa.test($(this).val())) {
            warn.html('');
            return true;
        } else {
            warn.html("密码必须大于6位有字母和数字组成！");
        }
    }
    $('.js-register-user').on('blur keyup', registerUser);

    function registerUser() {
        var val = $(this).val(),
            warn = $(this).next(),
            p = vailNickName({ val: $(this).val(), minLen: 3, maxLen: 10 });
        if (p.result) {
            warn.html('');
            return true;
        } else {
            warn.html(p.message);
        }
    }
    $('.js-register-phone').on('blur keyup', registerPhone);

    function registerPhone() {
        var val = $(this).val(),
            warn = $(this).next(),
            p = vailPhone($(this).val());
        if (p.result) {
            warn.html('');
            return true;
        } else {
            warn.html(p.message);
        }
    }
    $('.js-register-code').on('blur keyup', registerCode);

    function registerCode() {
        var val = $(this).val(),
            warn = $(this).siblings('.js-warning');

        if (val) {
            warn.html('');
            return true;
        } else {
            warn.html('验证码不能为空');
        }
    }
    $('.js-register').click(function() {
        var email = registerEmail.call($('.js-register-email'));

        var password = registerPassword.call($('.js-register-password'));

        var user = registerUser.call($('.js-register-user'));

        var phone = registerPhone.call($('.js-register-phone'));

        var code = registerCode.call($('.js-register-code'));

        if (email && password && user && phone && code) {
            //如果验证全部通过，可以干接下来的事啦
            alert('验证通过')
        } else {
            alert('某项失败')
        }
    });

    //倒计时
    $('.js-z-verification').click(function() {
        var _this = $(this);
        var wait = 60;
        var time;
        _this.removeClass('btn-orange').addClass('btn-default');
        _this.text(wait + 's后重新获取');
        _this.attr('disabled', 'disabled');
        clearInterval(time);

        time = setInterval(function() {
            if (wait <= 0) {
                _this.addClass('btn-orange').removeClass('btn-default');
                _this.text('获取验证码');
                _this.removeAttr('disabled');
                clearInterval(time)
            } else {
                wait--;
                _this.text(wait + 's后重新获取');
            }
        }, 1000)
    })
})
