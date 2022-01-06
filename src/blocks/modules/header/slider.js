Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
}

import Swiper, {
    Navigation,
    Pagination,
} from 'swiper/core';

Swiper.use([Navigation, Pagination]);


document.addEventListener("DOMContentLoaded", () => {

    const headerSlider = new Swiper('.header-slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.header__slider-pag',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.header__slider-btn--next',
            prevEl: '.header__slider-btn--prev',
        },

        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' <span>-</span> ' + '<span class="' + totalClass + '"></span>';
        }

    });
});