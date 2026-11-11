// INIT FUNCTION
function init() {
    console.log("Website Loaded Successfully!");

    // Highlight active menu
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

// CALL INIT
window.onload = init;