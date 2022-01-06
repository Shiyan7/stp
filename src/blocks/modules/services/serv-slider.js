import swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", () => {
    const servicesSlider = document.querySelector('.services-slider');

    if(servicesSlider) {
        let mySwiper;
    
        const initializeSlider = () => {
            mySwiper = new swiper(servicesSlider, {
                slidesPerView: 'auto',
                spaceBetween: 10,
                pagination: {
                    el: '.services-slider__pag',
                    type: 'bullets',
                    clickable: true,
                },
        
                // Navigation arrows
                navigation: {
                    prevEl: '.services-slider__btn--prev',
                    nextEl: '.services-slider__btn--next',
                },
            });
        
            servicesSlider.dataset.mobile = 'true';
        }
        
        if (window.innerWidth <= 576) {
            initializeSlider();
        }
        
        const mobileSlider = () => {
            if (window.innerWidth <= 576 && servicesSlider.dataset.mobile == 'false') {
                initializeSlider();
            }
        
            if (window.innerWidth > 576) {
                servicesSlider.dataset.mobile = 'false';
                if (servicesSlider.classList.contains('swiper-container-initialized')) {
                    mySwiper.destroy();
                }
            }
        }
        mobileSlider();
        
        window.addEventListener('resize', () => {
            mobileSlider();
        });
    }
});