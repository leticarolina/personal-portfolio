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

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(svg, { duration: 1.5, scale: 0, ease: "bounce" })
  .from(".hello, .name, .description", {
    duration: 0.5,
    scale: 0,
  })
  .fromTo(
    ".icon-arrow",
    { y: "10", opacity: 0 },
    { y: 0, repeat: -1, opacity: 100, duration: 0.9 },
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
