"use strict";

// prototypal inheritance chain

function Animal(voice) {
  this.voice = voice || "grunt";
}
//empty object
console.log(Animal.prototype);

Animal.prototype.speak = function() {
  console.log(this.voice);
};

//now it has speak method
console.log(Animal.prototype);

function Cat(name, color) {
  Animal.call(this, "Meow");
  this.name = name;
  this.color = color;
}
//empty object
console.log(Cat.prototype);

//object now containing speak function
Cat.prototype = Object.create(Animal.prototype);
console.log(Cat.prototype);

//object indicating Cat as constructor so it contains an object with name/color.
Cat.prototype.constructor = Cat;
console.log(Cat.prototype);

var fluffy = new Cat("Fluffy", "White");

// fluffy can speak because it inherited the ability to do so from
fluffy.speak();
console.log(fluffy);
console.log(fluffy.__proto__);
console.log(fluffy.__proto__.__proto__.__proto__);

//

// same but using classes

class Animal {
  constructor(voice) {
    this.voice = voice || "Grunt";
  }

  speak() {
    console.log(this.voice);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super("Meow");
    this.name = name;
    this.color = color;
  }
}

var fluffy = new Cat("Fluffy", "White");
console.log(fluffy.constructor);
console.log(Object.keys(fluffy.__proto__.__proto__));
console.log(fluffy.__proto__.__proto__.hasOwnProperty("speak"));
