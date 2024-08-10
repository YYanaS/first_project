const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 0,
    },
    slidesPerView: 5,
    spaceBetween: 40,
    speed: 3000,

    breakpoints: {

        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },

        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});


const swiperThumbs = new Swiper ('.thumbs__slider', {
    loop: true,

    spaceBetween: 40,
    slidesPerView: 4,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const swiper1 = new Swiper ('.main__slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: swiperThumbs,
    }

});

