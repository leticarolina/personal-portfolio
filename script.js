const menuIcon = document.querySelector("#mobile-menu-icon");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
  toogle();
});

function toogle() {
  console.log("hi");
  menuLinks.classList.toggle("open");
  menuLinks.addEventListener("click", () => {
    menuLinks.classList.remove("open");
  });
}
