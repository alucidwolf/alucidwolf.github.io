/*
USE FILTER IF YOU ALREADY HAVE AN ARRAY BUT ONLY WANT TO HAVE ITEMS 
IN THE ARRAY THAT MATCH CERTAIN CRITERIA
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
let small_animals = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i].size === "small") {
    small_animals.push(animals[i]);
  }
}

// using filter operator
// .filter(currentItem, -currentIndex, -entireArray)
let small_animals = animals.filter(animal => {
  return animal.size === "small"; // must have return statement that returns a boolean
});
