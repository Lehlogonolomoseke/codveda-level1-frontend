const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const ctaNav = document.querySelector(".cta-nav");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  ctaNav.classList.toggle("active");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");

  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    ctaNav.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
    hamburger.setAttribute("aria-expanded", "false");
  }
});
