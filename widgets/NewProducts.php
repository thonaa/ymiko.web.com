<?php

namespace app\widgets;

use yii\base\Widget;
use app\models\Product;

class NewProducts extends Widget
{
    public function init()
    {
        parent::init();
    }

    public function run()
    {
		$model = new Product();
		$list = $model->getProducts(5);
        return $this->render('NewProducts',['list'=>$list]);
    }
}