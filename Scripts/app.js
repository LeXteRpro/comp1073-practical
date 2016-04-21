// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

var diceOne = "";

var diceTwo = "";

// Dice1 Onclick function when button is pressed
function diceOneFunction() {
    document.getElementById("diceNum1").innerHTML =
    Math.floor(Math.random() * 6) +1;
}

// Dice2 Onclick function when button is pressed
function diceTwoFunction() {
    document.getElementById("diceNum2").innerHTML =
    Math.floor(Math.random() * 6) +1;
}


})();
