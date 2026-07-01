t.js
/* ===== YEAR ===== */
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

/* ===== HAMBURGER ===== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ===== TYPING EFFECT ===== */

const typedText = document.getElementById("typedText");

const words = [

"AI Enthusiast",

"Air NCC Commander",

"Developer",

"Cybersecurity Learner",

"Artist"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

if(!typedText) return;

const current = words[wordIndex];

typedText.textContent = current.substring(0,charIndex);

if(!deleting){

charIndex++;

if(charIndex>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?50:100);

}

type();

/* ===== SCROLL REVEAL ===== */

function reveal(){

document.querySelectorAll(".reveal").forEach((el)=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight-120){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
