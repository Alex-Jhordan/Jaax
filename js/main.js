let hamburger = document.querySelector(".nav__hamburger");
let menu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("nav__hamburger--active");
    menu.classList.toggle("nav__menu--active");
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("nav__hamburger--active");
    menu.classList.remove("nav__menu--active");
}))