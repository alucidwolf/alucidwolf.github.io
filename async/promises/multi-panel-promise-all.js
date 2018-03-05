var p1 = Promise.resolve(3);
var p2 = 42;
var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, "foo");
});

var arr1 = [p1, p2, p3];

// Will wait for the settimoue in p3 to finish before logging all values
Promise.all(arr1).then(function(values) {
  console.log(values);
});
