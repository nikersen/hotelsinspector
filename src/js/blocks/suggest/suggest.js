var suggest = $('.suggest');
var header = $('.header');

var _showSuggest = function() {
	var ww = $(window).width();	
	var body = $('html, body');

	if (ww >= 800) {
		body.animate({scrollTop: 0});
	}
	
	suggest.fadeIn('fast');
	header.addClass('suggest-show');

	_scrollBarWidth();
}

var _hideSuggest = function() {
	suggest.fadeOut('fast', function(){
		header.removeClass('suggest-show');
	});
}

var _hideSuggestBrute = function() {
	suggest.hide();
	header.removeClass('suggest-show');
}

var _scrollBarWidth = function() {
	var w1 = suggest.width();
	var w2 = suggest.children().width();

	suggest.find('.container').css({'left' : (w1 - w2)/2 });
}

$('.js-show-suggest').click(function(){
	_showSuggest();
});

$(document).mouseup(function (e) {
	var container = $('.suggest');
	var containerSecond = $('.search');
	if (container.has(e.target).length === 0){
		if (containerSecond.has(e.target).length === 0){
			_hideSuggest();
		}
	}
});

$(window).scroll(function(){
	var suggest = $('.suggest').innerHeight() * 0.85;
	var wscroll = $(this).scrollTop();

	if (wscroll >= suggest) {
		_hideSuggest();
	}
});