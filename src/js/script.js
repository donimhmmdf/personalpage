//
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#to-top");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  darkToggle.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
});

const observerHero = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-hero");
      entry.target.classList.remove("hidden-hero");
    } else {
      entry.target.classList.remove("show-hero");
    }
  });
});
const observerPorto = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-porto");
      entry.target.classList.remove("hidden-porto");
    } else {
      entry.target.classList.remove("show-porto");
      entry.target.classList.add("hidden-porto");
    }
  });
});
const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-about");
      entry.target.classList.remove("hidden-about");
    } else {
      entry.target.classList.remove("show-about");
      entry.target.classList.add("hidden-about");
    }
  });
});
const observerWork = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-work");
      entry.target.classList.remove("hidden-work");
    } else {
      entry.target.classList.remove("show-work");
      entry.target.classList.add("hidden-work");
    }
  });
});
const hiddenHero = document.querySelectorAll(".hidden-hero");
const hiddenPorto = document.querySelectorAll(".hidden-porto");
const hiddenAbout = document.querySelectorAll(".hidden-about");
const hiddenWork = document.querySelectorAll(".hidden-work");
hiddenHero.forEach((el) => observerHero.observe(el));
hiddenPorto.forEach((el) => observerPorto.observe(el));
hiddenAbout.forEach((el) => observerAbout.observe(el));
hiddenWork.forEach((el) => observerWork.observe(el));
