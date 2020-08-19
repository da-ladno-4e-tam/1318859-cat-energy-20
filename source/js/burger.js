var menuButton = document.querySelector(".nav__toggle");
var menu = document.querySelector(".nav__list");

window.onload = function () {
  menuButton.classList.remove("no-js");
  if (window.innerWidth < 768) {
    menu.classList.remove("no-js");
  }
};
if (window.innerWidth < 768) {
  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("toggle--open");
    menuButton.classList.toggle("toggle--close");
    menu.classList.toggle("no-js");
  });
} else {
  menuButton.classList.add("toggle--open");
  menuButton.classList.remove("toggle--close");
  menu.classList.remove("hidden");
}
