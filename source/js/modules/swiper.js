import Swiper, { Scrollbar, Controller, A11y, Thumbs, Navigation, EffectCoverflow, Pagination, EffectFade, Autoplay, Mousewheel, Keyboard, Lazy } from 'swiper';

Swiper.use([Scrollbar, Controller, A11y, Thumbs, EffectFade, EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel, Keyboard, Lazy]);

function updateSlider(slider) {

    if (slider != undefined) {
        if (Array.isArray(slider)) {

            if ((slider.length != 0) || (slider.length != undefined)) {

                for (let i = 0; i < slider.length; i++) {
                    slider[i].update();
                }
            }
        } else {
            slider.update();


        }

    }
}

let swiperHero;
if (document.querySelector('.hero__links')) {
    swiperHero = new Swiper('.hero__links', {

        freeMode: true,
        edgeSwipeThreshold: 300,
        simulateTouch: true,
        slidesPerView: 'auto',
        spaceBetween: 20,


    });
}
let swiperBig;
if (document.querySelector('.swiper-container--hero')) {
    swiperBig = new Swiper('.swiper-container--hero', {
        slidesPerView: 1,

        speed: 1500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });
}


let swiperNews;
if (document.querySelector('.swiper-container--news')) {
    swiperNews = new Swiper('.swiper-container--news', {
        slidesPerView: 1,

        speed: 1500,

        navigation: {
            nextEl: '.news__navigation .swiper-button-next',
            prevEl: '.news__navigation .swiper-button-prev',
        },


    });
}


let swiperCertificate;
if (document.querySelector('.swiper-container--certificate')) {
    swiperCertificate = new Swiper('.swiper-container--certificate', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        speed: 1500,
        // loop: true,
        navigation: {
            nextEl: ' .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
            // dynamicMainBullets: 2,
        },

    });
}

let swiperReview;
if (document.querySelector('.swiper-container--review')) {
    swiperReview = new Swiper('.swiper-container--review', {
        slidesPerView: 1,
        spaceBetween: 10,
        // slidesPerGroup: 1,
        autoHeight: true,
        speed: 1500,

        // loop: true,
        navigation: {
            nextEl: ' .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
            // dynamicMainBullets: 2,
        },
        breakpoints: {

            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 3,
                spaceBetween: 45
            }
        }

    });
}



window.addEventListener('resize', function() {
    swiperHero.update();
    swiperBig.update();
    swiperNews.update();
})