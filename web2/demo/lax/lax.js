window.onload=function(){
	d3.select('#one').selectAll('div')
		.style("background", function(d, i) {
  return i % 2 ? "hsl(" + ((Math.random() * 90) + 210) + ",50%,80%)" :  "transparent";
	});
	
	
	var scrollers = document.getElementsByClassName('scrollable');
	var objs = [];
	
	for (var i = 0, len = scrollers.length; i < len; i++) {
		objs[i] = {
			e:scrollers[i],
			o:$(scrollers[i]).position(),
			s:$(scrollers[i]).attr('data-speed'),
			d:$(scrollers[i]).attr('data-dir')
		};
	}
	
	var hashes = {
		demo:1655,
		example:5000
	};
	
	if (location.hash != '') {
		$('body, html').animate({
			scrollTop: hashes[location.hash.substring(1)]
		}, 1000);
	}
	

	var bgToggle = false;
	var cToggle = false;
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var hasCtx = false;
	if (canvas.getContext) { hasCtx = true;}
	
	window.onscroll = function() {
		var ws = window.scrollY;
		for (var i in hashes) {
			if (ws > 1655 && ws < 5000) {
				location.hash = 'demo';
			} else if (ws > 5000) {
				location.hash = 'example';
			} else {
				//location.hash = 'home';
			}
		}
		
		if (ws > 768 && !bgToggle) {
			$('#bg').css('background', 'url(imgs/bg2.jpg)');
			bgToggle = true;
		} else if (ws < 1124 && bgToggle) {
			$('#bg').css('background', 'url(imgs/bg1.jpg)');
			bgToggle = false;
			
		}
		
		if (ws > 2445) {
			$('#stop').css({position:'fixed', top:'0', width:'100%'});
		} else {
			$('#stop').css({position:'relative'});
		}
		
		for (var i = 0, len = objs.length; i < len; i++) {
				$(objs[i].e).css(objs[i].d, objs[i].o[objs[i].d] + ws/objs[i].s);
		}
		
		if (ws > 6500 && ws < 9500) {
			d3.select('rect')
				.attr('fill', 'blue')
				.attr('stroke', 'red')
				.attr('x', ws/9)
				.attr('stroke-dashoffset', ws/8);
		} else {
			d3.select('rect')
				.transition()
				.duration(2000)
				.attr('fill', 'transparent')
				.attr('stroke', 'transparent');
		}
		
		if (ws > 10000 && !cToggle) {
			cToggle = true;
		} else if (ws < 10000 && cToggle){
			cToggle = false;
			ctx.clearRect(0,0,1400,768); // clear canvas
		}
		
		
			
		if (hasCtx && cToggle) {
			ctx.clearRect(0,0,1400,768); // clear canvas
			for (var i = 0; i < 50; i++) {
				ctx.fillStyle = "hsl("+(Math.random()*90 + 210)+", 50%, 50%)";
				ctx.fillRect(ws - 12000 + Math.random()*1400, Math.random()*500, 10, 10);
			}			
		} 		
	}
};
