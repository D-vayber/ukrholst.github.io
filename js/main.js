$(function () {

    // Menu opener hamburger

    $('.burger-menu').click(function () {
        $('.menu-collapse').toggleClass('active');
        $('.menu').toggleClass('menu-opened');
        $(this).toggleClass('active')
    }); 
});