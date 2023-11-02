const menuIcon = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#close-menu-icon");
const menuLinks = document.querySelector(".menu-links");
const svg = document.querySelector("svg");
const heroSection = document.querySelector("#hero-section");
const mobileMenuIcons = document.querySelector("#mobile-menu-icon");
const translateIcon = document.querySelectorAll(".translate");
const downloadButton = document.querySelector(".button");
const myName = document.querySelector(".name");

// GSAP
// GSAP
// GSAP

const timeline = gsap.timeline({ defaults: { duration: 1 } });
function runAnimation() {
  timeline
    .fromTo(svg, { scale: 0, ease: "bounce" }, { scale: 0.9, ease: "bounce" })
    .from(".hello, .name", {
      duration: 0.5,
      scale: 0,
    })
    .fromTo(
      "#cursor",
      { autoAlpha: 0, x: -12 }, // x: -10 to make cursor closer to the text
      { autoAlpha: 1, duration: 0.6, repeat: -1, ease: SteppedEase.config(1) }
    )
    .to(
      ".description",
      {
        text: {
          value: "I make websites",
        },
        duration: 2.3,
      },
      " < 1"
    )
    .from(
      ".icon-arrow",
      { opacity: 0 },

      "< 2.8 "
    );
}
runAnimation();

// gsap for about me
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".my-picture-container", {
//   x: -800,
//   duration: 2,
//   ScrollTrigger: ".my-picture-container",
// });

// gsap.from(".about-me-container", {
//   x: 1000,
//   duration: 2,
//   ScrollTrigger: "#about",
// });

// JS
// JS
// JS

menuIcon.addEventListener("click", () => {
  mobileMenuIcons.classList.add("hidden");
  toogle(menuIcon);
});

closeMenu.addEventListener("click", () => {
  menuLinks.classList.remove("open");

  mobileMenuIcons.classList.remove("hidden");
});

function toogle(menuIcon) {
  menuLinks.classList.add("open");
  gsap.from(menuLinks, { x: 200, duration: 0.8 });
}
downloadButton.addEventListener("click", () => {
  window.open("./pictures/leticia-cv.pdf");
});

// TRANSLATION

translateIcon.forEach((button) => {
  button.addEventListener("click", () => {
    if (myName.innerText === "Letícia") {
      window.location.href = "index.html";
      runAnimation();
    } else {
      window.location.href = "pthtml.html";
      runAnimation();
    }
  });
});
