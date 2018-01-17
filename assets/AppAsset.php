<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
		"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css",
		"font-awesome-4.7.0/css/font-awesome.css",
		"style/root.css",
		"style/index/style.css"
		
    ];
    public $js = [
		"js/lib/jquery.min.js",
		"js/lib/jquery.form.js",
		"https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js",
		"http://static.runoob.com/assets/jquery-validation-1.14.0/dist/jquery.validate.min.js",
		"js/root.js"
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
