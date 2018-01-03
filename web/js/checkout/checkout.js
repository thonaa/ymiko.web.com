/**
 * Created by Administrator on 2017/12/23.
 */
$(function(){
    //----选择states-----
    statesOption();
    function statesOption(){
        var states=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida",
            "Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
            "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
            "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
            "Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
            "Virginia","Washington","West Virginia","Wisconsin","Wyoming"
        ];

        for(var i=0;i<states.length;i++){
            var state="<option value="+states[i]+">"+states[i]+"</option>";
            $('#states').append(state);
        }
    }


    //---total price-----
    var main=$('#main');
    var listPrice=main.find(".media-body p span");
    var subtotal=main.find('.total-mes p').eq(0).find('span');
    var shipping=main.find('.total-mes p').eq(1).find('span');
    var taxes=main.find('.total-mes p').eq(2).find('span');
    var total=main.find(".total span");
    var num=0;

    listPrice.each(function(){
        num=num+parseFloat($(this).text());
    });

    subtotal.text("$"+num);
    total.text("$"+(num+parseFloat(shipping.text())+parseFloat(taxes.text())));

    console.log(parseInt("34552"))
});