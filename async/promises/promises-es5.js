//https://scotch.io/tutorials/javascript-promises-for-dummies

// Promises
// Simple program for exploring promises

var isMomHappy = true;

// Create 1st Promise
var willIGetNewPhone = new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (isMomHappy) {
      var phone = {
        brand: "Samsung",
        color: "black"
      };
      resolve(phone); // Promise is fulfilled
    } else {
      var reason = new Error("mom is not happy");
      reject(reason);
    }
  }, 1000);
});

// Create 2nd Promise
var showOff = function(phone) {
  return new Promise(function(resolve, reject) {
    var message = "I have a new " + phone.color + " " + phone.brand + " phone";

    resolve(message);
  });
};
// Shortened 2nd Promise
var showOffShort = function(phone) {
  var message = "I have a new " + phone.color + " " + phone.brand + " phone";

  return Promise.resolve(message);
};

// Create function call Promise
var askMom = function() {
  // Call
  willIGetNewPhone
    .then(function(fulfilled) {
      console.log(fulfilled);
      // output = {brand: 'Samsung', color: 'black'}
    })
    .catch(function(error) {
      console.log(error.message);
      // output = 'mom is not happy'
    });
};

// Create function call chaining Promises
// *Will log both console messages before promises*
var askMom2 = function() {
  console.log("Before asking mom");
  // Call
  willIGetNewPhone
    .then(showOff)
    .then(function(fulfilled) {
      console.log(fulfilled);
      // output = i have a new black samsung phone
    })
    .catch(function(error) {
      console.log(error.message);
      // output = 'mom is not happy'
    });
  console.log("After asking mom");
};

// Call
askMom();
askMom2();
