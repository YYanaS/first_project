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