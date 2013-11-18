$(document).ready(function() {
	$('.img').mouseenter(function(){
		$(this).find('.overlay').animate({
			opacity:'0.8'
		}, 600);
	});
	
	$('.img').mouseleave(function(){
		$(this).find('.overlay').animate({
			opacity:'0'
		}, 300);
	});
	
	$('.img').click(function() {
		var img = '<img src="'+$(this).find('img').attr('src')+'">';
		var content = $(this).find('.inner').html();
		$('#content').empty().append(img).append(content);
		$('.img-holder').fadeIn(600);
		$('.overlay').animate({
			opacity:'0'
		}, 300);
		
	});
	
	$('.img-holder').click(function() {
		$(this).fadeOut(300);
	});
	
});