let mainChar = new Character("hero", 100, 20, 100);
console.log(mainChar);

let bad = new Character("boss", 100, 20, 100);
console.log(bad);

mainChar.attack(bad);
console.log("health of " + bad.name + " is: " + bad.health);
console.log(bad.name + " is " + bad.isAlive);
