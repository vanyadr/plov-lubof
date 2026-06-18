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
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1401: {
                slidesPerView: 4.5,
                spaceBetween: 24,
            },
        },
        loop: true,
        centeredSlides: true,
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
const toggleBurger = () => {
   const btn = document.querySelector(".header__burger");
   const menu = document.querySelector(".burger");
   const closer = document.querySelector(".header__closer");

   btn.addEventListener("click", () => {
      menu.classList.add("active");
      btn.classList.add("hidden");
      closer.classList.add("active");
   });
   closer.addEventListener("click", () => {
      menu.classList.remove("active");
      btn.classList.remove("hidden");
      closer.classList.remove("active");
   });
};

document.addEventListener("DOMContentLoaded", () => {
   changeHeaderOnScroll();
   toggleAccordion();
   initSlider();
   toggleBurger();
});
