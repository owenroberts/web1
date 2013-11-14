$(document).ready( function(){
	
	
	//some variables we need to be global
	
	var imgCount = 0;  	//count of imgs
	var imgs = ['bluecat.jpg', 'cutecat.jpg', 'purplecat.jpg', 'sunnycat.jpg'];  //array of img names
	var w = 0;  //variable to hold width of all images
	var scrolling = true;	//is it scrolling boolean, when this is true, the images will scroll through automatically
	var d = 4000;	//delay for autoscroll
	
	//now we're going to loop through all of the images and do a few things
	
	for(i = 0; i < imgs.length; i++){
		w +=860;  //calculates width of the list using the number of images multiplied by their width in pixels
		
		//adds each image to the main slider
		$('div#sub-menu').append('<div id="m'+i+'" class="menu-img"><img src="imgs/'+imgs[i]+'"></div>');
		//adds each images to the sub menu
		$('ul#img-list').append('<li><div class="imgs"><img src="imgs/'+imgs[i]+'"></div></li>');
		
	}
	
	//some modifications to our html
	
	$('ul#img-list').css('width',w);  //sets the width of ul calculated above
	$('div#left').fadeOut();  //fade out left pointing button at the beginning
	$('div#play').css('background-color','rgba(51,51,51,0.3)');  //change the play button to be grey at the beginning
	
	//this function starts scrolling automatically
	
	var autoscroll = function(){
		//if scrolling is true
		if (scrolling){	
			// if its not at the last image yet
			if (imgCount < imgs.length - 1){	
				//advance the count of the iamges
				imgCount++;
				//slide to the new images
				$('ul#img-list').animate({right:'+=860px'}, 750, scroller());
				
				//if is is on the last image
			} else if (imgCount == 3) {
				//set the count to zero and slide back to the first image
				imgCount = 0;
				$('ul#img-list').animate({right:0}, 750, scroller());
				
			}
		}
	}
	
	//click right function
	$('div#right').click(function(){
		//stop scrolling
		stopScroll();
		// if its not at the last image yet
		if (imgCount < imgs.length - 1){	
			// slide to new image, increment image count and set the scroll buttons
			$('ul#img-list').animate({right:'+=860px'}, 750);
			imgCount++;
			setButtons(imgCount);
		} 
	});
	
	// click left function
	$('div#left').click(function(){
		//stop scrolling
		stopScroll();
		if (imgCount > 0){
			// if this is not the first image, slide back one image, decrease the image count and set the buttons
			$('ul#img-list').animate({right:'-=860px'}, 750);
			imgCount--;
			setButtons(imgCount);	
		} 
	});
	
	// click on menu images
	$('div.menu-img').click(function(){
		//stop scrolling
		stopScroll();
		// get the image number, slide to that image, set the buttons
		imgCount = $(this).attr("id").substring(1);
		$('ul#img-list').animate({right:''+860*imgCount+'px'}, 750);
		setButtons(imgCount);
	});
	
	
	// this code will execute when the pause button is clicked
	$('div#pause').click(function() {
		//change the pause button to be grey and the play button to be purple
		$(this).css('background-color','rgba(51,51,51,0.3)');
		$('div#play').css('background-color','rgba(85,0,150,0.3)');
		//turn scrolling off
		scrolling = false;
		
	});
	
	// this code will execute when play function is click
	$('div#play').click(function() {
		//change play and pause colors
		$(this).css('background-color','rgba(51,51,51,0.3)');
		$('div#pause').css('background-color','rgba(85,0,150,0.3)');
		//set scrolling to true and launch auto scroll function
		scrolling = true;
		autoscroll();
		
	});
	
	

	
	//set buttons after changes
	var setButtons = function(_imgCount){
		console.log(imgCount);
		//if this the last image, there should not be a right button
		if (_imgCount == imgs.length - 1) {
			$('div#right').fadeOut();
		}
		// first image does not need a left button
		if(_imgCount == 0) {
			$('div#left').fadeOut();
		}
		
		//add left button after first image
		if (_imgCount > 0) {
			$('div#left').fadeIn();
		}
		
		//add right button before last image
		if (_imgCount < imgs.length - 1) {
			$('div#right').fadeIn();
		}
	}
	
	
	//the function starts the scrolling
 	var scroller = function() {
		
		//this waits for the delay variable and then begins the autoscroll
		setTimeout(function(){autoscroll()}, d);
		setButtons(imgCount);
	}
	
	//this stops scrolling and then resets the colors of the play and pause button
	var stopScroll = function() {
		scrolling = false;
		$('div#pause').css('background-color','rgba(51,51,51,0.3)');
		$('div#play').css('background-color','rgba(85,0,150,0.3)');
	}
	
	//this is called once by the main function to begin the image scrolling
	scroller();
	
});

