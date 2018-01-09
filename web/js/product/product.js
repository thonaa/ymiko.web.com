
var cidAndPage = {};

$(function () {
	
	var btn = $('#main-content .show-more');
	
	btn.each(function(index, item) {
		var cid = $(item).next().val();
		cidAndPage[cid] = {
			cid: cid,
			page: 2
		};
		$(item).on('click', function() {
			
			getProducts(cid, this);
	
		});
	});
	
	function getProducts(cid, ob)
	{
		var param = cidAndPage[cid];
		$.ajax({
			url: '?r=product/loads',
			type: 'post',
			data: param,
			success: function(data) {
				if(data.error == 0) {
					var rows = data.rows;
					var dom = '<div class="box-content container">';
					for(i=0;i<rows.length;i++) {
						dom += '<div class="list-product col-md-3">'+
							'<a href="?r=product/detail&id='+rows[i].id+'" target="_blank">'+
							'<img src="products/'+rows[i].id+'/1.jpg" alt="" title="">'+
							'</a>'+
							'<p>'+rows[i].title+'<br>'+rows[i].price+'</p>'+
							'</div>';
					}
					dom += '</div>';
					$(ob).parent().find('.box-content:last').after(dom);
					cidAndPage[cid].page++;
				} else {
					$(ob).hide();
					$(ob).prev().hide();
				}
			}
		});
	}

});