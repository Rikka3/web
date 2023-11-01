document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    function checkSlide() {
        boxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - box.clientHeight / 2;

            if (boxTop < triggerPoint) {
                box.style.transform = "translateY(0)";
                box.style.opacity = 1;
                box.querySelector(".content").style.transform = "translateY(0)";
                box.querySelector(".content").style.opacity = 1;
            }
        });
    }

    window.addEventListener("scroll", checkSlide);
});
