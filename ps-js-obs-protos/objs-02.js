"use strict";

/*Alternate bracket notation use*/
// var cat = {
//   name: "Fluffy",
//   color: "White"
// };

// cat["Eye Color"] = "Green";
// console.log(cat["Eye Color"]);

//

/*Property Descriptor Attributes*/
// var cat = {
//   name: {
//     first: "Fluffy",
//     last: "LeBeouf"
//   },
//   color: "White"
// };

// Object.defineProperty(cat, "name", { writable: false });
// Object.freeze(cat.name);
// cat.name.first = "Scratchy";

// console.log(cat.name);

//

/*for...in loop*/
// var cat = {
//   name: {
//     first: "Fluffy",
//     last: "LeBeouf"
//   },
//   color: "White"
// };

// // enumerable: false === cannot be serialized, enumerate, or see in object keys. You can still look at it
// Object.defineProperty(cat, "name", { enumerable: false });

// for (var i in cat) {
//   console.log(i + ": " + cat[i]);
// }

// console.log(Object.keys(cat));
// console.log(JSON.stringify(cat));
// console.log(cat["name"]); // proof enumerable: false on property can still be seen

//

/*get and set*/
var cat = {
  name: {
    first: "Fluffy",
    last: "LeBeouf"
  },
  color: "White"
};

Object.defineProperty(cat, "fullName", {
  get: function() {
    return this.name.first + " " + this.name.last;
  },
  set: function(value) {
    var nameParts = value.split(" ");
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

cat.fullName = "Muffin Top";
console.log(cat.fullName);
console.log(cat.name.first);
console.log(cat.name.last);
console.log(cat.color);
console.log(cat);
