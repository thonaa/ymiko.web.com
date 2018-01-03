/**
 * Created by Administrator on 2017/12/21.
 */
$(function () {
    var productLists = $('#product-lists');


    productLists.find('.list').each(function(index){
        countChange(index);
    });
    deleteCartList();
    cartNull();
    //--数量调控--
    function countChange(k) {
        var countValue = productLists.find('.list').eq(k).find('.deal-count').find('input');
        var countReduce = productLists.find('.list').eq(k).find('.deal-count').find('.reduce');
        var countAdd = productLists.find('.list').eq(k).find('.deal-count').find('.add');

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

    //---modal------

    function deleteCartList() {
        var modal = $('#modal');
        var deleteBtn = $('.delete-cart-btn');
        var productLists = $('#product-lists');
        var totalPrice=$('#main-content').find('.total-price span');
        var sequencing;
        totalPriceFn();
        function totalPriceFn(){
            var totalNum=0;

            productLists.find(".list .price").each(function(){
                totalNum=totalNum+parseFloat($(this).text());
            });
            totalPrice.text(totalNum);
        }
        deleteBtn.each(function (index) {
            $(this).attr('data-sequencing', index);
            $(this).on('click', function () {
                modal.css('display', 'block');
                sequencing = $(this).attr('data-sequencing');
            })
        });


        modal.find('.btn-default').on('click', function () {
            modal.css('display', 'none');
        });

        modal.find('.btn-danger').on('click', function () {
            $('.delete-cart-btn[data-sequencing=' + sequencing + ']').parents('.list').remove();


            modal.css('display', 'none');
            cartNull();
            totalPriceFn();
        });


    }
    //----delete cart--------


    //---页面为空----
    function cartNull(){
        var cartIsNull = $('#product-lists').find('.list').length;
        if(cartIsNull==0){
            $('.total-price').css('display','none');
            $('.cart-null').css('display','block');
        }

    }



});