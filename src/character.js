/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Character {
  constructor(name) {
    this.name = name;
  }
}

class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defense = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defense = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defense = 40;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defense = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defense = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defense = 10;
  }
}

export {
  Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
};
