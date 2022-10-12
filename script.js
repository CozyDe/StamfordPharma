const navSlide = () => {
  const navBar = document.querySelector(".nav-bars");
  const hideNav = document.querySelector(".nav-links");

  navBar.addEventListener("click", () => {
    hideNav.classList.toggle("show");
  });
};

navSlide();

/* Auto-typing Effect */

var typed = new Typed(".auto-input", {
  strings: ["We are Reliable.", "We are Efficient.", "We are Customer-driven."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

/* Image Product Slider */

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

/* E-Commerce  JS */

const removeCartItem = document.querySelector(".active");
console.log(removeCartItem);

for (var i = 0; i < removeCartItem.length; i++) {
  var button = removeCartItem[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  });
}
