console.log("hi");
const toTopArrow = document.getElementById("to-top-btn-container");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTopArrow.style.display = "block";
  } else {
    toTopArrow.style.display = "none";
  }
});
