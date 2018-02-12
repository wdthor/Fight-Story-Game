"use strict";

let kirby = new Character("Kirby", 100, 20, 10);
console.log(kirby);
let knight = new Character("Metal Knight", 100, 20);
console.log(knight);

let kirbyHealth = document.querySelector("#kirby-health");
let metalKnightHealth = document.querySelector("#knight-health");
let whispyWoodsHealth = document.querySelector("#whispy-health");

// Songs
let kirbyWinSong = document.querySelector("#win-song");
let kirbyLoseSong = document.querySelector("#game-over-song");

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

  // Metal Knight Fight
let metalKnightScene = document.querySelector(".metal-knight-scene");
let metalKnightChar = document.querySelector("#metal-knight");
let metalKnightSideFight = document.querySelector(".metal-knight-side-fight");
let metalKnightFight = document.querySelector(".metal-knight-fight");

  // Whispy Woods Fight
let whispyWoodsScene = document.querySelector(".whispy-woods-scene");
let whispyWoodsChar = document.querySelector("#whispy-woods");
let whispyWoodsTree = document.querySelector(".whispy-woods-tree");
let whispyWoodsSideFight = document.querySelector(".whispy-woods-side-fight");

let fighters = document.querySelector(".fighters");
let charSelect = document.querySelector(".char-select");
let fightSceneContainer = document.querySelector(".fight-scene-container");
let kirbyFight = document.querySelector(".kirby-fight");
let gameOver = document.querySelector("#game-over");
let kirbyWin = document.querySelector(".kirby-win");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let answer = document.querySelector("#answer");

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 10 + 1);
let total = randomNum1 + randomNum2;

num1.textContent = randomNum1;
num2.textContent = randomNum2;

// Metal Knight Scene
metalKnightChar.addEventListener("click", fightWithKnight);

// Whispy Woods Scene
whispyWoodsChar.addEventListener("click", function() {
  kirby.doSth();
  fightMode();
  whispyWoodsScene.classList.remove("hide-section");
  charSelect.classList.add("hide-section");
  whispyWoodsSideFight.classList.remove("hide-section");
  whispyWoodsTree.classList.remove("hide-section");
  document.addEventListener("submit", function (event) {
    event.preventDefault();

    if (parseInt(answer.value) === total) {
      newNumbers();

      kirbyFight.classList.add("kirby-anime");
      kirby.attack(knight);

      metalKnightHealth.value = knight.health;
      answer.value = "";

      document.addEventListener("animationend", function () {
        kirbyFight.classList.remove("kirby-anime");
      });
    } else if (parseInt(answer.value) < total || parseInt(answer.value) > total) {
      newNumbers();
      metalKnightFight.classList.add("knight-anime");
      knight.attack(kirby);
      kirbyHealth.value = kirby.health;
      answer.value = "";

      document.addEventListener("animationend", function () {
        metalKnightFight.classList.remove("knight-anime");
      });
    } else {
      console.log("not a number");
    }
    if (!kirby.isAlive || !knight.isAlive) {
      window.setTimeout(function () {
        if (!kirby.isAlive) {
          endFightMode();
          charSelect.classList.add("hide-section");
          gameOver.classList.remove("hide-section");
          kirbyLoseSong.play();
        } else if (!knight.isAlive) {
          window.setTimeout(function () {
            console.log("knight is dead");
            charSelect.classList.remove("hide-section");
            kirbyWin.classList.add("hide-section");
          }, 7000);
          endFightMode(metalKnightChar);
          kirbyWin.classList.remove("hide-section");
          kirbyWinSong.play();
        }
      }, 2000);

    }
  });

});


// FUNCTIONS
function endFightMode(char) {
  fighters.classList.add("hide-section");
  fightSceneContainer.classList.add("hide-section");
  if(char) {
    char.style.backgroundColor = 'rgba(200,50,50,0.7)';
  }
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

// Futur Edit
/* 
function resetStats(character) {
  character.health = 100;
  character.isAlive = true;
  answer.value = "";
} */

// TEST

function fightWithKnight() {
  kirby.doSth();
  fightMode();
  metalKnightScene.classList.remove("hide-section");
  charSelect.classList.add("hide-section");
  metalKnightSideFight.classList.remove("hide-section");
  metalKnightFight.classList.remove("hide-section");
  document.addEventListener("submit", function (event) {
    event.preventDefault();

    if (parseInt(answer.value) === total) {
      newNumbers();

      kirbyFight.classList.add("kirby-anime");
      kirby.attack(knight);

      metalKnightHealth.value = knight.health;
      answer.value = "";

      document.addEventListener("animationend", function () {
        kirbyFight.classList.remove("kirby-anime");
      });
    } else if (parseInt(answer.value) < total || parseInt(answer.value) > total) {
      newNumbers();
      metalKnightFight.classList.add("knight-anime");
      knight.attack(kirby);
      kirbyHealth.value = kirby.health;
      answer.value = "";

      document.addEventListener("animationend", function () {
        metalKnightFight.classList.remove("knight-anime");
      });
    } else {
      console.log("not a number");
    }
    if (!kirby.isAlive || !knight.isAlive) {
      window.setTimeout(function () {
        if (!kirby.isAlive) {
          endFightMode();
          charSelect.classList.add("hide-section");
          gameOver.classList.remove("hide-section");
          kirbyLoseSong.play();
        } else if (!knight.isAlive) {
          window.setTimeout(function () {
            console.log("knight is dead");
            charSelect.classList.remove("hide-section");
            kirbyWin.classList.add("hide-section");
          }, 7000);
          endFightMode(metalKnightChar);
          kirbyWin.classList.remove("hide-section");
          kirbyWinSong.play();
        }
      }, 2000);

    }
  });

 metalKnightChar.removeEventListener('click', fightWithKnight);
}