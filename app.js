//DARK MODE TOGGLE
//variables
const darkModeTgl = document.querySelector("#toggle");
// check if we have dark mode saved in local storage
let darkMode = localStorage.getItem("darkMode");
//apply dark mode
const applyDark = () => {
  document.body.classList.add("dark");
  darkModeTgl.checked = true;
  localStorage.setItem("darkMode", "on");
};

//remove dark mode
const darkModeOff = () => {
  // Remove dark class
  document.body.classList.remove("dark");
  darkModeTgl.checked = false;
  //Update ddark mode in localStorage
  localStorage.setItem("darkMode", null);
};

// if visited page before and applied dark mode, start with dark mode
if (darkMode === "on") {
  applyDark();
}
//add event listener to the dark mode toggle
darkModeTgl.addEventListener("click", () => {
  // get dark mode settings from the local storage
  darkMode = localStorage.getItem("darkMode");
  // if its not on, the on it
  if (darkMode !== "on") {
    applyDark();
    // if its on then off it
  } else {
    darkModeOff();
  }
});

//BURGER
//variables
const nav = document.querySelector(".links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

//add a click event listener to the burger
burger.addEventListener("click", () => {
  //when burger clicked apply nav open animation from css
  nav.classList.toggle("nav-open");
  //when burger clicked apply nav close animation from css
  burger.classList.toggle("nav-close");
});

//add event listener to each nav link
links.forEach((link) => {
  link.addEventListener("click", () => {
    //when link is clicked apply nav open animation from css
    nav.classList.toggle("nav-open");
    //when link apply nav close animation from css
    burger.classList.toggle("nav-close");
  });
});

//PROJECT GALLERY
//variables
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
// if statment to check that modal is not null before adding an event listener
if (modal) {
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
}

//LANDING PAGE TEXT ANIMATION
//selector for text animation
const text = document.querySelector(".intro-text");
// split text in to characters
// if statment to check that text is not null
if (text) {
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
  //clear interval, reset timer
  function complete() {
    clearInterval(timer);
    timer = null;
  }
}
