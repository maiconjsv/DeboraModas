const swiper = new Swiper(".swiper", {
    slidesPerView: 1,         // padrão (celular)
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {                  // tablet
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {                 // desktop
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });