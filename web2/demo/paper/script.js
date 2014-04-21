var width = window.innerWidth;
var height = window.innerHeight;
var columns = 7;
var rows = 8;
var offset = 50;
var w = Math.floor(width/columns);
var h = Math.floor(height/rows);

var size = new Size(40, 10);
var speed;
var rotate = 0;
var shapeArray = [];
var mousePosition;

var origin = new Point(offset, offset);
var rect = new Rectangle(origin, size);
var shape = new Path.Rectangle(rect, 8);
shape.strokeColor = "blue";
shape.fillColor = "lightblue";
shape.strokeWidth = "5";
shape.strokeCap = "round";
shape.closed = true;

for (var i = 0; i < columns; i ++) {
	for (var j = 0; j < rows; j ++) {
		shapeArray[j+i*rows] = shape.clone();
		shapeArray[j+i*rows].position = new Point(Math.ceil(offset+i*w), Math.ceil(offset+j*h));
	}
}
shape.remove();

function onMouseMove(event) {
	var len = event.delta.length;
	rotate += Number(len);
	mousePosition = event.point;	
}

function onFrame(){
	if (rotate > 300) {
		speed = 40;
	} else if (rotate > 100) {		
		speed = 20;
	} else {
		speed = 3;
	}
	if (rotate > 0) {		
		for (var i = 0, len = shapeArray.length; i < len; i++) {		
			var distance = Math.ceil(shapeArray[i].position.getDistance(mousePosition)/100);	
			shapeArray[i].rotate(speed*2/distance);
		}
		rotate -= speed;
	}			
}

