$(document).ready(function () {
    $('.slider__wrapper-1').slick(
        {
            slidesToShow: 2,
            arrows: true,
            infinite: true,
            nextArrow: '.btn--next-1',
            prevArrow: '.btn--prev-1',
        }
    );

    $('.slider-video').slick(
        {
            slidesToShow: 1,
            arrows: true,
            infinite: true,
            draggable: false,
            nextArrow: '.btn--next-2',
            prevArrow: '.btn--prev-2'
        }
    );
});