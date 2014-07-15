$(document).ready(function(){
    $('.profile_1').click(function(){
    	$('.portfolio').slideUp('fast');
    	$('.history').slideUp('fast');
        $('.profile').slideToggle('slow');
    
    });
    $('.portfolio_1').click(function(){
    	$('.profile').slideUp('fast');
    	$('.history').slideUp('fast');
        $('.portfolio').slideToggle('slow');
    });
    $('.history_1').click(function(){
    	$('.profile').slideUp('fast');
    	$('.portfolio').slideUp('fast');
        $('.history').slideToggle('slow');
    
    });

    $('.media_1').click(function(){
        $('.apart').slideUp('slow');
        $('.center').slideUp('slow');
        $('.media').slideToggle('slow');
    
    });
    $('.apart_1').click(function(){
        $('.media').slideUp('slow');
        $('.center').slideUp('slow');
        $('.apart').slideToggle('slow');
    });
    $('.center_1').click(function(){
        $('.media').slideUp('slow');
        $('.apart').slideUp('slow');
        $('.center').slideToggle('slow');
    
    });
});