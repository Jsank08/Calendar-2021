const checkbox = document.getElementById("checkboxid");
const nav = document.getElementById("navbar");
const foot = document.getElementById("footer");
var x = document.getElementsByClassName("tablecol1");

var i, j;

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  nav.classList.toggle("darknav");

  foot.classList.toggle("darkfoot");

  for (i = 0; i < x.length; i = i + 2) {
    x[i].classList.toggle("mystyle");
  }
  for (j = 1; j < x.length; j = j + 2) {
    x[j].classList.toggle("mystyle2");
  }
});
