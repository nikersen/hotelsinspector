$('.js-title-popup-show').click(function(){
	$(this).closest('.title-popup').toggleClass('show');
});

$('.js-title-popup-val').click(function(){
	var currentData = $(this).closest('.title-popup').find('.title-popup__val-title').text();
	var selectData = $(this).text();

	$('.title-popup__val-title').text(selectData);
	$(this).text(currentData).closest('.title-popup').removeClass('show');
});