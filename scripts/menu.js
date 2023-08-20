const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    const isVisible = menu.classList.contains("visible");

    if (isVisible) {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
    } else {
        menu.classList.add("visible");
        menu.classList.remove("hidden");
    }
});