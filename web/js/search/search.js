/**
 * Created by Administrator on 2017/12/12.
 */
$(function () {
//页面加载
    $.ajax({
        type: "get",
        url: "../order/orderCancel.action", //orderModifyStatus
        data: {"orderId": orderId, "commant": commant},
        dataType: "json",
        async: false,
        cache: false,
        success: function (data) {



        },
        error: function (json) {

        }
    });


});