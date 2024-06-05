// Navbar-fixed
const header = document.querySelector("header");
const fixedNav = header.offsetTop;
// back to top menu
const toTop = document.querySelector("#to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > fixedNav) {
    header.classList.add("nav-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("nav-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
});

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar humburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToglle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToglle.addEventListener("click", function () {
  if (darkToglle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan toggle sesuai dengan mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToglle.checked = true;
} else {
  darkToglle.checked = false;
}
