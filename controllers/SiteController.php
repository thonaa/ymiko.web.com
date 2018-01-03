<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;

class SiteController extends Controller
{
	public $enableCsrfValidation = false;

    public function actionIndex()
    {
		$db = Yii::$app->db;
		$sql = "select id,title,price,keywords from yk_product order by add_time desc limit 6";
		$rows = $db->createCommand($sql)->queryAll();
		$rows = array_chunk($rows, 3);
        return $this->render('index', ['rows'=>$rows]);
    }


    public function actionSupport()
    {
        return $this->render('support');
    }
	
	public function actionCollect()
	{
		$request = Yii::$app->request;
		$post = $request->post();
		if(empty($post)) {
			header('http/1.0 404 Not Found.');exit;
		}
		Yii::$app->db->createCommand()->insert('yk_email', [
			'email' => $post['email'],
			'ip' => $_SERVER['REMOTE_ADDR'],
		])->execute();	
	}
	
	public function actionJoin()
	{
		return $this->render('join');
	}
	
	public function actionJoinadd()
	{
		$data = Yii::$app->request->post();
		if(!$data) {
			return $this->goHome();
		}
		if(isset($data['topic'])) {
			$data['topic'] = implode($data['topic'], ',');
		}
		$data['add_time'] = date('Y-m-d H:i:s');
		$id = Yii::$app->db->createCommand()->insert('yk_join', $data)->execute();
		if($id) {
			return $id;
		} else {
			return 0;
		}	
	}
	
	public function actionOurcompany()
	{
		return $this->render('ourcompany');
	}
	
	public function actionContactus()
	{
		return $this->render('contactus');
	}
	
	public function actionGiveaway()
	{
		return $this->render('giveaway');
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
