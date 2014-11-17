$(document).ready(function(){

	$('.mail').mouseover(function(){
		$('.mail').empty();
		$('<a href="mailto:rjp.vroegop@gmail.com">rjp.vroegop@gmail.com</a>').appendTo('.mail');
		$('.mail a').css('text-decoration', 'none');
		
	});
	if(window.location.href.indexOf("contact.html?send") > -1) {
       $('table').empty();
	   $('<tr><td>Bedankt voor uw bericht.</td></tr><tr><td>Ik neem zo snel mogelijk contact met u op!</td></tr>').appendTo('table');
	   $('table').css('padding-top', '10%');
	   $('table').css('padding-left', '3%');
    }
});