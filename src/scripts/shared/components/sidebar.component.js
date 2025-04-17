import bodyOverflow from '../features/body-overflow.js';

export default function sidebarComponent() {
    const sidebar = document.getElementById("sidebar");
    createSidebar(sidebar);
    showSidebar(sidebar);
    openSubmenu(sidebar);
}

function createSidebar(sidebar) {
    copySearchFromHeader(sidebar);
    copyNavFromHeader(sidebar);
}

function copySearchFromHeader(sidebar) {
    const headerSearch = document.querySelector(".header__search form");
    const sidebarSearch = sidebar.querySelector(".sidebar__search");
    if (headerSearch && sidebarSearch) {
        sidebarSearch.append(headerSearch.cloneNode(true));
    }
}

function copyNavFromHeader(sidebar) {
    const headerNav = document.querySelector(".header__inner-bottom .header__nav nav");
    const sidebarNav = sidebar.querySelector(".sidebar__nav");
    if (headerNav && sidebarNav) {
        sidebarNav.append(headerNav.cloneNode(true));
    }


}

function showSidebar(sidebar) {
    const sidebarTrigger = document.getElementById("sidebarTrigger");

    if (sidebarTrigger) {
        sidebarTrigger.addEventListener("click", () => {
            sidebarTrigger.classList.toggle("show-sidebar");
            sidebar.classList.toggle("show");

            if (sidebar.classList.contains("show")) {
                bodyOverflow.hide();
            } else {
                bodyOverflow.show();
            }
        });
    }
}

function openSubmenu(sidebar) {
    const navLinks = sidebar.querySelectorAll(".with-submenu");

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