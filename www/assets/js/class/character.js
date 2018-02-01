class Character {
    constructor(name, health, strength, money = 0) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.money = money;
        this.isAlive = true;
        this.action = 10;
        this.sleep = false;

        this.dialogue = {
            home: {
                intro: ["Hi, my name is Kirby",
                    "This is my house, where I take a nap.",
                    "Click on 'Arena' to make me fight.",
                    "Click on 'Shop' to buy me some treats."
                ]
            }
        }
    }


    isSleeping(days) {
        if (this.sleep === false) {
            this.sleep = true;
        }
        days++;
        // return this.sleep;
    }

    attack(char2) {
        if (this.isAlive) {
            
            char2.health -= this.strength;

            if (char2.health <= 0) {
                char2.health = 0;
                char2.isDead();
            }


            return char2.health;
        }
        
        return this.name + " is dead";

    }

    isDead() {
        this.isAlive = false;
    }

    // sleep() {
    //     this.action = 10;

    // }
}

// TEST

/*
attack(char2) {
        if (this.isAlive && this.action > 0) {
            this.action--;
            char2.health -= this.strength;

            if (char2.health <= 0) {
                char2.health = 0;
                char2.isDead();
            }

            if (this.action === 3) {
                console.log(this.name + " is tired, you should go to sleep.");
            }

            return char2.health;

        } else if (this.action <= 0) {
            this.sleep = true;
            return this.name + " is exhausted. ZzzzZzzzZzzz";
        }
        return this.name + " is dead";

    }
*/