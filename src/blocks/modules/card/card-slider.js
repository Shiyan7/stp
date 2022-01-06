Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
}

import Swiper, {
    Navigation,
    Pagination,
    Scrollbar,
} from 'swiper/core';
import fslightbox from "fslightbox";

Swiper.use([Navigation, Pagination, Scrollbar]);

document.addEventListener("DOMContentLoaded", () => {

    const cardSliderThumbs = new Swiper(".card-slider__nav", {
        slidesPerView: 'auto',
        spaceBetween: 4,
        watchSlidesVisibility: true,
	    watchSlidesProgress: true,
    });

    
    const cardSliderMain = new Swiper(".card-slider__main", {
        spaceBetween: 4,
        scrollbar: {
            el: '.card-slider__scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.card-slider__btn--next',
            prevEl: '.card-slider__btn--prev',
        },
        thumbs: {
            swiper: cardSliderThumbs,
        }
    });
});