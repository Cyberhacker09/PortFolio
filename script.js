// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#333";
    } else {
        header.style.background = "transparent";
    }
});

// Animate skill bars on scroll
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.skill;
        });
    }
});
