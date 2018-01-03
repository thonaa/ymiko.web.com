/**
 * Created by Administrator on 2017/12/20.
 */
$(function () {
    //获取showMeImgCode---
    var urlSearch=location.search.substr(1);

//------展示图js------------

    var mainContent = $('#main-content');
    var littleImg = mainContent.find('.deal-images-lists img');
    var bigImg = mainContent.find('.deal-images-show img');
    var modal = $('#modal');
    //---初始化宽度和定位-
    //--初始化大图显示第一个小图--
    var bigFristImg = littleImg.eq(0).attr('src');

    bigImg.attr('src', bigFristImg);
    //--modal---

    $('#add-to-cart').on('click', function () {
        modal.css('display', 'block');
    });
    modal.find('.box').on('click', function () {
        event.stopPropagation();
    });
    modal.on('click', function () {
        $(this).css('display', 'none');
    });


    imgResize();
    imgsMove();
    countChange();
    window.onresize = function () {
        imgResize();
    };
    function imgResize() {
        var innerBox = mainContent.find('.deal-images-lists .inner');
        var li = mainContent.find('.deal-images-lists .inner').find('li');
        var btn = mainContent.find('.deal-images-lists .move-btn');

        li.width((innerBox.get(0).offsetWidth) / 5 + "px");
        var top = li.height();

        btn.css('top', (top / 2 - 17) + 'px');
        mainContent.find('.deal-images-lists').css('height', top);

    };


    //--点击小图展示大图--


    littleImg.on('click', function () {
        var bigImgSrc = $(this).attr('src');
        bigImg.attr('src', bigImgSrc);
        littleImg.css('border-color', "transparent");
        $(this).css('border-color', "#f9b552")
    });

    //---展示小图筛选--
    function imgsMove() {
        var ulBox = mainContent.find('.deal-images-lists .inner ul');

        var preBtn = mainContent.find('.content-half-left .pre-btn');
        var nxtBtn = mainContent.find('.content-half-left .nxt-btn');
        var imgLength = littleImg.length;
        var moveWidth = mainContent.find('.deal-images-lists .inner').width();
        if (imgLength / 5 <= 1) {
            return;
        } else {
            btnUseful();
        }
        function btnUseful() {

            nxtBtn.on('click', function () {
                ulBox.animate({left: -moveWidth});
            });

            preBtn.on('click', function () {
                ulBox.animate({left: 0});

            })

        }
    };

    //--数量调控--
    function countChange() {
        var countValue = mainContent.find('.deal-count input');
        var countReduce = mainContent.find('.deal-count .reduce');
        var countAdd = mainContent.find('.deal-count .add');

        var clickAnimate = function (i) {
            i.animate({"font-size": "21px"}, 100, function () {
                i.animate({"font-size": "20px"}, 100);
            });
        };
        countReduce.on('click', function () {
            var count = countValue.val();
            if (count <= 1) {
                count = 1;
            } else {
                count--;
                clickAnimate($(this));
            }
            countValue.val(count);
        });
        countAdd.on('click', function () {
            var count = countValue.val();
            if (count >= 200) {
                count = 200;
            } else {
                count++;
                clickAnimate($(this));
            }
            countValue.val(count);


        });
        countValue.blur(function () {
            var count = countValue.val();
            if (count <= 1) {
                count = 1;
            } else if (count >= 200) {
                count = 200;
            }
            countValue.val(count);

        })
    }

//---商品描述文字处理--
    function textBreak() {

        var str = $('.recommend .cart-text').text();
        var strs = str.split("."); //字符分割
        var text="";
        for (var i = 0; i < strs.length-1; i++) {
            text=text+(strs[i] + ".<br/>");
        }
        $('.recommend .cart-text').html(text);
    }

    textBreak();


});