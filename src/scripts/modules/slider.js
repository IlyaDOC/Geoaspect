import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar } from 'swiper/modules';

export default function initSlider() {
    const mainProjectsSlider = new Swiper(".main-projects__slider.swiper", {
        modules: [Navigation],
        slidesPerView: 1,
        navigation: {
            prevEl: ".main-projects__slider .button-prev",
            nextEl: ".main-projects__slider .button-next",
        },
        loop: true,
    })
}
