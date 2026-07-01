// MOBILE MENU TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#1e293b";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.gap = "15px";
    }

});

// CONTACT FORM

// SCROLL ANIMATION

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold: 0.2
}

);

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// ACTIVE NAV LINK

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

// HERO TYPING EFFECT

const title = document.querySelector(".hero-text h2");

const text =
"Front End Developer | Crafting Modern Web Apps";

let i = 0;

function typeEffect() {

    if (i < text.length) {

        title.textContent += text.charAt(i);

        i++;

        setTimeout(typeEffect, 70);

    }

}

title.textContent = "";

typeEffect();