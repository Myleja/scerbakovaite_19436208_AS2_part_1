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

const nav = document.querySelector(".links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("nav-close");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("nav-close");
  });
});

const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");

previews.forEach((preview) => {
  //add a click event to all previews
  preview.addEventListener("click", () => {
    // add class open when preview image clicked
    modal.classList.add("open");
    //main image animation
    original.classList.add("open");
    //dynamic image and text change
    //access the information from data tags
    //console.log(originalSrc);
    const originalSrc = preview.getAttribute("data-original");
    //console.log(originalSrc);
    //set the image source
    original.src = originalSrc;
    //acces alt tag text
    const altText = preview.alt;
    //add it to the caption
    imgText.textContent = altText;
  });
});
//close modal
modal.addEventListener("click", (e) => {
  //check what we click on
  //console.log(e);
  //when we click on modal
  if (e.target.classList.contains("modal")) {
    //remove modal.open class
    modal.classList.remove("open");
    //remove main image animation
    original.classList.remove("open");
  }
});

//selector for text animation
const text = document.querySelector(".intro-text");
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
