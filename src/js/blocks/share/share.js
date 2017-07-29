$('.js-share').click(function(){
	$('.share').fadeOut('fast');
	$(this).closest('.post-panel').find('.share').fadeIn('fast');
});
$('.js-close-share').click(function(){
	$('.share').fadeOut('fast');
});