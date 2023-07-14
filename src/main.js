import "./assets/style.css";
import { initSliders } from "./modules/sliders";

function app() {
   initSliders()
  const headerNav = document.getElementById("header-navigation");
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
}

document.addEventListener("DOMContentLoaded", app);
