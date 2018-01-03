<!--主要界面-->
<div id="main-content">
    <div class="main">
        <div class="container-fluid">
            <div class="content-half-left col-md-5">
                <div class="deal-images-show">
                    <img src="" alt="" data-code="imgmain1">
                </div>
                <div class="deal-images-lists">
                    <div class="inner">
                        <ul>
							<?php foreach($files as $k=>$v): ?>
                            <li>
                                <img src="<?= $v ?>">
                            </li>
							<?php endforeach; ?>
                        </ul>

                    </div>
					
                    <div class="pre-btn move-btn"><span class="glyphicon glyphicon-menu-left"></span></div>
                    <div class="nxt-btn move-btn"><span class="glyphicon glyphicon-menu-right"></span></div>
                </div>
            </div>
			
            <div class="content-half-right col-md-6 col-md-offset-1">
                <h4><?= $info['title'] ?></h4>
                <p><?= $info['keywords'] ?></p>
                <!--<span class="living">lIVING</span>-->
                <div class="deal-price"><span class="old"><?= $info['old_price'] ?></span><span class="now"><?= $info['price'] ?></span></div>

                <div class="deal-count">
                    <span class="reduce">-</span>
                    <input type="text" value="1">
                    <span class="add">+</span>
                </div>
                <!--<button id="add-to-cart" class="btn btn-warning">ADD TO CART</button>-->
                <a href="<?= $info['amazon_url'] ?>" target="_blank"><button class="btn btn-default">BUY AT AMAZON</button></a>
                <div class="pay-by-other">
                    <a href="javascript:;"><i class="fa fa-amazon"></i></a>
                    <a href="javascript:;"><i class="fa fa-paypal"></i></a>
                    <a href="javascript:;"><i class="fa fa-google-plus"></i></a>
                    <a href="javascript:;"><i class="fa fa-facebook-f"></i></a>

                </div>
            </div>


        </div>

        <div class="recommend">
            <div class="cart-text"><?= $info['descript'] ?></div>

            <h3>YOU MAY ALSO LIKE</h3>

            <div class="row">
				<?php foreach($list as $k=>$v): ?>
                <div class="col-md-4">
                    <a href="?r=product/detail&id=<?= $v['id'] ?>" target="_blank">
                        <img src="products/<?= $v['id'] ?>/1.jpg">
                        <h4><?= $v['title'] ?></h4>
                        <p><?= $v['price'] ?></p>
                    </a>

                </div>
				<?php endforeach; ?>
			</div>
	
        </div>

    </div>

</div>	
<?php 	
	
$this->registerCssFile('@web/style/deals/deals.css', ['depends' => ['app\assets\AppAsset']]); 	
$this->registerJsFile('@web/js/deals/deals.js', ['depends' => ['app\assets\AppAsset']]); 

?>
