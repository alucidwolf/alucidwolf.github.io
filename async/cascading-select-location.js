"use strict";

(function() {
  var timeNow = Date.now();
  var timeNow2;
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
  getData(bigCityURL);

  async function getData(url) {
    const dataset = await $.ajax(url);
    // document.querySelector(".joke").innerHTML = dataset.value.joke;
    //document.querySelector(".joke").innerHTML = dataset[1].name;
    $.each(dataset, (key, entry) => {
      if (entry.country === "AD") {
        citiesDDM.append(
          $("<option></option>")
            .attr("value", entry.country)
            .text(entry.name)
        );
      }
    });
    if (dataset[0].name != 0) {
      timeNow2 = Date.now();
      console.log(timeNow2 - timeNow);
    }
    // if (dataset.type === "success") {
    // }
  }
})();
