$(function () {

    //--小屏幕footer的list操作

    $('#visible-list').on('click', function () {
        var visibleTopo = $('.visible-topo');
        visibleTopo.toggle();
    });

    var spanBtn = $('#footer .col-md-2').find('span');
    spanBtn.on('click', function () {
        $(this).parent().siblings().toggle();
    });


    //--大屏幕header的product操作

    var productListsNav = $('#fixed-header').find('.product-lists-nav');
    var productBtn = $('#fixed-header .site-nav .lists-nav').find('.list').eq(0);
    var time;
    productBtn.on('mouseenter', function () {
        clearTimeout(time);
        productListsNav.removeClass('product-none');


    });
    productBtn.on('mouseleave', function () {
        time = setTimeout(function () {
            productListsNav.addClass('product-none');
        }, 100);
    });
    productListsNav.on('mouseenter', function () {
        clearTimeout(time);
        productListsNav.removeClass('product-none');


    });
    productListsNav.on('mouseleave', function () {
        time = setTimeout(function () {
            productListsNav.addClass('product-none');
        }, 100);
    });

    //anchor
    $(window).scroll(function () {
        if ($(window).scrollTop() <= 150) {
            $('#anchor').hide();

        } else {
            $('#anchor').show();
        }

    });


//---判断是否用户已经登入---
    var getUser = function () {
        var userName = $('.glyphicon-user');
        //页面初始化时，如果帐号密码cookie存在则填充
        if (getCookie('user') && getCookie('pswd')) {

            userName.parent().attr('href', 'profile.html');

        }
    };
    getUser();


});
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


$().ready(function () {
    $("#footer-form").validate({
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                success: function () {
                    $('#footer-modal').css('display','block');
                    setTimeout(function(){
                        $('#footer-modal').css('display','none')
                    },2000)
                },
                error: function () {

                }

            });
        },

        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        }

    })
})
