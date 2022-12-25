var swiper = new Swiper(".works-section-mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
      loopFillGroupWithBlank: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
      loopFillGroupWithBlank: true,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
      centeredSlides: true,
      loop: true,
      loopFillGroupWithBlank: true,
    },
  },
});
console.log("hi");
const toTopArrow = document.getElementById("to-top-btn-container");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTopArrow.style.display = "block";
  } else {
    toTopArrow.style.display = "none";
  }
});

const fact1 = document.getElementById("fact-1");
const fact2 = document.getElementById("fact-2");
const fact3 = document.getElementById("fact-3");

const counter = (element, limit) => {
  let maxLimit = 0;
  setInterval(() => {
    if (maxLimit > limit) {
      clearInterval();
      return;
    }
    element.innerText = maxLimit++;
  }, 1);
};
counter(fact1, 199);
counter(fact2, 575);
counter(fact3, 69);
