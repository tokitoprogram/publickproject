new Swiper('.card-wrapper', {
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    breakpoints: {
        0: {
            sliderPerView: 1
        },
        768: {
            sliderPerView: 2
        },
        1024: {
            sliderPerView: 3
        },
    }
  });