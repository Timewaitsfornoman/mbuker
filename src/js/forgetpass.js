var ajax = require('../../unit/common/js/getApi');
var ajax = require('../../unit/common/js/common');

var lock = false;
var $J_back = $('#J_back');
var $J_link = $('.J_link');
var $J_form = $('.J_form');
var $J_username = $('#J_username');
var $J_password = $('#J_password');
var $J_phone = $('#J_phone');
var $J_email = $('#J_email');
var $J_inputcode = $('#J_inputcode');
var $J_freshcode = $('#J_freshcode');
var $J_email = $('#J_email');
var $J_showpass = $('#J_showpass');
var $J_sendcode = $('#J_sendcode');
var $J_navbar = $('#J_navbar');

var index = {

    init: function() {
        this.addEvent();
    },

    sendApi: {

        reset: function(data) {
            $J_login.val('登录中...');
            ajax.callAPI({
                type: 'post',
                url: '/api/user/login',
                data: data,
                dataType: 'json',
                success: function(rsp) {

                    if (rsp.success === true) {
                        setTimeout(function() {
                            window.location.href = '/main';
                        }, 1000);
                    } else {
                        $J_login.val('登录');
                    }
                    lock = false;
                },
                error: function(error) {
                    lock = false;
                    $J_login.val('登录');
                }
            });
        }
    },

    reset: function() {

        var username = $('#J_username').val();
        var password = $('#J_password').val();

        if (username.length === 0 || password.length === 0) {
            // alert('请填写用户名或密码');
        }

        var data = {
            'grant_type': 'password',
            'username': username,
            'password': password
        }

        if (!lock) {
            lock = true;
            this.sendApi.login(data);
        }
    },
    addEvent: function() {

        var $this = this;
        $J_navbar.on('click', 'li', function(event) {

            if (event.target.className.indexOf('J_link') > -1) {
                var index = $(this).index();
                $J_link.removeClass('active');
                $(this).find('.J_link').addClass('active');
                $J_form.addClass('hide');
                $J_form.eq(index).removeClass('hide');
            }

            event.preventDefault();
            return false
        })
    }
};

index.init();