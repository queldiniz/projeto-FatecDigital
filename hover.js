$(document).ready(function(){
    $('.card-midia').on('mouseenter', function(e) {
        x= e.pageX - $(this).offset().left,
        y= e.pageY - $(this).offset.top;
        $(this).find('span').css({top:y, left:x})
    })
    $('.card-midia').on('mouseout', function(e) {
        x= e.pageX - $(this).offset().left,
        y= e.pageY - $(this).offset.top;
        $(this).find('span').css({top:y, left:x})
    })
})
