export default function showdown () {
    const showdownComponents = document.querySelectorAll("[data-showdown]");
    if (showdownComponents) {
        showdownComponents.forEach((showdownComponent) => {
            const showdownTrigger =  showdownComponent.querySelector("[data-trigger]");
            const showdownContent = showdownTrigger.nextElementSibling;

            Object.assign(showdownContent.style, {
                transition: "all .3s ease-in-out",
                visibility: "hidden",
                height: "0",
            });

            showdownTrigger.addEventListener("click", () => {
                showdownComponentState(showdownComponent, showdownContent);
            })
        })
    }
}

function showdownComponentState(showdownComponent, showdownContent) {
    if (showdownComponent.classList.contains("showdown")) {
        Object.assign(showdownContent.style, {
            height: "0",
            opacity: "0",
        });

        showdownComponent.classList.remove("showdown");

        setTimeout(() => {
            showdownContent.style.visibility = "hidden";
        }, 300);
    } else {
        Object.assign(showdownContent.style, {
            visibility: "visible",
            opacity: "1",
            height: showdownContent.scrollHeight + "px",

        });

        showdownComponent.classList.add("showdown");
    }
}