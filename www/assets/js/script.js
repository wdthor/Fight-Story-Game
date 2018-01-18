"use strict";

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
}

let startBtn = document.querySelector("#play");
let startPage = document.querySelector("#start-page");
let contentHouse = document.querySelector(".content");
let house = document.querySelector("#house");

startBtn.addEventListener("click", function () {
    startPage.classList.add("remove-background");
    startPage.addEventListener("animationend", function () {
        startPage.style.display = "none";
        contentHouse.style.display = "block";
    });
});

// while (house.style.display === "block") {
//     document.addEventListener("keypress", function () {
//         if (event.keyCode == 13) {
//             console.log("enter");

//         }
//     });
// }
