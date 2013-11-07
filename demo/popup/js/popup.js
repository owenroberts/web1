$(document).ready(function() {
	$('.img').mouseenter(function(){
		$(this).find('.overlay').animate({
			opacity:'0.8'
		}, 1200);
	});
	
	$('.img').mouseleave(function(){
		$(this).find('.overlay').animate({
			opacity:'0'
		}, 600);
	});
	
	$('.img').click(function() {
		var content = $(this).find('.inner').html();
		$('#content').empty();
		$('#content').append(content);
		$('.img-holder').fadeIn(1200);
		$('.overlay').animate({
			opacity:'0'
		}, 600);
		
	});
	
	$('.img-holder').click(function() {
		$(this).fadeOut(600);
	});
	
});