document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");
    });
}

// ACTIVE NAV
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if(window.scrollY >= top){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

    // progress bar
    const bar = document.getElementById("progress-bar");
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    if(bar) bar.style.width = progress + "%";

    // top button
    const topBtn = document.getElementById("topBtn");
    if(topBtn){
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

// BACK TO TOP
const topBtn = document.getElementById("topBtn");
if(topBtn){
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top:0, behavior:"smooth" });
    });
}

// THEME
const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeBtn.textContent =
        document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });
}

// TYPE EFFECT
const title = document.querySelector(".hero-text h2");

if(title){
    const text = "Front End Developer | Crafting Modern Web Apps";
    let i = 0;
    title.textContent = "";

    function type(){
        if(i < text.length){
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }
    type();
}

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

if(glow){
    document.addEventListener("mousemove", e => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

// LOADER
const loader = document.getElementById("loader");

if(loader){
    window.addEventListener("load", () => {
        setTimeout(() => loader.style.display = "none", 800);
    });
}

});
