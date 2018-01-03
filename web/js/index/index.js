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

});