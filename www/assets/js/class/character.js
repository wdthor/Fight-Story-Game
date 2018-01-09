class Character {
    constructor(name, health, strength, stamina, money = 0) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.stamina = stamina;
        this.money = money;
        this.isAlive = true;
        this.action = 10;
    }

    attack(char2) {
        if (this.isAlive) {
            char2.health -= this.strength;

            if (char2.health <= 0) {
                char2.health = 0;
                char2.isDead();
            }

            return char2.health;
        } else {
            return this.name + " is dead";
        }


    }

    isDead() {
        this.isAlive = false;
    }

    // sleep() {
    //     this.action = 10;

    // }
}