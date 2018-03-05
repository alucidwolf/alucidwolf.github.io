const promiseFinally = require("promise.prototype.finally");
promiseFinally.shim();

const promiseThatFulfills = new Promise(resolve => {
  // calling resolve with a promise results in the outer promise pending until inner promise is fulfilled/rejected
  setTimeout(() => {
    resolve("howdy");
  }, 1000);
});

const promiseThatRejects = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("whoops"));
  }, 500);
});

promiseThatFulfills.then(() => {
  console.log("fulfull print");
});

promiseThatRejects.then(null, () => {
  console.log("reject print");
});

// shorthand for .then() but not onFulfilled handler, just onRejected
promiseThatRejects.catch(() => {
  console.log("reject catch print");
});

// shorthand for .then() but fires onFinally when promise is settled so accepts fullfilled or rejected promise
promiseThatFulfills.finally(() => {
  console.log("fullfiled finally print");
});
promiseThatRejects.finally(() => {
  console.log("reject finally print");
});
