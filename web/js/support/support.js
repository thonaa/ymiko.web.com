/**
 * Created by Administrator on 2017/12/12.
 */
$(function () {


    var visibleNavList = $('#main-content .text-content').find('.visible-nav-list');
    var spanBtn = visibleNavList.find('span');

    var flag = true;
    spanBtn.on('click', function () {
        visibleNavList.find("p").toggle('slow')
        if (flag) {
            $(this).removeClass().addClass("glyphicon glyphicon-chevron-up");
            flag = false;
        } else {
            $(this).removeClass().addClass("glyphicon glyphicon-chevron-down");
            flag = true;
        }

    })

    ////ajax获取文字信息
    //var getText = function (url, reqObj) {
    //    $.ajax({
    //        url: url,
    //        type: 'GET', //POST
    //        async: true,    //或false,是否异步
    //        data: reqObj,
    //        //timeout:5000,    //超时时间
    //        dataType: 'html',    //返回的数据格式：json/xml/html/script/jsonp/text
    //        beforeSend: function (xhr) {
    //
    //        },
    //        success: function (data) {
    //            $('.text').html(data)
    //
    //        },
    //        error: function (xhr, textStatus) {
    //            console.log('error');
    //            console.log(xhr);
    //            console.log(textStatus)
    //        },
    //        complete: function () {
    //        }
    //    })
    //
    //};


    //-------内容切换--------
    var textContent = {
        0: '<h4>Warranty</h4><p>1 year warranty for quality-related issues.</p><p>If you have any other quests, please contact <strong>service@51ymiko.com</strong>.</p>',
        1: '<h4>Privacy Policy</h4><p class="underline">What information do we collect?</p> <p>We collect information from you when you register on our site, place an order or subscribe to our newsletter.<br/>When registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address or phone number. You may, however, visit our site anonymously.</p> <p class="underline">What do we use your information for?</p> <p>Any of the information we collect from you may be used in one of the following ways:<br/>To process transactions<br/>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.<br/>To send periodic emails<br/>The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</p> <p class="underline">Do we disclose any information to outside parties?</p> <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p> <p class="underline">Third Party Links</p> <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.<br/>Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p> <p class="underline">Online Privacy Policy Only</p> <p>This online Privacy Policy applies only to information collected through our website and not to any information collected offline.</p> <p class="underline">Terms of Use</p> <p>Please also read our Terms of Use, which explains proper use of our website.</p> <p class="underline">Your Consent</p> <p>By using our site, you consent to our website Privacy Policy.</p>',
        2: '<h4>Terms Of Use</h4>' +
        '<p>These Terms of Use govern your use of this website. By using this website, you accept these Terms of Use in full. If you disagree with these Terms of Use or any part of these Terms of Use, you must not usethis website.</p>' +
        '<p class="underline">Information on the Website</p>' +
        '<p>No information shall be construed as advice and information is offered for information purposes only andis not intended for trading purposes. You and your company rely on the information contained on thiswebsite at your own risk. If you find an error or omission at this site, please let us know.</p>' +
        '<p class="underline">Specific Use</p>' +
        '<p>You further agree not to use the website to send or post any message or material that is unlawful,harassing, defamatory, abusive, indecent, threatening, harmful, vulgar, obscene, sexually orientated,racially offensive, profane, pornographic or violates any applicable law and you hereby indemnify theWebsite Owner against any loss, liability, damage or expense of whatever nature which the Website Owneror any third party may suffer which is caused by or attributable to, whether directly or indirectly,your use of the website to send or post any such message or material.</p>' +
        '<p class="underline">Warranties</p>' +
        '<p>The Website Owner makes no warranties, representations, statements or guarantees (whether express,implied in law or residual) regarding the website, the information contained on the website, your oryour company\' s personal information or material and information transmitted over our system.</p> <p class="underline">Disclaimer of Liability</p>' +
        '<p>The Website Owner shall not be responsible for and disclaims all liability for any loss, liability,damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoeverwhich may be suffered by you or any third party (including your company), as a result of or which may beattributable, directly or indirectly, to your access and use of the website, any information containedon the website, your or your company\'s personal information or material and information transmitted overour system. In particular, neither the Website Owner nor any third party or data or content providershall be liable in any way to you or to any other person, firm or corporation whatsoever for any loss, liability, damage (whether direct or consequential), personal injury or expense of any nature whatsoeverarising from any delays, inaccuracies, errors in, or omission of any share price information or thetransmission thereof, or for any actions taken in reliance thereon or occasioned thereby or by reason ofnon-performance or interruption, or termination thereof.</p> <p class="underline">Use of the Website</p>' +
        '<p>The Website Owner does not make any warranty or representation that information on the website isappropriate for use in any jurisdiction. By accessing the website, you warrant and represent to theOwner that you are legally entitled to do so and to make use of information made available viathe website.</p>'
    };
	
	var hashKey = {
		
		'#w' : 0,
		'#p' : 1,
		'#t' : 2
		
	};
	
    //初始化文件内容
    function textStart() {

        var index=0;
		
		var item = location.hash;
		if(item in hashKey) {
			index = hashKey[item];
			
		}
	
        $('#main-content .text').html(textContent[index]);

    }
    textStart();

    //getText();
    //-----text内容分段------
/*     function textBreak(ele, para) {

        var str = $(ele).html();
        if (str.indexOf(para) == -1) {
            return;
        } else {
            var strs = str.split(para); //字符分割
            var text = "";
            for (var i = 0; i < strs.length - 1; i++) {
                text = text + (strs[i] + para + "<br/>");
            }

            $(ele).html(text);

        }
    } */

    //
    //textBreak('#main-content .text',"：");
    //textBreak('#main-content .text',"。");
	
	


    //点击切换内容
    function textChange(para) {
        var listBtn = $(para).find('a');
        listBtn.each(function (index, ele) {
            $(this).on('click', function () {

                //getText(url,{index:index});
                $('#main-content .text').html(textContent[index]);


                //textBreak("：");
                //textBreak("。");

            })
        })
    }

    textChange('.tab-lists');
    textChange('.visible-nav-list');

    //--设置text最小高度---
    function textHeight() {
        var textHeight = $('#main-content .text').get(0).offsetHeight;

        if (textHeight <= 350) {
            $('#main-content .text').css('height', "400px");


        }
    }

    textHeight();

});