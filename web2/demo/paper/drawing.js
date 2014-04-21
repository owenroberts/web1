tool.minDistance = 10;
tool.maxDistance = 100;

var path;
path = new Path();

function onMouseMove(event) {
    
	
	path.fillColor = {
		hue: Math.random() * 360,
		saturation: 1,
		brightness: 1
	};

	path.add(event.point);

	var step = event.delta / 2;
	
	step.angle += 90;
	
	var top = event.middlePoint + step;
	var bottom = event.middlePoint - step;
	
	path.add(top);
	path.insert(0, bottom);

	path.add(event.point);
}