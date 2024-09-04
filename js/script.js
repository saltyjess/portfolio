// navigation menu open/close
//===========================================
let menuTrigger = document.getElementById("menu-trigger")
menuTrigger.addEventListener("click", openMe)

let closeMenu = document.getElementById("menu-close")
closeMenu.addEventListener("click", openMe)

function openMe() {
  let openMenu = document.getElementById("side-menu")
  openMenu.classList.toggle("hidden")
  // openMenu.classList.toggle("menu-open") trying to do an annimation
  console.log(openMenu)
}
// Sun moon toggle
//===========================================
// document.addEventListener('DOMContentLoaded', function() {
//   alert("Ready!");
// }, false);


const sunEl = document.getElementById("sun")
const moonEl = document.getElementById("moon")

moonEl.addEventListener("click", moonOn)
sunEl.addEventListener("click", sunOn)

function moonOn(){
  moonEl.classList.add("hidden")
  sunEl.classList.remove("hidden")
  document.querySelector("html").setAttribute("data-theme", "dark");
}

function sunOn() {
  sunEl.classList.add("hidden")
  moonEl.classList.remove("hidden")
  document.querySelector("html").setAttribute("data-theme", "light");
}
//dark/light mode - keep the theme on all pages and based on your settings
//===========================================

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}
console.log(calculateSettingAsThemeString)

let button = document.querySelector("[data-theme-toggle]");

//Utility function to update the theme setting on the html tag
function updateThemeOnHtmlEl({ theme }) {
  if (theme == "dark") {
    //show the sun & hide the moon
    moonEl.classList.add("hidden")
    document.querySelector("html").setAttribute("data-theme", "dark");

  } else{
    //show the moon & hide the sun
    sunEl.classList.add("hidden")
    document.querySelector("html").setAttribute("data-theme", "light");
}
}

//1. Grab what we need from the DOM and system settings on page load
const localStorageTheme = localStorage.getItem("theme");//grabbing the vaiable theme from local storage
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)"); //sees if you prefer dark mode

//2. Work out the current site settings
let currentThemeSetting = localStorageTheme;

//3. Update the theme setting and button text accoridng to current settings
updateThemeOnHtmlEl({ theme: currentThemeSetting });

//4. Add an event listener to toggle the theme
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  // updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 




