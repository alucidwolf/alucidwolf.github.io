// async and await syntax
const isMomHappy = true;

//1st promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isMomHappy) {
      const phone0 = {
        brand: "samsung",
        color: "black"
      };
      resolve(phone0);
    } else {
      const reason = new Error("mom is not happy");

      reject(reason);
    }
  }, 1000);
});

//2nd promise
//return a promise in a f unction, prepend with 'async'
async function showOff(phone1) {
  return new Promise((resolve, reject) => {
    var message =
      "yo i got a new " + phone1.color + " " + phone1.brand + " phone";

    resolve(message);
  });
}

//call promise
// *Will log console messages in order listed using 'await'*
async function askMom() {
  //simple try/catch to get rejected promise
  try {
    console.log("before asking mom");

    // call a promise, prepend with 'await'
    let phone2 = await willIGetNewPhone;
    let message = await showOff(phone2);

    console.log(message);
    console.log("after asking mom");
  } catch (error) {
    console.log(error.message);
  }
}

(async () => {
  await askMom();
})();
