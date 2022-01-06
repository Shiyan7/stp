Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
}

import Swiper, {
    Navigation,
    Pagination,
} from 'swiper/core';

Swiper.use([Navigation, Pagination]);


document.addEventListener("DOMContentLoaded", () => {

    const recProdSlider = new Swiper(".recommended-products-slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.products-slider__pag',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider__btn--next',
            prevEl: '.products-slider__btn--prev',
        },
        breakpoints: {
            577: {
                slidesPerView: 'auto',
            }
        }
    });
    
});