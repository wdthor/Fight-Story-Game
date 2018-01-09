class Character {
    constructor(name, health, strength, stamina, money = 0) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.stamina = stamina;
        this.money = money;
        this.isAlive = true;
    }

    attack(char2) {
        char2.health -= this.strength;
        if (char2.health <= 0) {
            char2.health = 0;
            char2.isDead();
        }
        return char2.health;
    }

    isDead() {
        this.isAlive = false;
    }
}