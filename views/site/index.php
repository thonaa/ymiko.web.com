<!--banner start-->
<div id="banner">
    <div id="myCarousel" class="carousel slide">

        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
            <div class="item active">
                <a href="?r=product/detail&id=9" >
                    <img src="images/banner1.jpg" alt="First slide" class="image-index-slider">
                </a>
            </div>
            <div class="item">
                <a href="?r=product/detail&id=10">
                    <img src="images/banner2.jpg" alt="Third slide" class="image-index-slider">
                </a>
            </div>
            <div class="item">
                <a href="?r=product/detail&id=7">
                    <img src="images/banner3.jpg" alt="fouth slide" class="image-index-slider">
                </a>
            </div>
            <div class="item">
                <a href="?r=product/detail&id=4">
                    <img src="images/banner4.jpg" alt="fifth slide" class="image-index-slider">
                </a>
            </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="carousel-control left" href="#myCarousel"
           data-slide="prev"><span class="glyphicon glyphicon-menu-left"></span></a>
        <a class="carousel-control right" href="#myCarousel"
           data-slide="next"><span class="glyphicon glyphicon-menu-right"></span>
        </a>
    </div>
</div>
<!--banner end-->

<div id="main">
    <div class="main-content-1 content clearfix">
		<div class="col-md-4">
			<a href="?r=product/list">
				<img src="images/NewRelease.jpg" style="width: 100%;height: 100%;">
			</a>
        </div>
        <div class="col-md-4">
			<a href="?r=site/join">
				<img src="images/Join.jpg" style="width: 100%;height: 100%;">
			</a>
        </div>
        <div class="col-md-4">
			<a href="?r=site/giveaway">
				<img src="images/Giveaway.jpg" style="width: 100%;height: 100%;">
			</a>
        </div>
    </div>
	
    <div class="main-content-2">
        <h4 class="text-uppercase">best selling products</h4>
    </div>
	
    <div class="main-content-3 content container-fluid">
	
		<?php foreach($rows as $key=>$row): ?>
        <div class="row">
		
			<?php foreach($row as $k=>$v): ?>
            <div class="col-md-4 col-sm-6">
                <a href="?r=product/detail&id=<?= $v['id'] ?>" target="_blank" class="a-block center-block">
                    <img class="images" src="products/<?= $v['id'] ?>/1.jpg" alt="<?= $v['title'] ?>">
                    <img class="images-hover" src="products/<?= $v['id'] ?>/2.jpg" alt="<?= $v['title'] ?>">
                    <h5 class="text-uppercase"><?= $v['title'] ?></h5>
                    <span>——<?= $v['price'] ?></span>
                    <p><?= $v['keywords'] ?></p>
                </a>
            </div>
			<?php endforeach; ?>

        </div>
		<?php endforeach; ?>

    </div>
	
</div>
<?php
$this->registerCssFile('@web/style/index/style.css', ['depends' => ['app\assets\AppAsset']]);
$this->registerJsFile('@web/js/index/index.js', ['depends' => ['app\assets\AppAsset']]);

?>	