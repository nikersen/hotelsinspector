$('.pagination__pages-item:not(.pagination__pages-item--arrow)').click(function(){
	$('.pagination__pages-item').removeClass('active');
	$(this).addClass('active');
})