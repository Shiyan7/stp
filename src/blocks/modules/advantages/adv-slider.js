import Swiper, {
    Navigation,
    Pagination
} from 'swiper/core';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const headerSlider = new Swiper('.advantages-slider', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
        el: '.advantages-slider__pag',
        type: 'bullets',
        clickable: true,
      },
    breakpoints: {
        769: {
            slidesPerGroup: 2,
        },
        1025: {
            slidesPerGroup: 3,
        },
    },

    // Navigation arrows
    navigation: {
        prevEl: '.advantages-slider__btn--prev',
        nextEl: '.advantages-slider__btn--next',
    },

});