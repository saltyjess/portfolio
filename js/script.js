let menuTrigger = document.getElementById("menu-trigger")
menuTrigger.addEventListener("click", openMe)

// let closeMenu = document.getElementById("menu-close")
// closeMenu.addEventListener("click", openMe)

function openMe() {
  let openMenu = document.getElementById("side-menu")
  openMenu.classList.toggle("hidden")
  console.log(openMe)
}