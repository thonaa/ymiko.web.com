function clearForm(id) {
	var items = $(id).find('input[type="checkbox"]');	
	$.each(items, function(index, item) {
		$(item).prop("checked","");
	});
	
	var texts = $(id).find('input[type="text"]');
	$.each(texts, function(index, input) {
		$(input).val('');
	});	
	$('label.error').remove();
}

$(function () {
	
	// jQuery.validator.addMethod("isName", function (value, element) {
		// var isname = /^[A-Za-z]+$/;
		// return this.optional(element) || (isname.test(value));
	// }, "Please enter a valid name");
	
	
	
	// $.validator.addMethod("isCode", function (value, element) {
		// var error;
		
		// var codeInput = $('#codeInput').val();
		// if (codeInput.toLowerCase() == code.toLowerCase()) {
			// console.log('123');
			// return true;
		// } else {
			// error = 'errorTips';

			// return false;
		// }
	// }, "Please enter a valid name");
	

	$("#join-form").validate({
		
		debug: true,
		
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'post',
				url : '?r=site/joinadd',
				success: function (e) {
					if(e>0) {
						$('#form-success').css('display','block');
						setTimeout(function(){
							$('#form-success').css('display','none')
							clearForm('#join-form');
						},2000);	
					} 
				}
			});
		},
		rules: {
			url:{
				url:true
			},
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			required: "This field is required.",
			email: "Please enter a valid email address.",
            url: "Please enter a valid URL."
		}

	})
});