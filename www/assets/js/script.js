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
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let answer = document.querySelector("#answer");

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 10 + 1);
let total = randomNum1 + randomNum2;

num1.textContent = randomNum1;
num2.textContent = randomNum2;

// Shop Section
let shopSection = document.querySelector("#shop");
let contentShop = document.querySelector(".content-shop");


let kirby = new Character("Kirby", 100, 20);
// console.log(kirby.dialogue.home.intro[0]);

// START PAGE
startBtn.addEventListener("click", function () {
  startPage.classList.add("remove-background");
  houseSection.classList.remove("hide-section");

  startPage.addEventListener("animationend", function () {
    menu.classList.remove("hide-section");
    startPage.classList.add("hide-section");
    contentHouse.classList.remove("hide-section");
    homeDialogue();
  });
});
// END START PAGE

// HOME
homeLink.addEventListener("click", function () {
  displayBackground(houseSection);
})
// END HOME


// ARENA
arenaLink.addEventListener("click", function () {

  displayBackground(arenaSection);

});

// FIGHT SCENES

// Metal Knight Scene

document.addEventListener("submit", function (event) {
  event.preventDefault();
  if (parseInt(answer.value) === total) {
    randomNum1 = Math.floor(Math.random() * 10 + 1);
    randomNum2 = Math.floor(Math.random() * 10 + 1);
    num1.textContent = randomNum1;
    num2.textContent = randomNum2;
  } else {
    console.log("wrong");
  }
});
// END ARENA

// SHOP
shopLink.addEventListener("click", function () {

  displayBackground(shopSection);

});
// END SHOP

// FUNCTIONS
function homeDialogue() {
  let dialHomeNum = 0;
  dialHome.textContent = kirby.dialogue.home.intro[dialHomeNum]
  document.addEventListener("keypress", function () {

    if (event.keyCode === 13 && dialHomeNum < kirby.dialogue.home.intro.length - 1) {
      dialHomeNum++;
      dialHome.textContent = kirby.dialogue.home.intro[dialHomeNum];
    } else {
      bub1.style.display = "none";
    }
  });
}


function displayBackground(display) {
  houseSection.classList.add("hide-section");
  arenaSection.classList.add("hide-section");
  shopSection.classList.add("hide-section");
  display.classList.remove("hide-section");
}

//================================================================
// TEST COMBAT

/* 
let environment = {
    days: 0
}

let mainChar = new Character("mainChar", 100, 20, 100);
console.log(mainChar);

let bad = new Character("bad", 100, 20, 100);
console.log(bad);

mainChar.attack(bad);
console.log("health of " + bad.name + " is: " + bad.health);
console.log(bad.name + " is " + bad.isAlive);

if (mainChar.sleep === true) {
    environment.days++;
} */
// ==============================================================