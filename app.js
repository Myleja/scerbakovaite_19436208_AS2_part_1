// SELECTORS
const darkModeTgl = document.getElementById('toggle');

// EVENT LISTENERS
//event listener for dark mode toggle
darkModeTgl.addEventListener('change', dark);


//FUNCTIONS
//function for dark mode
function dark() {
  document.body.classList.toggle('dark');
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
