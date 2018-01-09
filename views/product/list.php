<!--主要界面-->
<div id="main-content">
    <div class="product-banner"></div>
	
	<?php foreach($list as $k=>$v): ?>
	
    <div class="product-box ">
        <h3 class="text-capitalize "><?= $v['ctext'] ?></h3>

        <!--根据内容添加盒子-->
        <div class="box-content container">
		
			<?php foreach($v['rows'] as $i=>$m): ?>
		
            <div class="list-product col-md-3">
                <a href="?r=product/detail&id=<?= $m['id'] ?>" target="_blank">
                    <img src="products/<?= $m['id'] ?>/1.jpg" alt="" title="">
                </a>
                <p><?= $m['title'] ?><br><?= $m['price'] ?></p>
            </div>

			<?php endforeach; ?>
        </div>
		
		<?php if($v['total'] > 4): ?>
        <h4 class="text-uppercase">show more</h4>
        <span class="show-more"><i class="fa fa-angle-double-down"></i></span>
		<input type="hidden" value="<?= $v['cid'] ?>">
		<?php endif; ?>
		
    </div>
	
	<?php endforeach; ?>
	
</div>
<?php 

$this->registerCssFile('@web/style/product/product.css',  ['depends' => ['app\assets\AppAsset']]);
$this->registerJsFile('@web/js/product/product.js',  ['depends' => ['app\assets\AppAsset']]);

?>
