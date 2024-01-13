$(document).ready(function(){
    $('.reasonList').slick({
        spaceBetween: 100,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<iconify-icon icon="formkit:arrowleft" class="arrowLeft"></iconify-icon>',
        nextArrow: '<iconify-icon icon="formkit:arrowright" class="arrowRight"></iconify-icon>',
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 708,
              settings: {
                slidesToShow: 1,
                spaceBetween: 1000
              }
            }
          ]
    });
});