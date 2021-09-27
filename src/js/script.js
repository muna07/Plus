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

    $(function() {
        $('ul.tabs__caption').on('click', 'li.tabs__elem:not(.tabs__elem_avtive)', function() {
            $(this)
              .addClass('tabs__elem_active').siblings().removeClass('tabs__elem_active')
              .closest('section.tabs').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
          });
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    })

    $('.modal-block__close').on(function() {
        $('.overlay, #consultation').fadeOut('slow');
    })

    $('.tabs__btn').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    })

    $('.modal-block__close').on('click', function() {
        $('.overlay, #order').fadeOut('slow');
    })

    $('input[name=userTel]').mask("+7 (999) 999-99-99");

  });