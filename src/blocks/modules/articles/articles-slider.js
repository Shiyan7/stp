import swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", () => {
    const articlesSlider = document.querySelector('.articles-slider');

    let mySwiper;
    
    const initializeSlider = () => {
        mySwiper = new swiper(articlesSlider, {
            slidesPerView: 'auto',
        });
    
        articlesSlider.dataset.mobile = 'true';
    }
    
    if (window.innerWidth <= 1024) {
        initializeSlider();
    }
    
    const mobileSlider = () => {
        if (window.innerWidth <= 1024 && articlesSlider.dataset.mobile == 'false') {
            initializeSlider();
        }
    
        if (window.innerWidth > 1024) {
            articlesSlider.dataset.mobile = 'false';
            if (articlesSlider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }
    }
    mobileSlider();
    
    window.addEventListener('resize', () => {
        mobileSlider();
    });
});