"use strict";

//setup urls for use later within array
let countryURL =
  "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/countries.json";
let statesProvincesURL =
  "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/states-provinces.json";
let citiesCAURL =
  "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/canada-cities.json";
let citiesUSAURL =
  "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/cities.json";
let bigCityURL =
  "https://rawgit.com/alucidwolf/alucidwolf.github.io/master/json/global-cities.json";

//testing some variables for use later inside functions
let DDMStates = document.getElementById("states");
let $DDMStates = $("#states");
let $DDMCities = $("#cities");

function output(text) {
  console.log(text);
}

//remove hidden class to show emulate a loading animation
//return a promise for the request to go get a file
//log status as it is happening
function getFile(file) {
  $(".loading").removeClass("hidden");
  let promiseObj = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("xhr done successfully");
          let resp = xhr.responseText;
          let respJson = JSON.parse(resp);
          resolve(respJson);
        } else {
          reject(xhr.status);
          console.log("xhr failed");
        }
      } else {
        console.log("xhr processing going on");
      }
    };
    console.log("request sent succesfully");
  });

  return promiseObj;
}

//mapping data passed in from each file that was received to its appropriate select field
function mapToDDM(data) {
  console.log(data);
  let option;
  let DDM;
  try {
    if (data[0].code === "AF") {
      //map to country
      DDM = document.getElementById("countries");
      for (let i = 0; i < data.length; i++) {
        //pull out just USA
        if (data[i].name === "United States") {
          option = document.createElement("option");
          option.text = data[i].name;
          option.value = data[i].code;
          DDM.add(option);
        }
      }
    } else if (data[0].short === "AL") {
      //map us/canada states/provinces
      for (let i = 0; i < data.length; i++) {
        //pull out just USA States, no Canada Provinces
        if (data[i].country === "US") {
          option = document.createElement("option");
          option.text = data[i].name;
          option.value = data[i].short;
          DDMStates.add(option);
        }
      }
    } else if (data[0].state === "BC") {
      //map canada cities
    } else if (data[0].name === "New York") {
      //map usa cities
      DDM = document.getElementById("cities");
      for (let i = 0; i < data.length; i++) {
        //pull out just Alabama cities, on change will handle adjustment
        if (data[i].state === "AL") {
          option = document.createElement("option");
          option.text = data[i].name;
          option.value = data[i].name;
          DDM.add(option);
        }
      }
    } else if (data[0].country === "AD") {
      //map global cities
    }
  } catch (err) {
    console.error("Error: " + err);
  }
}

//updating city when state DDM is changed
function updateCity(url, state) {
  //looks like initial event listener function that runs map on an array
  [url]
    .map(getFile)
    .reduce(
      function(chain, filePromise) {
        return chain
          .then(function() {
            return filePromise;
          })
          .then(function(data) {
            console.log(data.length);
            console.log(state);
            let option;
            let DDM = document.getElementById("cities");
            //remove old values
            while (DDM.options.length > 0) {
              DDM.remove(0);
            }
            let fsData = [];
            //get just the values we want for cities that match the state the user chose
            for (let i = 0; i < data.length; i++) {
              if (data[i].state === state) {
                fsData.push(data[i].name);
              }
            }
            //sort just the cities we need in alphabetical order
            fsData.sort();
            console.log(fsData);
            //map those to the city DDM
            for (let i = 0; i < fsData.length; i++) {
              option = document.createElement("option");
              option.text = fsData[i];
              option.value = fsData[i];
              DDM.add(option);
            }
          });
      },
      Promise.resolve() // fulfilled promise to start chain
    )
    .then(function() {
      //when everything is complete, lift pseudo loading animation
      $(".loading").addClass("hidden");
      output("Complete updating city ddm");
    });
}

$DDMStates.on("change", function() {
  //when state DDM changes, set value selected and fire off function to update cities based off that value
  let stateChosen = $(this).val();
  console.log(stateChosen);
  updateCity(citiesUSAURL, stateChosen);
});

document
  .getElementById("getLocationData")
  .addEventListener("click", function() {
    [countryURL, statesProvincesURL, citiesCAURL, citiesUSAURL, bigCityURL]
      .map(getFile)
      .reduce(
        function(chain, filePromise) {
          return chain
            .then(function() {
              return filePromise;
            })
            .then(mapToDDM);
        },
        Promise.resolve() // fulfilled promise to start chain
      )
      .then(function() {
        //when everything is complete, lift pseudo loading animation
        $(".loading").addClass("hidden");
        output("Complete updating all fields from array of file names");
      });
  });
