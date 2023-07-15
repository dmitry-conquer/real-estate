import Swiper, { Navigation, Pagination } from "swiper";

export function initSliders() {
  if (document.querySelector(".slider")) {
    new Swiper(".slider", {
      modules: [Navigation, Pagination],
      wrapperClass: "slider-wrap",
      slideClass: "slide",
      slidesPerView: 3,
      speed: 800,
      slideToClickedSlide: true,
      loop: true,

      // Pagination
      pagination: {
        el: ".pagination",
        clickable: true,
      },

      // Navigation
      navigation: {
        prevEl: ".prev",
        nextEl: ".next",
      },

      // Breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 40,
        },
        450: {
          slidesPerView: 1.2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          spaceBetween: 75,
          centeredSlides: true,
        },
      },
    });
  }
}
