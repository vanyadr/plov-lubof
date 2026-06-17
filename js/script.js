import Swiper from "../assets/libraries/swiper/swiper.min.mjs";
import Navigation from "../assets/libraries/swiper/modules/navigation.min.mjs";
import Autoplay from "../assets/libraries/swiper/modules/autoplay.min.mjs";

const toggleAccordion = function () {
    const items = document.querySelectorAll('.accordion-item');

    if (items.length > 0 && window.innerWidth > 1024) {
        items.forEach((item) => {
            const btn = item.querySelector('.accordion-header');

            const closedHeight = btn.scrollHeight;
            item.style.height = closedHeight + 'px';

            item.addEventListener('mouseenter', function () {
                const correctContent = this.querySelector('.accordion-content');
                const openedHeight = correctContent.scrollHeight;

                this.classList.add('opened');
                this.style.height = openedHeight + 'px';
            });

            item.addEventListener('mouseleave', function () {
                const correctHeader = this.querySelector('.accordion-header');
                const closedHeight = correctHeader.scrollHeight;

                this.classList.remove('opened');
                this.style.height = closedHeight + 'px';
            });
        });
    }
};
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
      if (window.pageYOffset > 100) {
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
   toggleAccordion();
   toggleBurger();
   initSlider();
   scrollBg();
   appearCardImg();
});
