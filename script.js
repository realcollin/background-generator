var _ = require('lodash');

let array1 = [1, 3, 5, 7, 9, 11];

console.log(_.without(array1, 9));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeColor() {
    body.style.background = "linear-gradient(to right, "
    + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
