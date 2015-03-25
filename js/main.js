$(document).ready(function(){

    $('.mes').css({'z-index': '8000', 'display': 'block'});
    $('.mec').css({'z-index': '8000', 'display': 'block'});
    $('.meg').css({'z-index': '9000', 'display': 'block'});

    $('.med').delay(200).css('z-index', '10000').fadeIn(600).queue(
        function(){
            $('.mes').animate({left:'-150px'},800);
            $('.mec').animate({left:'150px'},800);
        });

    $('.skillholder .html').animate({'width':'580px'}, 2000);
    $('.skillholder .css').animate({width:'560px'}, 3000);
    $('.skillholder .js').animate({width:'510px'}, 4200);
    $('.skillholder .java').animate({width:'460px'}, 5400);
    $('.skillholder .php').animate({width:'420px'}, 6600);
    $('.skillholder .ps').animate({width:'480px'}, 7500);

})
