// adding two numbers normal function
let resultA, resultB, resultC;

function add(num1, num2) {
  return num1 + num2;
}

resultA = add(1, 2);
resultB = add(resultA, 3);
resultC = add(resultB, 4);

console.log("total " + resultC);
console.log(resultA, resultB, resultC);

///////////

// adding the promise way
let resultA, resultB, resultC;

async function addAsync(num1, num2) {
  return new Promise(function(resolve, rejct) {
    setTimeout(() => {
      let res = num1 + num2;
      resolve(res);
    }, 1000);
  });

  //short hand
  //return Promise.resolve(num1 + num2);
}

async function addAll() {
  try {
    console.log("before");

    let res1 = await addAsync(1, 2);
    console.log(res1);
    let res2 = await addAsync(res1, 3);
    console.log(res2);
    let res3 = await addAsync(res2, 4);

    console.log(res3);
    console.log("after");
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await addAll();
})();
