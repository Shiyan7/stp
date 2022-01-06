import { tabs } from "../../components/tabs";

Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
}

import Swiper, {
    Navigation,
    Pagination,
} from 'swiper/core';

Swiper.use([Navigation, Pagination]);


document.addEventListener("DOMContentLoaded", () => {
    const productsSliders = document.querySelectorAll(".products-slider");

    for(let i = 0; i < productsSliders.length; i++) {
        let slider = productsSliders[i];

        const productsSlider = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: '.products-slider__pag',
                type: 'bullets',
                clickable: true,
            },
            // Navigation arrows
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

        tabs(productsSlider);
    }
});