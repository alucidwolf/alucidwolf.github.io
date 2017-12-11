"use strict";

(function() {
  var countryDDM = $("#country");
  var statesDDM = $("#state");
  var countryURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/countries.json";
  var statesURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/canada-cities.json";
  countryDDM.append(
    '<option selected=""true"" disabled>Choose Country</option>'
  );
  countryDDM.prop("selectedIndex", 0);

  function resolveAfter2Seconds(x) {
    return new Promise((resolve, reject) => {});
  }

  async function add1(x) {
    var timeNow = Date();
    console.log(timeNow);
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }

  add1(10).then(v => {
    var timeNow = Date();
    console.log(v + " " + timeNow); // prints 60 after 4 seconds.
  });
})();
