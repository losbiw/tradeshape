const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    const isVisible = menu.classList.contains("visible");

    if (isVisible) {
        menu.classList.add("hidden");
        menu.classList.remove("visible");

        setTimeout(() => {
            menu.classList.remove("hidden");
        }, 300)
    } else {
        menu.classList.add("visible");
        menu.classList.remove("hidden");
    }
});