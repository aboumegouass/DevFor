$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    nav:false,
    dots: false,
    lazyLoad:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        }
    }
});
