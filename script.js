const hamburgerEl = document.querySelector(".hamburger");
const linksEl = document.querySelector(".links");
let crossMark = false;

hamburgerEl.addEventListener("click", function () {
  if (crossMark) {
    hamburgerEl.src = "Assets/Hamburger Menu.svg";
    linksEl.style.display = "none";
  } else {
    linksEl.style.display = "block";
    hamburgerEl.src = "Assets/cross.svg";
  }
  crossMark = !crossMark;
});
