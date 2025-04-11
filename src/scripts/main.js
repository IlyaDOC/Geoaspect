import getBrowserName from './utils/checkbrowser.js';
import initMask from './modules/inputmask.js';
import initSlider from './modules/slider.js';
import initFancybox from './modules/fancybox.js';
import initMap from './modules/map.js';
import sharedModule from "./shared/shared.module.js";

document.addEventListener('DOMContentLoaded', (event) => {
    getBrowserName();
    initMask();
    initSlider();
    initFancybox();
    initMap();
    sharedModule();
});

// Если браузер определен, добавляем соответствующий класс к тегу html
const browser = getBrowserName();
if (browser) {
    document.documentElement.classList.add('browser-' + browser);
}
