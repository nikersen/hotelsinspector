$('.val-popup__val-item').click(function(){
	$(this).closest('.val-popup__val').find('.val-popup__val-item').removeClass('active');
	$(this).addClass('active');
})