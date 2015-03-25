$(document).ready(function(){

var menu1 = '<li class="regularMenu"><a href="index.html">Home</a></li>'
					
var menu2 = '<li class="regularMenu over"><a href="#">Over Mij</a>'
var menu21 = 	'<ul>'
var menu22 = 		'<li><a href="cv.html">Curriculum Vitae</a></li>'
var menu23 = 		'<li><a href="over_mij.html">Persoonlijk</a></li>'
var menu24 = 		'<li><a href="diensten.html">Hulp aan huis</a></li>'
var menu25 = 	'</ul>'
var menu26 = '</li>'

var menu3 = '<li class="regularMenu"><a href="portfolio.html">Portfolio</a></li>'

var menu4 = '<li class="regularMenu"><a id="contact" href="contact.html">Contact</a></li>'

var menu = menu1 + menu2 + menu21 + menu22 + menu23 + menu24 + menu25 + menu26 + menu3 + menu4;

$('.navigation').append(menu);

});
