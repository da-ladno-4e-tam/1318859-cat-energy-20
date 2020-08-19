var orderButtons = document.querySelectorAll(".button--order-js");
var showmoreButton = document.querySelector(".button--showmore-js");

for (var i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
  });
}

showmoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
});
