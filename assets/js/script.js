'use strict';

var $i = 0;
$('.hamburger-icon').click(function() {
    if ($i % 2 == 0) {
        $(this).addClass('is_active');
        $('.nav-menu').addClass('open_nav');
        $('.page-wrapper').addClass('menu_open');
    } else {
        $(this).removeClass('is_active');
        $('.nav-menu').removeClass('open_nav');
        $('.page-wrapper').removeClass('menu_open');
    }
    $i++;
});

$('.nav-menu a').click(function(){
    $i++;
    $('.hamburger-icon').removeClass('is_active');
    $('.nav-menu').removeClass('open_nav');
    $('.page-wrapper').removeClass('menu_open');
});
