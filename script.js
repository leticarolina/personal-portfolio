const menuIcon = document.querySelector("#mobile-menu-icon");
const menuLinks = document.querySelector(".menu-links");
const svg = document.querySelector("svg");
// const iMakeWebsites = document.querySelector(".description");
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

//screen size checkder
// function checkWindowSize() {
//   if (window.innerWidth < 500) {
//     console.log("small");
//   }
// }
// checkWindowSize();

gsap.from(svg, { duration: 1, scale: -1, ease: "bounce" });
gsap.from(".hello, .name", { duration: 0.5, scale: 0, delay: 0.5 });

let cursor = gsap.to(".cursor", {
  duration: 0.6,
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});
// var tl = new TimelineMax({
//   paused:true
// });
