var _ = require('lodash');
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector(".random");
var body = document.querySelector("#gradient")


var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));


function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomRGB() {
    var o = Math.round, r = Math.random, s = 255;
    body.style.background = 'linear-gradient(to right,' + 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')' + ',' + 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + '))';

    css.textContent = body.style.background + ";";
    return body.style.background;
}
function initialBackground() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";

}


button.addEventListener("click", randomRGB);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
body.addEventListener("load", initialBackground);


