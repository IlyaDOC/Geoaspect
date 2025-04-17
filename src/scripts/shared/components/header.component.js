export default function header() {
    const header = document.getElementById("header");
    if (header) {
        copyContactsInMobileWidth(header);
        headerOnScroll(header);
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







