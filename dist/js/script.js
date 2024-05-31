// Navbar-fixed
const header = document.querySelector("header");
const fixedNav = header.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY > fixedNav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
});

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
