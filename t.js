script.js
// ===== Typing Effect =====
const words = ["AI Enthusiast", "Artist", "NCC Air Wing Commander", "Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextEl = document.getElementById("typedText");

function typeEffect(){
    if(!typedTextEl) return;

    const currentWord = words[wordIndex];

    if(isDeleting){
        typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length){
        speed = 1500;
        isDeleting = true;
    } else if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if(hamburger && navLinks){
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// ===== Scroll Reveal =====
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ===== Footer Year =====
const yearEl = document.getElementById("year");
if(yearEl){
    yearEl.textContent = new Date().getFullYear();
}
