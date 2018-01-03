/**
 * Created by Administrator on 2017/12/22.
 */
$(function(){
    console.log(document.cookie)
    //--form提交--
//选择了新文件
    $('#fileUp').change(function(){
        //如果文件为空
        if($(this).val() == ''){
            return;
        }
        $('#profile-form').ajaxSubmit({
            type:'post',
            dataType:'json',
            success:function(result){
                //请求成功后的操作

                //并且清空原文件，不然选择相同文件不能再次传
                $('#fileUp').val('');
            },
            error:function(){
                //并且清空原文件，不然选择相同文件不能再次传
                $('#fileUp').val('');
            }
        });
    })

    //-------cookie----------------
    //设置cookie
    function setCookie(name, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = name + '=' + value + ';expires=' + date;
    };

    //删除cookie
    function delCookie(name) {
        setCookie(name, null, -1);
    };
    //---log out----
    $('.log-out').on('click',function(){
        delCookie('pswd');
        history.back();
    })
});
