var menuButton = document.querySelector(".nav__toggle");
var menu = document.querySelector(".nav__list");

if (document.documentElement.clientWidth < 768) {
  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("toggle--open");
    menuButton.classList.toggle("toggle--close");
    menu.classList.toggle("nav__list--open");
  });
} else {
  menuButton.classList.add("toggle--open");
  menuButton.classList.remove("toggle--close");
  menu.classList.add("nav__list--open");
}
