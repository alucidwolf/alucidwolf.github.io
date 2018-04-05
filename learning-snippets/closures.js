// es6 syntax test for closure access
const getSecret = secret => ({
  get: () => secret
});
// var getSecret = function getSecret(secret) {
//   return {
//     get: function get() {
//       return secret;
//     }
//   };
// };

test("Closure for object privacy", assert => {
  const msg = ".get() should have access to the closure.";
  const expected = 1;
  const obj = getSecret(1);

  const actual = obj.get();

  try {
    assert.ok(secret, "error here");
  } catch (e) {
    assert.ok(true, "secret var is only available to privileged methods");
  }

  assert.equal(actual, expected, msg);
  assert.end();
});

////////////////
////////////////

const secret = msg => () => msg;
// var secret = function secret(msg) {
//   return function () {
//     return msg;
//   };
// };

test("secret", assert => {
  const msg =
    "secret() should return a function that returns the passed secret";

  const theSecret = "Closures are easy";
  const mySecret = secret(theSecret);

  const actual = mySecret();
  const expected = theSecret;

  assert.equal(actual, expected, msg);
  assert.end();
});

////////////////
////////////////

const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
const partialApply = (fn, ...fixedArgs) => {
  return function(...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};

test("add10", assert => {
  const msg = "partialApply() should partially apply functions";
  const add = (a, b) => a + b;
  const add10 = partialApply(add, 10);
  const actual = add10(5);
  const expected = 15;

  assert.equal(actual, expected, msg);
});

add10(5);
