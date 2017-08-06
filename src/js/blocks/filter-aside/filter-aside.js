$(".filter-aside__star").hover(function(){
	$(this).closest(".filter-aside__stars").removeClass("mark"+$(this).attr("data-mark"));
	$(this).closest(".filter-aside__stars").addClass("mark"+$(this).attr("data-mark"));
	}, function(){
	$(this).closest(".filter-aside__stars").removeClass("mark"+$(this).attr("data-mark"));
	});

	$(".filter-aside__star").click(function(){
	var mark = $(this).attr("data-mark");
	$(this).closest(".filter-aside__stars").removeClass("star1");
	$(this).closest(".filter-aside__stars").removeClass("star2");
	$(this).closest(".filter-aside__stars").removeClass("star3");
	$(this).closest(".filter-aside__stars").removeClass("star4");
	$(this).closest(".filter-aside__stars").removeClass("star5");
	$(this).closest(".filter-aside__stars").addClass("star"+mark);
	$(this).closest(".filter-aside__stars").find("#selected_mark").val(mark);
});

$('#filter-rating-slider').ionRangeSlider({
	type: "double",
	grid: true,
    min: 1,
    max: 5,
    from: 1,
    to: 5
});