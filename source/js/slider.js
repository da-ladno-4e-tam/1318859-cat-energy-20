var imageBefore = document.querySelector(".slider__image--before");
var imageAfter = document.querySelector(".slider__image--after");
var buttonBefore = document.querySelector(".slider__button--before");
var buttonAfter = document.querySelector(".slider__button--after");
var sliderToggle = document.querySelector(".slider__toggle");

buttonBefore.addEventListener("click", function () {
  imageBefore.classList.remove("hidden");
  imageBefore.classList.remove("stash");
  imageBefore.classList.add("shown");
  imageAfter.classList.add("hidden");
  imageAfter.classList.add("stash");
  imageAfter.classList.remove("shown");
  sliderToggle.classList.remove("slider__toggle--right");
  sliderToggle.classList.add("slider__toggle--left");
});

buttonAfter.addEventListener("click", function () {
  imageAfter.classList.remove("hidden");
  imageAfter.classList.remove("stash");
  imageAfter.classList.add("shown");
  imageBefore.classList.add("hidden");
  imageBefore.classList.add("stash");
  imageBefore.classList.remove("shown");
  sliderToggle.classList.remove("slider__toggle--left");
  sliderToggle.classList.add("slider__toggle--right");
});
