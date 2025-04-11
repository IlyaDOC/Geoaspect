import bodyOverflow from '../features/body-overflow.js';

export default function header() {
    const header = document.getElementById("header");
    if (header) {
        copyContactsInMobileWidth(header);
        headerOnScroll(header);
        openMobileMenu(header);
        openSubmenu(header);
    }
}

function copyContactsInMobileWidth(header) {
    const headerPhone = header.querySelector(".header__phone");
    const headerMail = header.querySelector(".header__mail");
    const headerContactsJs = header.querySelector(".header__contacts-js");
    if (headerContactsJs) {
        headerContactsJs.append(headerMail.cloneNode(true));
        headerContactsJs.append(headerPhone.cloneNode(true));
    }

}

function headerOnScroll(header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("on-scroll");
        } else {
            header.classList.remove("on-scroll");
        }
    });
}

function openMobileMenu(header) {
    const headerMenuBtn = document.getElementById("headerMenuBtn");

    if (headerMenuBtn) {
        headerMenuBtn.addEventListener("click", () => {
            header.classList.toggle("show-menu");

            if (header.classList.contains("show-menu")) {
                bodyOverflow.hide();
            } else {
                bodyOverflow.show();
            }
        });
    }
}

function openSubmenu(header) {
    const navLinks = header.querySelectorAll(".with-submenu");

    if (navLinks) {
        navLinks.forEach(navLink => {
            const arrow = navLink.querySelector(".arrow");
            const subMenu = navLink.querySelector(".nav-item__submenu");
            if (arrow) {
                arrow.addEventListener("click", () => {
                    navLink.classList.toggle("show-submenu");
                })
            }
        });
    }
}


