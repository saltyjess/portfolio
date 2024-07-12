const togtop = () =>
  document.getElementById("backtop").style.display = window.scrollY >= 800 ? "block" : "none";

window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);