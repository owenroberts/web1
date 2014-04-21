var width = window.innerWidth;
var height = window.innerHeight;
var offset = 50;
var numWindmills = 3;

var size = 40;
var speed;
var rotate = 0;
var windmills = [];
var mousePosition;
var origins = [
new Point(width/2, height/2),
new Point(width/2 + 200, height/2 - 200),
new Point(width/2 + 400, height/2 + 100)
]

for (var i = 0; i < numWindmills; i++) {
	var base = new Path();
	base.add(origins[i]);
	base.add(new Point(origins[i].x-size, height));
	base.add(new Point(origins[i].x+size, height));
	base.closed = true;
	base.strokeColor = "black";

	var windmill = new CompoundPath();
	var circle1 = new Path.Circle(origins[i], size/2);
	windmill.children.push(circle1);
	var circle2 = new Path.Circle(origins[i], size);
	for (var j = 0; j < 3; j++) {
    var rectangle = new Rectangle(origins[i], new Size(size*3, size/2));
    var blade = new Path.Rectangle(rectangle);
    blade.rotate(j*120, origins[i]);
    blade = blade.subtract(circle1);
		circle2 = circle2.subtract(blade);
    windmill.children.push(blade);
	}
	windmill.children.push(circle2);
	windmill.closed = true;
	windmill.fillColor = "white";
	windmill.strokeColor = "black";
	windmills[i] = windmill;
}
console.log(windmills);



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

