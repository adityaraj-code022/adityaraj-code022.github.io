script.js
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ===== TYPING EFFECT ===== */
const text = "AI Enthusiast | NCC Commander | Artist";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typedText").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

/* ===== SCROLL REVEAL ===== */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
