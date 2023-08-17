const solutionItems = document.querySelectorAll(".item");

for (const item of solutionItems) {
    const showButton = item.querySelector(".show");
    const description = item.querySelector(".description");

    showButton.addEventListener("click", () => {
        if (description.classList.contains("visible")) {
            description.classList.remove("visible");
            showButton.innerText = "Read more";
        } else {
            description.classList.add("visible")
            showButton.innerText = "Hide";
        }
    });
}