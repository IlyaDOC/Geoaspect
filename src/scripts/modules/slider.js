import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar } from "swiper/modules";

export default function initSlider() {
    const mainProjectsSlider = new Swiper(".main-projects__slider.swiper", {
        modules: [Navigation],
        slidesPerView: 1,
        navigation: {
            prevEl: ".main-projects__slider .button-prev",
            nextEl: ".main-projects__slider .button-next",
        },
        loop: true,
    });

    const mainLicensesSlider = new Swiper(".main-licenses .swiper", {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween: 16,
        navigation: {
            prevEl: ".main-licenses .button-prev",
            nextEl: ".main-licenses .button-next",
        },
        breakpoints: {
            744: {
                slidesPerView: 2.9,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3.8,
                spaceBetween: 50,
            },
            1920: {
                slidesPerView: 5.3,
                spaceBetween: 72,
            },
        },
        on: {
            slideChange: sliderButtonState,
            init: sliderButtonState,
        },
    });
}

function sliderButtonState() {
    const prevArrow = document.querySelector(".main-licenses .button-prev");
    const nextArrow = document.querySelector(".main-licenses .button-next");

    if (this.isEnd) {
        nextArrow.classList.add("disabled");
    } else {
        nextArrow.classList.remove("disabled");
    }

    if (this.activeIndex === 0) {
        prevArrow.classList.add("disabled");
    } else {
        prevArrow.classList.remove("disabled");
    }
}
