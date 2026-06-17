import Swiper from "../assets/libraries/swiper/swiper.min.mjs";
import Navigation from "../assets/libraries/swiper/modules/navigation.min.mjs";
import Autoplay from "../assets/libraries/swiper/modules/autoplay.min.mjs";

const toggleBurger = () => {
   const btn = document.querySelector("#open-burger");
   const menu = document.querySelector("#burger");
   const closer = document.querySelector("#close-burger");

   btn.addEventListener("click", () => {
      menu.classList.add("active");
   });
   closer.addEventListener("click", () => {
      menu.classList.remove("active");
   });
   menu.addEventListener("click", (e) => {
      if (e.target == menu) menu.classList.remove("active");
   });
};
const changeHeaderOnScroll = () => {
   const header = document.querySelector("header");

   document.addEventListener("scroll", () => {
      if (window.pageYOffset > document.documentElement.clientHeight - header.offsetHeight) {
         header.classList.add("scrolled");
      } else {
         header.classList.remove("scrolled");
      }
   });
};
const initSlider = () => {
   const swiper = new Swiper(".swiper", {
      modules: [Navigation, Autoplay],
      slidesPerView: 2,
      speed: 400,
      spaceBetween: 16,
      autoplay: {
         delay: 3000,
         pauseOnMouseEnter: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         769: {
            slidesPerView: 3.3,
            spaceBetween: 16,
         },
         1025: {
            slidesPerView: 4,
            spaceBetween: 24,
         },
         1801: {
            slidesPerView: 5.5,
            spaceBetween: 24,
         },
      },
      loop: true,
      centeredSlides: true,
   });
};
const scrollBg = () => {
   const bg = document.querySelector("#screen-bg");
   bg.style.top = 0;

   document.addEventListener("scroll", () => {
      if (window.pageYOffset <= document.documentElement.clientHeight) {
         bg.style.top = `${window.pageYOffset}px`;
      }
   });
};
const appearCardImg = () => {
   const card = document.querySelector("#card");
   const cardImg = document.querySelector("#card-img");

   document.addEventListener("scroll", () => {
      if (window.pageYOffset - card.offsetTop > card.offsetHeight - card.offsetHeight * 1.1) {
         cardImg.classList.add("active");
      }
   });
};

document.addEventListener("DOMContentLoaded", () => {
   changeHeaderOnScroll();
   toggleBurger();
   initSlider();
   scrollBg();
   appearCardImg();
});
