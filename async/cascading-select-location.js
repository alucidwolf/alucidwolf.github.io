"use strict";

(function() {
  var timeNow = Date.now();
  var timeNow2;
  var count = 0;
  var countryDDM = $("#country");
  var statesDDM = $("#state");
  var citiesDDM = $("#city");
  var countryURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/countries.json";
  var statesURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/canada-cities.json";
  var bigCityURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/global-cities.json";
  countryDDM.append('<option selected="true" disabled>Choose Country</option>');
  countryDDM.prop("selectedIndex", 0);

  async function getData(url) {
    try {
      // start async function to get file and await for it to be successfull then return that result
      console.log("start");
      $("#city").css("background", "#f90");

      const dataset = await $.getJSON(url);
      return dataset;
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  getData(bigCityURL)
    // wait for json to be returned
    .then(result => {
      let newResult = [];
      $.each(result, (key, entry) => {
        if (entry.country === "ES") {
          newResult.push(entry);
          count++;
        }
      });
      newResult.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return newResult;
    })
    // wait for filtered result
    .then(result => {
      console.log(result);
      $.each(result, (key, entry) => {
        citiesDDM.append(
          $("<option></option>")
            .attr("value", entry.country)
            .text(entry.name)
        );
      });
      // returning color back to normal and loggin time diff
      if (result[0].name != 0) {
        timeNow2 = Date.now();
        $("#city").css("background", "#fff");
        console.log(
          "time: " + (timeNow2 - timeNow) + ", Number of items: " + count
        );
      }
    });
})();
