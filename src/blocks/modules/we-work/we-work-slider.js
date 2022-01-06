import swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", () => {
    const weWorkSlider = document.querySelector('.we-work-slider');

    if(weWorkSlider) {
        let mySwiper;
    
        const initializeSlider = () => {
            mySwiper = new swiper(weWorkSlider, {
                slidesPerView: 'auto',
                spaceBetween: 50,
                pagination: {
                    el: '.we-work-slider__pag',
                    type: 'bullets',
                    clickable: true,
                },
        
                // Navigation arrows
                navigation: {
                    prevEl: '.we-work-slider__btn--prev',
                    nextEl: '.we-work-slider__btn--next',
                },
            });
        
            weWorkSlider.dataset.mobile = 'true';
        }
        
        if (window.innerWidth <= 768) {
            initializeSlider();
        }
        
        const mobileSlider = () => {
            if (window.innerWidth <= 768 && weWorkSlider.dataset.mobile == 'false') {
                initializeSlider();
            }
        
            if (window.innerWidth > 768) {
                weWorkSlider.dataset.mobile = 'false';
                if (weWorkSlider.classList.contains('swiper-container-initialized')) {
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