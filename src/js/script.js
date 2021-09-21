$(document).ready(function(){
    $('.carousel__inner').slick({
        infinity: true,
        speed: 700,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="carousel__prev slick-prev"><img src="icons/carousel/chevron left solid.svg"></button>',
        nextArrow: '<button type="button" class="carousel__next slick-next"><img src="icons/carousel/chevron right solid.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                  arrows: false,
              }
            },
        ]
    });
  });