$('#toggle-events').on('click', function(){
    var toggle = '0px';
    var overlapOpacity = '0';
    if( $('aside').width() == 0 ){
        toggle = '300px';
        overlapOpacity = '1';
    } else {
        toggle = '0px';
        overlapOpacity = '0';
    } 
    $('.overlap').toggle();
    $('aside').animate({width: toggle}, 500);
    $('#toggle-events').animate({marginLeft: toggle}, 500);
    $('.overlap').animate({opacity: overlapOpacity}, 400);
});