import "./assets/style.scss";
import { initSliders } from "./modules/sliders";

function app() {
  initSliders();
  const headerNav = document.getElementById("header-navigation");
  const links = headerNav.querySelectorAll("a");
  const header = document.querySelector("header");
  const headerInner = document.querySelector(".header-inner");

  function delegation(e) {
    if (e.target.closest("#close-menu")) {
      headerNav.classList.remove("max-lg:right-0");
      headerNav.classList.add("max-lg:right-[-100%]");
    }
    if (e.target.closest("#open-menu")) {
      headerNav.classList.remove("max-lg:right-[-100%]");
      headerNav.classList.add("max-lg:right-0");
    }
  }
  document.addEventListener("click", delegation);
  links.forEach(link => {
    link.addEventListener("click", () => {
      headerNav.classList.remove("max-lg:right-0");
      headerNav.classList.add("max-lg:right-[-100%]");
    });
  });

  function headerScroll() {
    const offset = 50;
    if (window.scrollY >= offset) {
      header.classList.add("bg-white", 'shadow-xl');
      headerInner.classList.add("min-h-[5rem]");
      links.forEach(link => {
        link.classList.add("text-black");
      });
    } else if (window.scrollY < offset) {
      links.forEach(link => {
        link.classList.remove("text-black");
      });
      header.classList.remove("bg-white", 'shadow-xl');
      headerInner.classList.remove("min-h-[5rem]");
    }
  }
  window.addEventListener("scroll", headerScroll);
}

document.addEventListener("DOMContentLoaded", app);
