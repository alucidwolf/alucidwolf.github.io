// using classes from es6
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Fighter extends Character {
  constructor(name) {
    super(name);
    this.stamina = 100;
  }

  fight() {
    console.log(`${this.name} takes a mighty swing`);
    this.stamina--;
  }
}

class Mage extends Character {
  constructor(name) {
    super(name);
    this.mana = 100;
  }

  cast() {
    console.log(`${this.name} casts a firebolt`);
    this.mana--;
  }
}

let zapper = new Mage("Zapper");
let thumper = new Fighter("Thumper");

zapper.cast();
console.log(zapper.mana);
thumper.fight();
console.log(thumper.stamina);

//////////////////////
//////////////////////
// using object composition, WHAT DO THEY DO INSTEAD OF WHAT THEY ARE
// not using 'new' keyword can increase burden on memory if making 10k objects a second

// factory function accepts state and return object that acts on it
var canCast = function canCast(state) {
  return {
    cast: function cast(spell) {
      console.log(state.name + " casts " + spell + "!");
      state.mana--;
    }
  };
};

// factory function accepts state and return object that acts on it
var canFight = function canFight(state) {
  return {
    fight: function fight(weapon) {
      console.log(state.name + " slashes at the enemy with " + weapon + "!");
      state.stamina--;
    }
  };
};

var fighter = function fighter(name) {
  var state = {
    name,
    health: 100,
    stamina: 100
  };
  // concatenative inheritance
  return Object.assign(state, canFight(state));
};

var mage = function mage(name) {
  var state = {
    name,
    health: 100,
    mana: 100
  };
  // concatenative inheritance
  return Object.assign(state, canCast(state));
};

var paladin = function paladin(name) {
  var state = {
    name,
    health: 100,
    mana: 100,
    stamina: 100
  };
  // concatenative inheritance
  return Object.assign(state, canCast(state), canFight(state));
};

var scorcher = mage("Scorcher");
scorcher.cast("fireball");

var slasher = fighter("Slasher");
slasher.fight("mace");

var roland = paladin("roland");
roland.fight("broadsword");
roland.cast("Holy Light");
