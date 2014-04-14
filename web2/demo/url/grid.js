$(document).ready( function() {
	
	

	
	var container = $('section');
	var columns = 3;
	var rows = 2;
	
	var w = container.width();
	var h = container.height();
	
	var moduleWidth = 100/columns;
	var moduleHeight = 100/rows;
	
	var colors = ['#9948FF', '#5D42E8', '#5567FF', '#4280E8', '#48BDFF'];
	
	var gridObjects = [
	{
		header:"My project #1",
		id:"first",
		dek:"This is my new project about making modular grids",
		img:"imgs/img1.png"
	},
	{
		header:"COOL PROJECT",
		id:"cool",
		dek:"This is my new project about making modular grids",
		img:"imgs/img1.png"
	},
	{
		header:"LAME PROJECT",
		id:"lame",
		dek:"This other project I made is so lame",
		img:"imgs/img1.png"
	}		
	];
	
	for (var i = 0; i < columns*rows; i++) {
		var d = document.createElement('div');
		$(d).addClass('module expand');
		d.style.background = colors[i%colors.length];
		d.style.width = moduleWidth + '%';
		d.style.height = moduleHeight + '%';
		if (gridObjects[i] != null) {
			$(d).attr('id', gridObjects[i].id);
			$(d).append('<img src="'+gridObjects[i].img+'">');
			$(d).append('<h1>'+gridObjects[i].header+'</h1>');
			$(d).append('<p>'+gridObjects[i].dek+'</p>');				
		}			
		container.append(d);
		
		if (location.hash != null) {
			$(location.hash).css({zIndex:1,position:'absolute'}).animate({
			width:'100%',
			height:'100%'
		}, 1000);
			var closeDiv = '<div class="close"></div>';
			$(location.hash).append(closeDiv);
		}
		
	}
	
	
	
	$('body').on('click', '.expand', function(){
		$(this).off('click').removeClass('expand');
		
		location.hash = $(this).attr('id');
		$(this).css({zIndex:1,position:'absolute'}).animate({
			width:'100%',
			height:'100%'
		}, 1000);
		var closeDiv = '<div class="close"></div>';
		$(this).append(closeDiv);
	});
	
	$('body').on('click', '.close', function(){
		$(this).parent().addClass('expand').css({zIndex:0,position:'relative'}).animate({
			width:moduleWidth+'%',
			height:moduleHeight+'%'
		}, 500);
		$(this).remove();
		location.hash = '';
	});

});