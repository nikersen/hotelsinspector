
// popups
var _showPopup = function(el) {
	var ow = $('body').scrollTop();

	if (el) {
		el.addClass('show').scrollTop(0);

		$('body').addClass('overlay-on').css({
			'position' : 'fixed',
			'top' : -ow,
			'width' : '100%'
		});
	}
}

var _hidePopup = function() {
	var ow = $('body').css('top');
	ow = ow.replace('px', '');

	$('#overlay').removeClass('show');

	$('body').removeClass('overlay-on').css({
		'position' : '',
		'top' : '',
		'width' : ''
	}).scrollTop(-ow);
}


// popups show
$('.js-open-photo-popup').mousedown(function(){
	_showPopup($('.photo-popup-container'));
});
$('.js-popup-valuation').click(function(){
	_showPopup($('.val-popup-container'));
});


// popups hide
$('.js-popup-hide').click(function(){ _hidePopup();} );

$('#overlay').click(function(e){
	var div = $(this).find('.container');  
	if (!div.is(e.target) && div.has(e.target).length === 0) { _hidePopup(); }
});