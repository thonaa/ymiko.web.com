<!---大屏幕拓展界面--->
<div class="visible-md visible-lg container product-lists-nav product-none">
	<?php foreach($list as $k=>$v): ?>
	<div class="list">
		<a href="?r=product/detail&id=<?= $v['id'] ?>" target="_blank">
			<img src="products/<?= $v['id'] ?>/1.jpg" alt="<?= $v['title'] ?>" title="<?= $v['title'] ?>">
			<p><?= $v['title'] ?></p>
		</a>
	</div>
	<?php endforeach; ?>
</div>
<!--大屏幕弹框结束-->