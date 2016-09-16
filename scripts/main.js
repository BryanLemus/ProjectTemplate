$(document).ready(function () {
    $('#overlay').hide();
    $('#menu').click(function () {
        $("#links").slideToggle();
    })
    /*Drawers*/
    $('#cartBtn').click(function () {
        $('#overlay').fadeIn('fast');
        $('#filterDwr').hide();        
        $('#cartDwr').show();
    });
    $('#filterBtn').click(function () {
        $('#overlay').fadeIn('fast');
        $('#cartDwr').fadeIn();
        $('#filterDwr').show();
    });
    $('#overlay').click(function () {
        $('.Drawer').hide(),
        $(this).fadeOut();
    });
});