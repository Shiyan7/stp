Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
}

import Swiper, {
    Navigation,
} from 'swiper/core';

Swiper.use([Navigation]);


document.addEventListener("DOMContentLoaded", () => {

    const prodSlider = new Swiper('.producers-slider', {
        slidesPerView: 1,
        lazy: true,
        preloadImages: true,
        navigation: {
            prevEl: '.producers-slider__btn--prev',
            nextEl: '.producers-slider__btn--next',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1025: {
                slidesPerView: 6,
                spaceBetween: 40
            }
        },
    });
});