$(function() {
    $('.carousel__slider').slick({
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/chevron\ left\ solid.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/chevron\ right\ solid.svg"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(className) {
        $(className).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.card__content').eq(i).toggleClass('card__content_active');
                $('.card__list').eq(i).toggleClass('card__list_active');
            })
        })
    }

    toggleSlide('.card__link');
    toggleSlide('.card__list-link');
})