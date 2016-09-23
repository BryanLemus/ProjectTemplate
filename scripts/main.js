$(document).ready(function () {
    $('#overlay').hide();
    /*Drawers*/
    $('#home').click(function () {
        $('#categories').slideToggle();
        $('#bg').slideToggle();
    });
    $('#searchBtn').click(function () {
        window.location.href = 'search.html';
    })
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