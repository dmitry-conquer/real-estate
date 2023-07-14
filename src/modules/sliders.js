import Swiper, { Navigation, Pagination } from "swiper";

export function initSliders() {
  if (document.querySelector(".slider")) {
    new Swiper(".slider", {
      modules: [Navigation, Pagination],
      wrapperClass: "slider-wrap",
      slideClass: "slide",
      slidesPerView: 3,
      spaceBetween: 75,
      speed: 800,
      observer: true,
      observeParents: true,
      loop: true,
      centeredSlides: true,

      // Pagination
      // pagination: {
      //    el: '.slider-default__pagination',
      //    clickable: true,
      // },

      // Navigation
      // navigation: {
      //    prevEl: '.slider-default__button_prev',
      //    nextEl: '.slider-default__button_next',
      // },

      // Breakpoints
      /*
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
         */
    });
  }
}
