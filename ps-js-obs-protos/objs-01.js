"use strict";

/* Object Literals */
// var cat = {
//   name: "fluffy",
//   color: "white",
//   speak: function() {
//     console.log("Meoowww");
//   }
// };
// cat.age = 3;
// cat.speak();

//

/* Constructor Function */
// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// var cat = new Cat("Fluffy", "White");
// console.log(cat);

//

/* Using 'Object.create()' */
// var cat = Object.create(Object.prototype, {
//   name: {
//     value: "Fluffy",
//     enumerable: true,
//     writable: true,
//     configurable: true
//   },
//   color: {
//     value: "White",
//     enumerable: true,
//     writable: true,
//     configurable: true
//   }
// });
// console.log(cat);

//

/* Using es6 class syntax */
class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log("Meow");
  }
}

var cat = new Cat("Fluffy", "White");
console.log(cat);
cat.speak();
