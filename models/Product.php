<?php 

namespace app\models;

use Yii;
use yii\base\Model;

class Product extends Model
{
	
	public function getProducts($num=2)
	{
		$db = Yii::$app->db;
		$sql = "select id,title from yk_product order by id desc limit {$num}";
		$list = $db->createCommand($sql)->queryAll();
		return $list;
	}
	
	public function getLikeProducts($record, $num=3)
	{
		$id = $record['id'];
		$cid = $record['cid'];
		$db = Yii::$app->db;
		$sql = "select id,title,price from yk_product where cid = {$cid} and id not in({$id}) limit {$num}";
		$list = $db->createCommand($sql)->queryAll();
		return $list;
	}
	
}

