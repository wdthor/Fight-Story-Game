"use strict";

let startBtn = document.querySelector("#play");
// Start Section
let startPage = document.querySelector("#start-page");

// Menu
let menu = document.querySelector(".main-menu");
let homeLink = document.querySelector(".home-link");
let arenaLink = document.querySelector(".arena-link");
let shopLink = document.querySelector(".shop-link");

// House Section
let houseSection = document.querySelector("#house");
let contentHouse = document.querySelector(".content-house");
// House Dialogue
let dialHome = document.querySelector(".dial-home");
let bub1 = document.querySelector(".bub1");

// Arena Section
let arenaSection = document.querySelector("#arena");
let contentArena = document.querySelector(".content-arena");

// Fight Scene
let metalKnightScene = document.querySelector(".metal-knight-scene");
let metalKnightChar = document.querySelector("#metal-knight");
let charSelect = document.querySelector(".char-select");
let kirbyFight = document.querySelector(".kirby-fight");
let knightFight = document.querySelector(".knight-fight");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let answer = document.querySelector("#answer");

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 10 + 1);
let total = randomNum1 + randomNum2;

num1.textContent = randomNum1;
num2.textContent = randomNum2;

metalKnightChar.addEventListener("click", function () {
  charSelect.classList.add("hide-section");
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    if (parseInt(answer.value) === total) {
      newNumbers();
      kirbyFight.classList.add("kirby-anime");

      document.addEventListener("animationend", function () {
        kirbyFight.classList.remove("kirby-anime");
      });
    } else if (parseInt(answer.value) < total || parseInt(answer.value) > total) {
      newNumbers();
      knightFight.classList.add("knight-anime");

      document.addEventListener("animationend", function () {
        knightFight.classList.remove("knight-anime");
      });
    } else {
      console.log("not a number");
    }
  });
});



function newNumbers() {
  randomNum1 = Math.floor(Math.random() * 10 + 1);
  randomNum2 = Math.floor(Math.random() * 10 + 1);
  total = randomNum1 + randomNum2;
  num1.textContent = randomNum1;
  num2.textContent = randomNum2;
}