window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");

    hero.animate(
        [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 1200,
            easing: "ease-out",
            fill: "forwards"
        }
    );
});
