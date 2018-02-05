"use strict";

let kirby = new Character("Kirby", 100, 20, 10);
console.log(kirby);
let knight = new Character("Metal Knight", 100, 20);
console.log(knight);

let kirbyHealth = document.querySelector("#kirby-health");

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
let fighters = document.querySelector(".fighters");
let charSelect = document.querySelector(".char-select");
let fightSceneContainer = document.querySelector(".fight-scene-container");
let kirbyFight = document.querySelector(".kirby-fight");
let knightFight = document.querySelector(".knight-fight");
let gameOver = document.querySelector("#game-over");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let answer = document.querySelector("#answer");

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 10 + 1);
let total = randomNum1 + randomNum2;

num1.textContent = randomNum1;
num2.textContent = randomNum2;

metalKnightChar.addEventListener("click", function () {
  kirby.doSth();
  fightMode();
  charSelect.classList.add("hide-section");
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    if (kirby.isAlive && knight.isAlive) {
      if (parseInt(answer.value) === total) {
        newNumbers();
        kirbyFight.classList.add("kirby-anime");
        kirby.attack(knight);
        kirbyHealth.value = kirby.health;

        document.addEventListener("animationend", function () {
          kirbyFight.classList.remove("kirby-anime");
        });
      } else if (parseInt(answer.value) < total || parseInt(answer.value) > total) {
        newNumbers();
        knightFight.classList.add("knight-anime");
        knight.attack(kirby);
        kirbyHealth.value = kirby.health;
        
        document.addEventListener("animationend", function () {
          knightFight.classList.remove("knight-anime");
        });
      } else {
        console.log("not a number");
      }
    } else if(!kirby.isAlive) {
      endFightMode();
      charSelect.classList.add("hide-section");
      gameOver.classList.remove("hide-section");
    } else if(!knight.isAlive) {
      endFightMode();
      console.log("knight is dead");
    }

  });
});

function endFightMode() {
  charSelect.classList.remove("hide-section");
  fighters.classList.add("hide-section");
  fightSceneContainer.classList.add("hide-section");
}

function fightMode() {
  charSelect.classList.add("hide-section");
  fighters.classList.remove("hide-section");
  fightSceneContainer.classList.remove("hide-section");
}

function newNumbers() {
  randomNum1 = Math.floor(Math.random() * 10 + 1);
  randomNum2 = Math.floor(Math.random() * 10 + 1);
  total = randomNum1 + randomNum2;
  num1.textContent = randomNum1;
  num2.textContent = randomNum2;
}