<!--主要界面-->
<div id="main">
    <div class="container clearfix">
        <h3>Join Ymiko Program</h3>
        <p>We are always looking for reviewers who are reliable, communicative and honest to post reviews about our
            products. In return, you will get the free products. Over 200,000 products, we are sure that you will find
            your preferences. Learn more, please apply at <strong>here</strong>.</p>
        <h5><strong>The fields marked * are required.</strong></h5>

        <h4>User Information</h4>
        <form id="join-form" class="cmxform">
            <fieldset>
                <div class="form-group">
                    <label for="name">Name</label><span> *</span>
                    <input type="text" name="name" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label><span> *</span>
                    <input type="text" name="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="url">Amazon profile URL</label>
                    <input type="text" name="url" class="form-control" id="url">
                </div>

                <h4>I actively contribute to or participate in (please include links to your posts):</h4>
                <div class="form-group">
                    <label for="socialmedia">Social media (Facebook, Twitter etc.)</label>
                    <input type="text" name="socialmedia" class="form-control" id="socialmedia">
                </div>
                <div class="form-group">
                    <label for="youTube">YouTube channel</label>
                    <input type="text" name="youTube" class="form-control" id="youTube">
                </div>

                <div class="form-group">
                    <label for="blogs">Blogs/websites</label>
                    <input type="text" name="blogs" class="form-control" id="blogs">
                </div>
                <div class="form-group">
                    <label for="forums">Deal forums</label>
                    <input type="text" name="forums" class="form-control" id="forums">
                </div>
                <div class="form-group">
                    <label for="websites">Other websites</label>
                    <input type="text" name="websites" class="form-control" id="websites">
                </div>

                <h4>What's your interested topics?</h4>

                <div class="checkbox">
                    <label>
                        <input type="checkbox" class="checkbox" value="kitchen" name="topic[]">kitchen&Dining
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" class="checkbox" value="Appliances" name="topic[]">Appliances
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" class="checkbox" value="Garden" name="topic[]">Garden & Outdoor
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" class="checkbox" value="Tools" name="topic[]">Tools & Home Improvement
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" class="checkbox" value="Automotive" name="topic[]">Automotive Tools & Equipment
                    </label>
                </div>

                <!--验证码-->

               <!-- <p class="yzm">
                    <label for="codeInput">Copy the CAPCTHA</label>
                <div class="capicha clearfix">
                    <input type="text" name="code" id="codeInput" class="code form-control" placeholder="验证码">
                    <span id="code" class="code_pic" title="看不清，换一张"></span>
                </div>
                </p>-->

                <input type="submit" class="btn btn-warning" value="SAVE">
                <input type="submit" class="btn" value="RESET">
            </fieldset>
        </form>

    </div>
	
	<!--footer-modal-->
	<div id="form-success">
		<div class="wrap">
			<div>
				<p>Congratulations,Request successful</p>
			</div>
		</div>
	</div>

</div>
<?php 

$this->registerCssFile('@web/style/join/join.css',  ['depends' => ['app\assets\AppAsset']]);
$this->registerJsFile('@web/js/join/join.js',  ['depends' => ['app\assets\AppAsset']]);

?>



