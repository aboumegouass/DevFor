$(document).ready(function(){$(".has-menu#myrabida-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#myrabida-list").slideToggle()}),$(".has-menu#myfavorite-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#myfavorite-list").slideToggle()}),$(".has-menu#mysaves-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#mysaves-list").slideToggle()}),$(".has-menu#profile-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#profile-list").slideToggle()}),$(".menu-list-items.menu-list-notification").slimscroll({height:"250px",position:"left"}),$(".ithoub-sidebar-inner").slimscroll({position:"left",height:"87vh"}),$(".inner-sub-sidebar").slimscroll({position:"left",height:"87vh"}),$(".rbd-summery-inner").slimscroll({position:"left",height:"85vh"}),$(window).scroll(function(){$(this).scrollTop()>100?$(".btn-scroll-top").addClass("showBtn"):$(".btn-scroll-top").removeClass("showBtn")}),$(window).scroll(function(){$(this).scrollTop()>100?$(".rbd-navbar").addClass("nav-active"):$(".rbd-navbar").removeClass("nav-active")});var s,o=0,l=$(".sub-navbar");$(window).scroll(function(){var i=$(window).scrollTop(),t=l.height();s<(o=i)&&i>t+t?l.addClass("scrollUp"):s>o&&!(i<=t)&&l.removeClass("scrollUp"),s=o}),$(".btn-scroll-top").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(".notifi-unread-btn").click(function(){var s=$(this);s.toggleClass("toggle-btn"),s.parent(".notification-item").toggleClass("is-unread")}),$(".btn-sidebar-toggle").on("click",function(){$(this).toggleClass("open-active"),$(".toggle-sidebar-aside, .article-single").toggleClass("nocolumn"),$(".ithoub-sub-sidebar, .devfor-content, .sub-navbar").toggleClass("left-0"),$(".ithoub-sidebar").toggleClass("mob-aside-toggle"),$(".ithoub-sidebar").toggleClass("toggle-right")})}),$(".commun-carousel").owlCarousel({rtl:!0,loop:!1,margin:15,nav:!1,dots:!1,lazyLoad:!0,responsive:{0:{items:1},600:{items:2},1200:{items:3}}}),$(".aside-carousel").owlCarousel({rtl:!0,loop:!1,margin:20,nav:!1,dots:!1,lazyLoad:!0,responsive:{0:{items:1},600:{items:1},1200:{items:1}}});