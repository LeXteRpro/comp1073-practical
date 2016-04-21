// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

function diceOneFunction() {
    document.getElementById("diceNum1").innerHTML =
    Math.floor(Math.random() * 6) +1;
}

function diceTwoFunction() {
    document.getElementById("diceNum2").innerHTML =
    Math.floor(Math.random() * 6) +1;
}


})();
