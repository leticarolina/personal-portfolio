const heroSection = document.querySelector("#hero-section");
const translateIcon = document.querySelectorAll(".translate");
const downloadButton = document.querySelector(".button-cv");
const myName = document.querySelector(".name");
const body = document.querySelector("body");

const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
gsap.set(".hello, .name", { autoAlpha: 0, scale: 0.5 });

function runAnimation() {
  tl
    // name + hello pop
    // .from(".hello, .name", { scale: 0, duration: 0.9, ease: "bounce" })
    .to(".name", { autoAlpha: 1, scale: 1, duration: 0.8, ease: "bounce" })
    .to(".name", { autoAlpha: 1, scale: 1, duration: 0.8, ease: "bounce" })

    // blinking cursor
    // .fromTo(
    //   "#cursor",
    //   { autoAlpha: 0, x: -20 },
    //   { autoAlpha: 1, duration: 0.8, repeat: -1, ease: SteppedEase.config(1) },
    //   "<" // start at the same time as the name pop, keep blinking forever
    // )

    // type “Web3 Developer”
    // .to(".name", {
    //   text: { value: "Azevedo" },
    //   duration: 2.0,
    // })

    // label right after typing
    .add("afterType")

    // reveal flowers (left then right, staggered a bit)
    .fromTo(
      ".hero-flower-left",
      { autoAlpha: 0, x: "-24px" },
      { autoAlpha: 1, x: "0px", duration: 0.5 },
      "<"
    )
  // .fromTo(
  //   ".hero-flower-right",
  //   { autoAlpha: 0, x: "24px" },
  //   { autoAlpha: 1, x: "0px", duration: 0.8 },
  //   "afterType+=0.1"
  // );
}

// run on full load to avoid the flash
window.addEventListener("load", runAnimation);
// body.onload = runAnimation;

// Download CV
downloadButton?.addEventListener("click", () => {
  window.open("./pictures/resume.pdf", "_blank", "noopener,noreferrer");
});

// Translation toggle
translateIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = (document.documentElement.lang || "").toLowerCase();
    const isPT = lang.startsWith("pt");
    window.location.href = isPT ? "index.html" : "pthtml.html";
  });
});
