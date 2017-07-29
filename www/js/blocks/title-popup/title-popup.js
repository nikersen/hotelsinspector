$('.js-title-popup-show').click(function(){
	$(this).closest('.title-popup').toggleClass('show');
});

$('.js-title-popup-val').click(function(){
	var currentData = $(this).closest('.title-popup').find('.title-popup__val-title').text();
	var selectData = $(this).text();

	$('.title-popup__val-title').text(selectData);
	$(this).text(currentData).closest('.title-popup').removeClass('show');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJibG9ja3MvdGl0bGUtcG9wdXAvdGl0bGUtcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJCgnLmpzLXRpdGxlLXBvcHVwLXNob3cnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdCQodGhpcykuY2xvc2VzdCgnLnRpdGxlLXBvcHVwJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxufSk7XHJcblxyXG4kKCcuanMtdGl0bGUtcG9wdXAtdmFsJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHR2YXIgY3VycmVudERhdGEgPSAkKHRoaXMpLmNsb3Nlc3QoJy50aXRsZS1wb3B1cCcpLmZpbmQoJy50aXRsZS1wb3B1cF9fdmFsLXRpdGxlJykudGV4dCgpO1xyXG5cdHZhciBzZWxlY3REYXRhID0gJCh0aGlzKS50ZXh0KCk7XHJcblxyXG5cdCQoJy50aXRsZS1wb3B1cF9fdmFsLXRpdGxlJykudGV4dChzZWxlY3REYXRhKTtcclxuXHQkKHRoaXMpLnRleHQoY3VycmVudERhdGEpLmNsb3Nlc3QoJy50aXRsZS1wb3B1cCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbn0pOyJdLCJmaWxlIjoiYmxvY2tzL3RpdGxlLXBvcHVwL3RpdGxlLXBvcHVwLmpzIn0=
