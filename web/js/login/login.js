$(function () {
    console.log('11');
    var cookie = document.cookie;

    var formSubmit = function () {
        var oForm = document.getElementById('main-form');
        var oUser = document.getElementById('exampleInputEmail1');
        var oPswd = document.getElementById('exampleInputPassword1');
        var oRemember = document.getElementById('remember');
        //页面初始化时，如果帐号密码cookie存在则填充
        if (getCookie('user') && getCookie('pswd')) {
            oUser.value = getCookie('user');
            oPswd.value = getCookie('pswd');
            oRemember.checked = true;
        }
        //复选框勾选状态发生改变时，如果未勾选则清除cookie
        oRemember.onchange = function () {
            if (!this.checked) {
                delCookie('user');
                delCookie('pswd');
            }
        };
        //表单提交事件触发时，如果复选框是勾选状态则保存cookie
        oForm.onsubmit = function () {
            if (remember.checked) {
                setCookie('user', oUser.value, 7); //保存帐号到cookie，有效期7天
                setCookie('pswd', oPswd.value, 7); //保存密码到cookie，有效期7天
            }
            console.log(cookie)
        };
    };
    //-------cookie----------------
    //设置cookie
    function setCookie(name, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = name + '=' + value + ';expires=' + date;
    };
    //获取cookie
    function getCookie(name) {
        var reg = RegExp(name + '=([^;]+)');
        var arr = document.cookie.match(reg);
        if (arr) {
            return arr[1];
        } else {
            return '';
        }
    };
    //删除cookie
    function delCookie(name) {
        setCookie(name, null, -1);
    };

    formSubmit();

    //------register-----
    $('.register-wrapper').find('.sign-in').on('click',function(){
        $('.register-wrapper').css('display','none');
        $('.content-wrapper').css('display','block');

    });

    //---welcome界面---
    $('.content-wrapper').find('.create-account').on('click',function(){
        $('.content-wrapper').css('display','none');
        $('.register-wrapper').css('display','block');

    })


});


