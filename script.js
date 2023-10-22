const menuIcon = document.querySelector("#mobile-menu-icon");
const menuLinks = document.querySelector(".menu-links");
const svg = document.querySelector("svg");

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

gsap.to(svg, { duration: 1, scale: -1, ease: "bounce" });
gsap.from(".section_texts", { duration: 1, scale: 0 });
