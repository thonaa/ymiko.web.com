/**
 * Created by Administrator on 2017/12/22.
 */
$(function(){
    //---统计总价---
    var mediaBody=$('#product-lists').find('.media .media-body');
    var listPrice=mediaBody.find('.list-price span');
    var subtotal=$('#product-lists').find('.total-wrapper .total-mes .subtotal');
    var subtotalNum=0;

    listPrice.each(function(){
        console.log(parseInt($(this).text()));
        subtotalNum=subtotalNum+parseFloat($(this).text());
    });
    subtotal.text("$"+subtotalNum);
});