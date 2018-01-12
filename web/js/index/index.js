/**
 * Created by Administrator on 2017/12/13.
 */
$(function () {


    $('#myCarousel').carousel({
        interval: 4500,
        pause: 'none'
    });
    carouselControl();
    window.onresize = function () {
        carouselControl();
    };
    function carouselControl() {
        var carouselControl = $('.carousel-control');

        carouselControl.find("span").css({top: (carouselControl.get(0).offsetHeight) / 2 - 30 + 'px'});
    }


    //------获取详情页-----
    var showMeTheImg = $('.main-content-3').find("a");
    var href = showMeTheImg.attr("href");

    //var dataImgCode = showMeTheImg.find('img').attr("data-img-code");
    //href = href + "?name=" + dataImgCode;
    //showMeTheImg.attr("href",href);


    //-------------


    ////ajax
    //function orderCancel(orderId, commant) {
    //    var flag = false;
    //    $.ajax({
    //        type: "POST",
    //        url: "../order/orderCancel.action", //orderModifyStatus
    //        data: {"orderId": orderId, "commant": commant},
    //        dataType: "json",
    //        async: false,
    //        cache: false,
    //        success: function (data) {
    //            var member = eval("(" + data + ")"); //包数据解析为json 格式
    //            if (member.success == "true") {
    //                flag = true;
    //            } else if (member.success == "false") {
    //                alert(member.info);
    //            }
    //        },
    //        error: function (json) {
    //            alert("订单取消异常，请刷新后重试...");
    //        }
    //    });
    //    hidediv();
    //    return flag;
    //}

    //console.log("last:" + cookie);

    //---图片切换--
    var img1=showMeTheImg.find('.images');
    var img2=showMeTheImg.find('.images-hover');
    function imgChange(ele,ele1,ele2){
        $(ele).find(ele1).stop();
        $(ele).find(ele2).stop();
        $(ele).find(ele1).css('display','none');
        $(ele).find(ele1).animate({"opacity":0},500);
        $(ele).find(ele2).css('display','block');
        $(ele).find(ele2).animate({"opacity":1},500);

    }
    showMeTheImg.on('mouseenter',function(){
        imgChange(this,img1,img2)
    });
    showMeTheImg.on('mouseleave',function(){
        imgChange(this,img2,img1)
    });
});