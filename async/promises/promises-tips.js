// 1. Return a Promise inside .then()
.then(r => {
  return serverStatusPromise(r); //promise of {statusCode: 200}
})
.then(resp => {
  console.log(resp.statusCode); //200, auto unwrap of promise
})

// 2. New Promise is made every time .then() is used
var statusProm = fecthServerStatus();

var promA = statusProm.then(r => (r.statusCode === 200 ? "good" : "bad"));

var promB = promA.then(r => (r === "good" ? "All OK" : "Not OK"));

var promC = statusProm.then(r => fetchSomethingElse());

// 3. Promise is resolved/rejected for EVERYONE
function yourFunc() {
  const Prom1 = makeMeProm();

  yourUncle(Prom1); //promise will work even though it is consumed and rejected by the 'yourUncle' function

  return Prom1.then(r => processsing(r));
}

function yourUncle(prom){
  return prom.then(r => Promise.reject("destroy!")); // destructive uncle
}

// 4. Promise.resolve
var similarProm = new Promise(res => res(5));
// ^^ same as
var prom = Promise.resolve(5);

// convert a sync function to an async
function foo(){
  return Promise.resolve(5);
}

// wrap function which you are unsure whether is promise or regular value, safety wrapper
function goodProm(maybePromise) {
  return Promise.resolve(maybePromise)
}
goodProm(5).then(console.log); // 5

var sixPromise = fetchMeNumber(6); // this is a promise which resolves into number 5

goodProm(sixPromise).then(console.log) // 6

goodProm(Promise.resolve(Promise.resolve(5))).then(console.log); // 5, unwrap all promise layers

// 6. Promise.reject
var rejProm = new Promise((res,rej) => reject(5));

rejProm.catch(e => console.log(e)) // 5

function foo(myVal){
  if(!myVal){
    return Promise.reject(new Error('myVal is required'))
  }
  return new Promise((res, rej) => {
    // callback to promise conversion
  })
}

.then(val => {
  if(val != 5){
    return Promise.reject("not good");
  }
})
.catch(e => console.log(e)) // not good

// 7. Promise.all
  // takes an array of promises
  // then waits for all of them to finish
  // then returns a new Promise which resolves into an array
  // catches if even a single Promise fails/rejects

var prom1 = Promise.resolve(5);
var prom2 = fecthServerStatus();

Promise.all([prom1, prom2])
.then(([val1, val2]) => { // resolves into Array
  console.log(va1);
  console.log(val2.statusCode);
})
.catch(e => console.log(e)) // 5
