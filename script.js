const menuIcon = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#close-menu-icon");
const menuLinks = document.querySelector(".menu-links");
const svg = document.querySelector("svg");
const heroSection = document.querySelector("#hero-section");
const mobileMenuIcons = document.querySelector("#mobile-menu-icon");

menuIcon.addEventListener("click", () => {
  // gsap.to("#menu-icon", {
  //   x: -200,
  // });
  mobileMenuIcons.classList.add("hidden");
  toogle(menuIcon);
});

closeMenu.addEventListener("click", () => {
  menuLinks.classList.remove("open");
  mobileMenuIcons.classList.remove("hidden");
});
function toogle(menuIcon) {
  console.log("hi");
  menuLinks.classList.add("open");

  // heroSection.addEventListener("click", () => {
  //   menuLinks.classList.remove("open");
  // });
}

//screen size checkder
// function checkWindowSize() {
//   if (window.innerWidth < 500) {
//     console.log("small");
//   }
// }
// checkWindowSize();

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(svg, { duration: 1.5, scale: 0, ease: "bounce" })
  .from(".section_texts", {
    duration: 0.5,
    scale: 0,
  })
  .fromTo(
    ".icon-arrow",
    { y: "10", opacity: 0 },
    {
      y: 0,
      repeat: -1,
      opacity: 100,
      duration: 1,
    },
    "< 1 "
  );

// .from(".button", { duration: 1, scale: 0 });

// let cursor = gsap.to(".cursor", {
//   duration: 0.6,
//   opacity: 0,
//   ease: "power2.inOut",
//   repeat: -1,
// });

// var tl = new TimelineMax({}); //a loose paused tween});

// tl.fromTo(
//   ".description",
//   8,
//   {
//     width: "0",
//   },
//   {
//     width: "200" /* same as CSS .line-1 width */,
//     ease: SteppedEase.config(30),
//   },
//   0
// );

// tl.play();

// var tl = new TimelineMax({
//   paused:true
// });
