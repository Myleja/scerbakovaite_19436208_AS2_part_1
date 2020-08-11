// selector for dark mode toggle
const darkModeTgl = document.getElementById("toggle");
// add event listener for dark mode toggle
darkModeTgl.addEventListener("change", dark);
//function for dark mode
function dark() {
  document.body.classList.toggle("dark");
}
//selector for text animation
const text = document.querySelector(".intro-text")
// split text in to characters
const strText = text.textContent;
const splitText = strText.split("");
//remove h1 after span created
text.textContent = "";
// create a span
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
//create interval
let char = 0;
let timer = setInterval(onTick, 50);
// function for text animation
function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  //when the characters finished, stop runinng
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}

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
