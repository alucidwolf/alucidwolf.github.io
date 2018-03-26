/*
USE MAP IF YOU HAVE AN ARRAY AND WANT TO DO THE EXACT OPERATION ON EACH ELEMENT IN THE ARRAY
AND REUTN RHTE SAME AMOUNT OF ITEMS IN THE ARRAY
*/

const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "small",
    weight: 10
  },
  {
    name: "lion",
    size: "medium",
    weight: 150
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  }
];

// basic for loop
let animal_names = [];

for (let i = 0; i < animals.length; i++) {
  animal_names.push(animal[i].name);
}

// using map operator
// no need to manage state, no need to use index like in for loop, no need to create new array
// .map(currentItem, currentIndex, entireArray)
let animal_names = animals.map((animal, index, animals) => {
  return animal.name; // must have return statement or else all values will be undefined
});
