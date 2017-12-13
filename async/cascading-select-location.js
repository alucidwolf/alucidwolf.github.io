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

  const makeRequest = async () => {
    const data = await getJSON();
    const moreData = await makeAnotherRequest();
  };

  function getJSON() {
    $.getJSON(countryURL, data => {
      $.each(data, (key, entry) => {
        countryDDM.append(
          $("<option></option>")
            .attr("value", entry.code)
            .text(entry.name)
        );
      });
      return data;
    });
  }

  function makeAnotherRequest() {
    $.getJSON(statesURL, data => {
      $.each(data, (key, entry) => {
        statesDDM.append(
          $("<option></option>")
            .attr("value", entry.state)
            .text(entry.name)
        );
      });
      return data;
    });
  }

  //makeRequest();

  //

  //getData("https://api.icndb.com/jokes/random");
  //getData(bigCityURL);
  getData(bigCityURL)
    .then(result => {
      let newResult = [];
      $.each(result, (key, entry) => {
        if (entry.country === "ES") {
          newResult.push(entry);
          count++;
        }
      });
      return newResult;
    })
    .then(result => {
      console.log(result);
      $.each(result, (key, entry) => {
        citiesDDM.append(
          $("<option></option>")
            .attr("value", entry.country)
            .text(entry.name)
        );
      });
      $("#city").css("background", "#fff");
      if (result[0].name != 0) {
        timeNow2 = Date.now();
        console.log(
          "time: " + (timeNow2 - timeNow) + ", Number of items: " + count
        );
      }
    });

  async function getData(url) {
    console.log("start");
    $("#city").css("background", "#f90");
    const dataset = await $.getJSON(url);
    //console.log(dataset);
    // document.querySelector(".joke").innerHTML = dataset.value.joke;
    //document.querySelector(".joke").innerHTML = dataset[1].name;
    // $.each(dataset, (key, entry) => {
    //   if (entry.country === "CN") {
    //     citiesDDM.append(
    //       $("<option></option>")
    //         .attr("value", entry.country)
    //         .text(entry.name)
    //     );
    //     count++;
    //   }
    // });
    return dataset;
    // if (dataset.type === "success") {
    // }
  }
})();
