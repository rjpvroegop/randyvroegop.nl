//make the slideshow timer available for all classes
var startSlideshow;
var startSecondSlideshow;

$(document).ready(function(){
	
		$(function() {
			
			//initially hide all slides accept the first
			$("#slideshow > div:gt(0)").hide();
			
			//initially start slideshow
			startSlideshow = setInterval(nextSlide,7000);
			
			//onclick show previous slide and reset timer
			$(".previousSlide").click(function()
			{ 
				clickPrevSlide();
			});
			
			//onclick show next slide and reset timer
			$(".nextSlide").click(function()
			{ 
				clickNextSlide();
			});

			
			//initially hide all slides accept the first
			$("#secondSlideshow > div:gt(0)").hide();
			setInterval(function(){
				//fadeOut first div
				$('#secondSlideshow > div:first').slideUp(500)
				//fadeIn next div
				.next().slideDown(500)
				//go to first div again
				.end()
				//reappend to slideshow, so its the last element in the list
				.appendTo('#secondSlideshow');
				//make sure buttons are below the div elements, so they cannot destroy the slideshow
				$('a.previousSlide').appendTo('#secondSlideshow');
				$('a.nextSlide').appendTo('#secondSlideshow');
			},7000);
		});

});

function clickNextSlide()
{
	//call function
	stopIntervalSlide();
	//show next slide
	nextSlide();
	//start timer and slideshow again
	startSlideshow = setInterval(nextSlide,7000);
}

function clickPrevSlide()
{
	//call function
	stopIntervalSlide();
	//show next slide
	prevSlide();
	//start timer and slideshow again
	startSlideshow = setInterval(nextSlide,7000);
}

function stopIntervalSlide()
{
	//stop and reset timer
	clearInterval(startSlideshow);
}

function nextSlide()
{
	//fadeOut first div
	$('#slideshow > div:first').slideUp(500)
	//fadeIn next div
	.next().slideDown(500)
	//go to first div again
	.end()
	//reappend to slideshow, so its the last element in the list
	.appendTo('#slideshow');
	//make sure buttons are below the div elements, so they cannot destroy the slideshow
	$('a.previousSlide').appendTo('#slideshow');
	$('a.nextSlide').appendTo('#slideshow');
}
function prevSlide()
{
	//fade out first div
	$('#slideshow > div:first').slideUp(500);
	//fade in last div and make it first
	$('#slideshow > div:last').slideDown(500);
	//make sure buttons are below the div elements, so they cannot destroy the slideshow
	$('a.previousSlide').appendTo('#slideshow');
	$('a.nextSlide').appendTo('#slideshow');
}