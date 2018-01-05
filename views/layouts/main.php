<?php

use app\widgets\NewProducts;
use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title>Ymiko</title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>





<div id="fixed-header">
    <div class="fixed-header-inner">

        <!--小屏幕显示按钮
        <div class="visible-list visible-xs" id="visible-list">
            <span class="glyphicon glyphicon-list"></span>
        </div>


        小屏幕拓展界面

        <div class="visible-topo">
            <ul>
                <li><a href="?r=product/list">PRODUCT111</a></li>
                <li><a href="https://www.facebook.com/Ymiko-305130059893269/">MEDIA</a></li>
                <li><a href="?r=support/page">SUPPORT</a></li>
            </ul>
        </div>
		-->


        <div class="logo">
            <a href="/">
                <img src="images/logo.jpg" alt="Ymiko" title="Ymiko"/>
            </a>
        </div>
		
        <div class="site-nav">
		
            <div class="site-nav-item">
			
				<!--
                <div class="account list  visible-lg visible-md">
                    <a href="?r=site/login">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </a>
                </div>
				

                <div class="search list  visible-lg visible-md">
                    <a href="?r=site/search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="cart list">
                    <a href="javascript:void(0);">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                </div>
				-->
				
            </div>
			
            <ul class="lists-nav">
                <li class="list"><a href="?r=product/list">PRODUCT</a></li>
                <li class="list"><a href="https://www.facebook.com/Ymiko-305130059893269/">MEDIA</a></li>
                <li class="list"><a href="?r=site/support">SUPPORT</a></li>
            </ul>

        </div>
		
		<?= NewProducts::widget() ?>
		
    </div>

</div>
<div id="header" name="top"></div>
<a id="anchor" href="#top">
    <span class="glyphicon glyphicon-chevron-up"></span>
</a>

<?= $content ?>


<!--footer-->
<div id="footer">
    <div class="warpper container clearfix">
		<dl class="col-md-2">
            <dt class="text-capitalize">About<span class="glyphicon glyphicon-plus hidden-lg hidden-md"></span></dt>
            <dd><a href="?r=site/ourcompany">Our Company</a></dd>
            <dd><a href="?r=site/contactus">Contact Us</a></dd>
            <dd><a href="?r=site/join">Join Us</a></dd>
        </dl>
        <dl class="col-md-2 col-md-offset-2">
            <dt class="text-capitalize">Support<span class="glyphicon glyphicon-plus hidden-lg hidden-md"></span></dt>
            <dd><a href="?r=site/support#w">Warranty</a></dd>
            <dd><a href="?r=site/support#p">Privacy Policy</a></dd>
            <dd><a href="?r=site/support#t">Terms of Use</a></dd>
        </dl>
        <div class="col-md-4 col-md-offset-2">
            <dl class="subscribe text-capitalize">
                <dt>Subscribe</dt>
                <dd>get exclusive offers,news and more</dd>
            </dl>
            <div class="social-icon">
			
                <form id="footer-form">
                    <input type="email" id="email" name="email" class="e-mail" placeholder="Enter Your Email Address"/>
                    <input type="submit" class="e-mail" value="subscribe"/>
                </form>

            </div>
        </div>

    </div>


</div>
<!--footer-modal-->
<div id="footer-modal">
    <div class="wrap">
        <div>
            <h4 class="title">Subscription Confirmed</h4>
            <p>Your subscription to our list has been confirmed</p>
        </div>
    </div>


</div>

<!---->
<div class="footer-pro-list">
    <a href="javascript:;"><i class="fa fa-facebook" aria-hidden="true"></i></a>
    <a href="javascript:;"><i class="fa fa-twitter " aria-hidden="true"></i></a>
    <a href="javascript:;"><i class="fa fa-youtube-play " aria-hidden="true"></i></a>
    <a href="javascript:;"><i class="fa fa-instagram" aria-hidden="true"></i></a>
</div>
<div class="footer-nxt-list">Ymiko all right reserved</div>

<?php $this->endBody() ?>

<script type="text/javascript">
$(function(){
	$("#footer-form").validate({
		debug: true, 
		submitHandler: function(form) { 
			var email = $('#email').val();
			$.ajax({
			    type: 'post', 
				url: '?r=site/collect',
				data: {
					'email': email
				},
				success: function() {
					$('#email').val('');
				}
			});
				
		},
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: "Please enter your e-mail.",
				email: 'Mail format error.'
			}
		}
    });	
});
</script>

</body>
</html>
<?php $this->endPage() ?>
