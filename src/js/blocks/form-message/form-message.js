// Открытие/Закрытие формы для ввода записи
var formCheck = function(obj){
	if(obj.hasClass('active')) {
		if(obj.val() === '') {
			obj.removeClass('active');
		}
	}
}

$('.form-message__textarea').click(function(){
	$(this).addClass('active').focus();
});

$('.form-message__textarea').focusout(function(){
	formCheck($(this));
});