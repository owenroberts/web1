var width = window.innerWidth;
var height = window.innerHeight;
var columns = 7;
var rows = 8;
var offset = 50;
var w = Math.floor(width/columns);
var h = Math.floor(height/rows);

var size = 20;
var speed;
var rotate = 0;
var windmills = [];
var mousePosition;


var origin = new Point(100, 100);
var windmill = new CompoundPath();

var d = new Path.Circle(origin, size/2);
windmill.children.push(d);
var c = new Path.Circle(origin, size);

for (var i = 0; i < 3; i++) {
    var rectangle = new Rectangle(origin, new Size(size*2, size/2));
    var b = new Path.Rectangle(rectangle);
    b.rotate(i*120, origin);
    b = b.subtract(d);
		c = c.subtract(b);
    windmill.children.push(b);
}
windmill.children.push(c);
windmill.closed = true;

windmill.fillColor = "white";
windmill.strokeColor = "black";
//var wmSymbol = new Symbol(windmill);  // use this code to create a symbol version

for (var i = 0; i < columns; i ++) {
	for (var j = 0; j < rows; j ++) {
		windmills[j+i*rows] = windmill.clone();
		windmills[j+i*rows].position = new Point(Math.ceil(offset+i*w), Math.ceil(offset+j*h));
		windmills[j+i*rows].rotate(Math.random()*360, windmills[j+i*rows].position);
	}
}
windmill.remove();
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

		
		for (var i = 0, len = windmills.length; i < len; i++) {		
			var distance = Math.ceil(windmills[i].position.getDistance(mousePosition)/100);	
			windmills[i].rotate(speed*2/distance);
		}


		rotate -= speed;
	}	
		
}
