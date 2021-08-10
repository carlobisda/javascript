
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var reset = document.getElementById("reset");
var div = document.getElementById("number");

var number = 0;

inc.addEventListener("click", function () {
  div.innerHTML = number += 1;
});
dec.addEventListener("click", function () {
  div.innerHTML = number -= 1;
});
reset.addEventListener("click", function () {
  div.innerHTML = number = 0;
});
