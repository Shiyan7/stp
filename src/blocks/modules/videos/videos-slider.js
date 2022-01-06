Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
}

import Swiper, {
    Navigation,
    Pagination,
} from 'swiper/core';

Swiper.use([Navigation, Pagination]);

document.addEventListener("DOMContentLoaded", () => {

    const videosSlider = new Swiper('.videos-slider', {
        slidesPerView: 1,
        spaceBetween: 25,
        pagination: {
            el: '.videos-slider__pag',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.videos-slider__btn--next',
            prevEl: '.videos-slider__btn--prev',
        },

        breakpoints: {
            769: {
                slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
          }
    });
});