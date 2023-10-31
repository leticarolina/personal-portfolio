const menuIcon = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#close-menu-icon");
const menuLinks = document.querySelector(".menu-links");
const svg = document.querySelector("svg");
const heroSection = document.querySelector("#hero-section");
const mobileMenuIcons = document.querySelector("#mobile-menu-icon");
const translateIcon = document.querySelectorAll(".translate");

//translate variables

const myName = document.querySelector(".name");
const description = document.querySelector(".description");
const myBio = document.querySelector(".bio");

// const translateButton = document.getElementsByClassName(".translate");

// GSAP
// GSAP
// GSAP

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .fromTo(svg, { scale: 0, ease: "bounce" }, { scale: 0.95, ease: "bounce" })
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
  .fromTo(
    ".icon-arrow",
    { y: "10", opacity: 0 },
    {
      y: 0,
      repeat: -1,
      opacity: 100,
      duration: 1,
    },
    "< 2.8 "
  );

// gsap for about me
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".my-picture-container", {
//   x: -800,
//   duration: 2,
//   ScrollTrigger: ".trigger",
// });

// gsap.from(".about-me-container", {
//   x: 1000,
//   duration: 2,
//   ScrollTrigger: ".trigger",
// });

// GSAP
// GSAP
// GSAP

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

// TRANSLATION
// TRANSLATION
//TRANSLATION
// let isPortuguese = false;
translateIcon.forEach((button) => {
  button.addEventListener("click", () => {
    if (myName.innerText === "Leti") {
      console.log("Portuguese");
      window.location.href = "index.html";
      // translateEnglish();
    } else {
      console.log("english");
      window.location.href = "pthtml.html";
      // translatePortuguese();
    }
    // isPortuguese = !isPortuguese;
    // } else {
    //   window.location.href = "index.html";
    //   isEnglish = true;
    // }
  });
});

function translateEnglish() {
  window.location.href = "index.html";
}

function translatePortuguese() {
  window.location.href = "pthtml.html";
}
// translateIcon.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (isEnglish) {
//       isEnglish = false;
//       translatePortuguese();
//     } else {
//       isEnglish = true;
//       translateEnglish();
//     }
//   });
// });

// function translatePortuguese() {
//   hello.innerHTML = dictionary.portuguese.hello;
//   description.innerHTML = dictionary.portuguese.description;
//   myBio.innerHTML = dictionary.portuguese.bio;
// }

// function translateEnglish() {
//   hello.innerHTML = dictionary.english.hello;
//   description.innerHTML = dictionary.english.description;
//   myBio.innerHTML = dictionary.english.bio;
// }

// const dictionary = {
//   portuguese: {
//     hello: "Olá, eu sou",
//     description: "Eu faço sites",
//     bio: "Meu nome é Letícia e atualmente estou em transição de carreira com dedicação aos estudos para me tornar desenvolvedora frontend. Desde os meus 20 anos, quando exercia a profissão de arquiteto, a combinação de design e tecnologia sempre me fascinou. No final de 2021 me aventurei na indústria de tecnologia e blockchain, a partir daí soube que era hora de uma mudança, e ao embarcar na transição para me tornar um desenvolvedor web, fiquei profundamente motivado pela oportunidade de manter uma visão criativa mentalidade, mas desta vez voltada para a construção de aplicações e experiências que sirvam a um propósito e resolvam problemas reais. Minha jornada é uma exploração contínua de criatividade, tecnologia e desenvolvimento orientado a propósitos. Estou realmente focado em concretizar minha visão e criar um mundo digital melhor. Quando não estou no computador, você pode me encontrar praticando esportes, passeando na praia ou pintando.",
//   },
//   english: {
//     hello: "Hello, I am",
//     description: "I make websites",
//     bio: "My name is Leticia, and I am currently in a career transition with a dedication to studying to become a frontend developer. Since my early 20s, when I was practicing as an architect, the combination of design and technology has always fascinated me. In the end of 2021 I ventured into the technology and blockchain industry, from that point I knew it was time for a change, and as I embarked on the transition to become a web developer, I became deeply driven by the opportunity to maintain a creative mindset, but this time directed towards building applications and experiences that serve a purpose and solve real problems. My journey is an ongoing exploration of creativity, technology, and purpose-driven development. I'm really focused on realizing my vision and creating a better digital world. When I’m not at the computer, you can find me doing sports, hanging out at the beach, or painting.",
//   },
// };
