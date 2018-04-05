"use strict";

// prototypal inheritance chain

// function Animal(voice) {
//   this.voice = voice || "grunt";
// }
// Animal.prototype.speak = function() {
//   display(this.voice);
// };

// function Cat(name, color) {
//   Animal.call(this, "Meow");
//   this.name = name;
//   this.color = color;
// }
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// var fluffy = new Cat("Fluffy", "White");
// console.log(fluffy.__proto__);

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
