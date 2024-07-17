document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll(".hidden-reveal");

    function handleScroll() {
        revealElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight) {
                element.classList.add("visible-reveal");
            } else {
                element.classList.remove("visible-reveal");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para verificar la posición inicial por si algunos elementos ya son visibles
});
