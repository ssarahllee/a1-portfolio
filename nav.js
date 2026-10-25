// add a white background to the nav once the page has scrolled
var csNav = document.querySelector(".cs-nav");

function updateNav() {
  csNav.classList.toggle("scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", updateNav);
updateNav();
