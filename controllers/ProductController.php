<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\web\Response;
use app\models\Product;

class ProductController extends Controller
{
	public $enableCsrfValidation = false;
	
    public function actionList()
    {
		$db = Yii::$app->db;
		$sql = 'select cid,count(*) as num from yk_product group by cid having num>2 limit 2';
		$rows = $db->createCommand($sql)->queryAll();
		$list = array();
		foreach($rows as $k=>$v) {
			$cid = $v['cid'];
			$sql = "select a.id,a.title,a.price,b.name 
					from yk_product as a left join yk_category as b 
					on a.cid=b.ID where cid = {$cid} 
					order by a.id desc 
					limit 0,3";
			$arr = $db->createCommand($sql)->queryAll();
			$list[] = [
				'cid' => $cid,
				'total' => $v['num'],
				'ctext' => $arr[0]['name'],
				'rows' => $arr
			];
		}
        return $this->render('list', ['list' => $list]);
    }
	
	public function actionLoads()
	{
		$request = Yii::$app->request;
		if($request->isAjax) {
			$args = $request->post();
			$cid = isset($args['cid']) ? (int)$args['cid'] : 0;
			$page = isset($args['page']) ? (int)$args['page'] : 2;
			$limitStart = ($page-1)*3;
			$db = Yii::$app->db;
			$sql = "select id,title,price from yk_product where cid = {$cid} order by id desc limit {$limitStart},3";
			$list = $db->createCommand($sql)->queryAll();
			Yii::$app->response->format = Response::FORMAT_JSON;
			if($list) {
				return ['error' => 0, 'rows'=>$list];
			} else {
				return ['error' => 1, 'message' => 'Not Found'];
			}	
		}
	}
	
	public function actionDetail()
	{
		$model = new Product();
		$id = (int)Yii::$app->request->get('id');
		if($id<=0) {
			header('http/1.0 404 not found');
			exit;
		}
		$db = Yii::$app->db;
		$sql = "select id,cid,title,price,old_price,keywords,descript,amazon_url from yk_product where id=:id";
		$info = $db->createCommand($sql)->bindValue('id', $id)->queryOne();
		if(!$info) {
			header('http/1.0 404 not found');
			exit;
		}
		$dir = "products/{$id}";
		$files = array();
		if($handler = opendir($dir)) {
			while(($content=readdir($handler))!==false) {
				if($content !== '.' && $content!== '..') {
					$files[] = $dir.'/'.$content;
				}
			}	
		}
		$list = $model->getLikeProducts($info, 3);
		return $this->render('detail',['info'=>$info, 'files'=>$files, 'list'=>$list]);
	}

}
