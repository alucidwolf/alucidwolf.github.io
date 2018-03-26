/*
USE REDUCE IF YOU ALREADY HAVE AN ARRAY BUT WANT TO USE THE VALUES
IN THAT ARRAY TO CREATE SOMETHING COMPLETELY NEW
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
let total_wegiht = 0;

for (let i = 0; i < animals.length; i++) {
  total_wegiht = +animals[i].weight;
}

// using reduce operator
// first parameter is the current value of the end value, currently set to 0
// second parameter is current item in the array
// third parameter is the index
// last parameter is the full array
let total_wegiht = animals.reduce((weight, animal, index, animals) => {
  return (weight += animal.weight);
}, 0);
