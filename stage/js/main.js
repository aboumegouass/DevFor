$(document).ready(function() {

  $('.has-menu#myrabida-list-btn').click(function(){
    $(this).find('.arrow-menu').toggleClass('faRot');
    $('#myrabida-list').slideToggle();
  });
  
  $('.has-menu#myfavorite-list-btn').click(function(){
    $(this).find('.arrow-menu').toggleClass('faRot');
    $('#myfavorite-list').slideToggle();
  });
  
  $('.has-menu#mysaves-list-btn').click(function(){
    $(this).find('.arrow-menu').toggleClass('faRot');
    $('#mysaves-list').slideToggle();
  });
  
  $('.has-menu#profile-list-btn').click(function(){
    $(this).find('.arrow-menu').toggleClass('faRot');
    $('#profile-list').slideToggle();
  });
  

  $('.menu-list-items.menu-list-notification').slimscroll({
    height: '250px',
    position: 'left'
  });
$('.ithoub-sidebar-inner').slimscroll({
  position: 'left',
  height: '87vh'
});
$('.rbd-summery-inner').slimscroll({
  position: 'left',
  height: '85vh'
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      //$('.btn-scroll-top').fadeIn();
      $('.btn-scroll-top').addClass('showBtn');
  } else {
      //$('.btn-scroll-top').fadeOut();
      $('.btn-scroll-top').removeClass('showBtn');
  }
});

$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
    $('.rbd-navbar').addClass('nav-active');
} else {
    $('.rbd-navbar').removeClass('nav-active');
}
});

'use strict';

var c, currentScrollTop = 0,
  navbar = $('.sub-navbar');

$(window).scroll(function () {
 var a = $(window).scrollTop();
 var b = navbar.height();

 currentScrollTop = a;

 if (c < currentScrollTop && a > b + b) {
   navbar.addClass("scrollUp");
 } else if (c > currentScrollTop && !(a <= b)) {
   navbar.removeClass("scrollUp");
 }
 c = currentScrollTop;
});


$('.btn-scroll-top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});


  $('.btn-sidebar-toggle').on('click', function(){
    $(this).toggleClass('open-active');
    $('.toggle-sidebar-aside, .article-single').toggleClass('nocolumn');
    $('.ithoub-sub-sidebar, .devfor-content, .sub-navbar').toggleClass('left-0');
    $('.ithoub-sidebar').toggleClass('mob-aside-toggle');
    $('.ithoub-sidebar').toggleClass('toggle-right');

    
  });
})