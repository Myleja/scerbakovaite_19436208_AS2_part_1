// DOM selector for dark mode toggle
const darkModeTgl = document.querySelector("#toggle");
// check if we have dark mode saved in local storage
let darkMode = localStorage.getItem("darkMode");
const applyDark = () => {
  document.body.classList.add("dark");
  darkModeTgl.checked = true;
  localStorage.setItem("darkMode", "on");
};
const darkModeOff = () => {
  // Remove dark class from the body
  document.body.classList.remove("dark");
  darkModeTgl.checked = false;
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "on") {
  applyDark();
}
darkModeTgl.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");
  // if it not current enabled, enable it
  if (darkMode !== "on") {
    applyDark();
    // if it has been enabled, turn it off
  } else {
    darkModeOff();
  }
});

//selector for text animation
// const text = document.querySelector(".intro-text");
// // split text in to characters
// const strText = text.textContent;
// const splitText = strText.split("");
// //remove h1 after span created
// text.textContent = "";
// // create a span
// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
// //create interval
// let char = 0;
// let timer = setInterval(onTick, 50);
// // function for text animation
// function onTick() {
//   const span = text.querySelectorAll("span")[char];
//   span.classList.add("fade");
//   char++;
//   //when the characters finished, stop runinng
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// }
// function complete() {
//   clearInterval(timer);
//   timer = null;
// }

const nav = document.querySelector(".links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   anime({
//     targets: ".logo",
//     translateX: [-400, 0],
//     easing: "easeOutExpo",
//     duration: 1500,
//     opacity: [0, 1],
//     delay: 1000,
//   });

//   anime({
//     targets: "a",
//     translateY: [-40, 0],
//     easing: "easeOutExpo",
//     duration: 1500,
//     opacity: [0, 1],
//     delay: function (el, i, l) {
//       return 2000 + 100 * i;
//     },
//   });

//   anime({
//     targets: "h1",
//     translateX: [-400, 0],
//     easing: "easeOutExpo",
//     duration: 1500,
//     opacity: [0, 1],
//     delay: 1200,
//   });

//   anime({
//     targets: "h2,p",
//     translateY: [-400, 0],
//     easing: "easeOutExpo",
//     duration: 1500,
//     opacity: [0, 1],
//     delay: 1500,
//   });

//   anime({
//     targets: "img",
//     translateX: [-400, 0],
//     easing: "easeOutExpo",
//     duration: 1500,
//     opacity: [0, 1],
//     delay: 1500,
//   });
// });
