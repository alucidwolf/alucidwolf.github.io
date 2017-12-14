"use strict";

(function () {
  var timeNow = Date.now();
  var timeNow2;
  var count = 0;
  var countryDDM = $("#country");
  var statesDDM = $("#state");
  var citiesDDM = $("#city");
  var countryURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/countries.json";
  var statesProvincesURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/states-provinces.json";
  var citiesCAURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/canada-cities.json";
  var citiesUSAURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/cities.json"
  var bigCityURL =
    "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/global-cities.json";
  countryDDM.append('<option selected="true" disabled>Choose Country</option>');
  countryDDM.prop("selectedIndex", 0);

  async function getData(url) {
    try {
      // start async function to get file and await for it to be successfull then return that result
      console.log("start");
      // TODO: FIX SO PROPER DROP DOWN IS HIGHLIGHTED
      countryDDM.css("background", "#f90");

      const dataset = await $.getJSON(url);
      return dataset;
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  async function filterSort(data) {
    // if json is country data, testing only
    if (data[0].code === "AF") {
      let fsData = [];
      $.each(data, (key, entry) => {
        // only populate USA
        if (entry.code === "US") {
          fsData.push(entry);
        }
      })
      return fsData;
    } else if (data[0].country === "US") {
      let fsData = [];
      $.each(data, (key, entry) => {
        if (entry.country === "US") {
          fsData.push(entry);
        }
      })
      return fsData;
    } else {
      // if json is states data, testing only
      let fsData = [];
      $.each(data, (key, entry) => {
        if (entry.state === "BC") {
          fsData.push(entry);
        }
      });
      fsData.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      return fsData;
    }
  }

  async function placeFSData(modifiedData) {
    console.log(modifiedData);
    if (modifiedData[0].country === "US") {
      $.each(modifiedData, (key, entry) => {
        count++;
        statesDDM.append($("<option></option>")
          .attr("value", entry.short)
          .text(entry.name))
      });
    } else {
      $.each(modifiedData, (key, entry) => {
        count++;
        countryDDM.append($("<option></option>")
          .attr("value", entry.code)
          .text(entry.name))
      });
    }
    // returning color back to normal and loggin time diff
    if (modifiedData[0].name != null) {
      timeNow2 = Date.now();
      countryDDM.css("background", "#fff");
      console.log(
        "time: " + (timeNow2 - timeNow) + ", Number of items: " + count
      );
    }
  }

  getData(countryURL)
    // wait for json to be returned
    .then(filterSort)
    // wait for filtered result
    .then(placeFSData);

  countryDDM.on("change", function () {
    let chosenCountry = $(this).val();
    if (chosenCountry === "US") {
      getData(statesProvincesURL)
        .then(filterSort)
        .then(placeFSData);
    }
  })
})();
