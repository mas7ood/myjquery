$(function(){
$('.carousel').each(function(){
  		var obj = $(this);
			if(obj.find('li').length > 1){
				obj.parent().append('<button class="prev"> &raquo; </button><button class="next"> &laquo; </button>');
			}
			obj.jCarouselLite({
				visible: 1,
				responsive: true,
				swipe: false,
				circular: true,
				speed: 750,
				btnNext: '.next',
				btnPrev: '.prev'
			});
			
			// set interval
			var autoTime = 7500;
			var x = setInterval("$('.next').trigger('click');", autoTime);
			$($(this).find('img')).hover(function(){
				clearInterval(x);
			}, function(){
				x = setInterval("$('.next').trigger('click');", autoTime);
			});
		});

})
