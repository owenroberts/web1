$(document).ready( function() {
	
	var container = $('section');
	
	var columns = 5;
	var rows = 4;
	
	var w = container.width();
	var h = container.height();
	
	var moduleWidth = 100/columns;
	var moduleHeight = 100/rows;
	
	var colors = ['#9948FF', '#5D42E8', '#5567FF', '#4280E8', '#48BDFF'];
	
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			var d = document.createElement('div');
			$(d).addClass('module');
			d.style.background = colors[j%colors.length];
			d.style.width = moduleWidth + '%';
			d.style.height = moduleHeight + '%';
			container.append(d);
		}
	}
	
});