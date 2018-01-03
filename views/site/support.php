<!--主要界面-->
<div id="main-content">

    <div class="banner-wrapper">
        <img src="images/banner4.jpg"
             alt="" title="">
    </div>

    <div class="text-content clearfix">

        <div class="tab-lists hidden-xs hidden-sm">
            <a href="javascript:;">
                <div class="list text-capitalize">warrant</div>
            </a>
            <a href="javascript:;">
                <div class="list text-capitalize">privacy policy</div>
            </a>
            <a href="javascript:;">
                <div class="list text-capitalize">terms of us</div>
            </a>
        </div>
        <div class="visible-nav-list visible-xs visible-sm ">
            <h4><a href="javascript:;">refund & exchange</a></h4>
            <p><a href="javascript:;">warrant</a></p>
            <p><a href="javascript:;">privacy policy</a></p>
            <p><a href="javascript:;">terms of us</a></p>
            <span class="glyphicon glyphicon-chevron-down"></span>

        </div>
        <div class="text container">
            <h4>Warranty</h4>
            <p>1 year warranty for quality-related issues.</p>
            <p>If you have any other quests, please contact <strong>service@51ymiko.com</strong>.</p>

            <!----->



        </div>
    </div>
</div>
<?php 
$this->registerCssFile('@web/style/support/support.css',  ['depends' => ['app\assets\AppAsset']]);
$this->registerJsFile('@web/js/support/support.js',  ['depends' => ['app\assets\AppAsset']]);
?>