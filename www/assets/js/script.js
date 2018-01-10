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
