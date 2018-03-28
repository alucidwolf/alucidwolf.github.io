function getRandomNumber() {
  let rnum = Math.round(Math.random() * 1e4) % 4000 + 1000;
  return rnum;
}

function addLoader(el) {
  if (el.hasClass("hide")) {
    el.removeClass("hide");
  }
  return new Promise(function(resolve, reject) {
    resolve(el);
  });
}

function removeLoader(el) {
  if (!el.hasClass("hide")) {
    el.addClass("hide");
  }
  return new Promise(function(resolve, reject) {
    resolve("hidden");
  });
}

// jquery element, random number to simulate duration of network request
function updatePanel(element, duration, bool) {
  element.text(duration);
  addLoader(element)
    .then(function(returnEl) {
      return new Promise(function(resolve, reject) {
        return setTimeout(function() {
          return resolve(returnEl);
        }, duration);
      });
    })
    .then(function(val) {
      if (bool) {
        removeLoader(element);
      }
      console.log(val);
    });
}

function updatePanelDontCare(element) {
  let rn = getRandomNumber();
  element.text(rn);
  console.log("random number generated: " + rn);
  let promObj = new Promise(function(resolve, reject) {
    setTimeout(resolve, rn, rn);
  });
  addLoader(element);
  return promObj;
}

async function updatePanelPromise(element, duration) {
  element.text(duration);
  return new Promise(function(resolve, reject) {
    addLoader(element)
      .then(function(returnEl) {
        return new Promise(function(resolve, reject) {
          return setTimeout(function() {
            return resolve(returnEl);
          }, duration);
        });
      })
      .then(function(val) {
        console.log(val);
      })
      .then(function() {
        resolve(element);
      });
  });
}

function updateAllPanelsInd() {
  let el1 = $("#file1 .loader");
  let el2 = $("#file2 .loader");
  let el3 = $("#file3 .loader");
  let rn1 = getRandomNumber();
  let rn2 = getRandomNumber();
  let rn3 = getRandomNumber();

  console.log("p1: " + rn1 + ", p2: " + rn2 + ", p3: " + rn3);

  updatePanel(el1, rn1, true);
  updatePanel(el2, rn2, true);
  updatePanel(el3, rn3, true);
}

async function updateAllPanels() {
  let el1 = $("#file1 .loader");
  let el2 = $("#file2 .loader");
  let el3 = $("#file3 .loader");
  let rn1 = getRandomNumber();
  let rn2 = getRandomNumber();
  let rn3 = getRandomNumber();

  console.log("p1: " + rn1 + ", p2: " + rn2 + ", p3: " + rn3);

  addLoader(el1);
  addLoader(el2);
  addLoader(el3);

  // Set 'await' function in the order that processes should be completed
  let up3 = await updatePanelPromise(el3, rn3);
  let up2 = await updatePanelPromise(el2, rn2);
  let up1 = await updatePanelPromise(el1, rn1);

  let arr1 = [up1, up2, up3];

  Promise.all(arr1).then(function(values) {
    console.log(values);
    values.map(removeLoader);
  });
}

async function updateAllPanelsDontCare() {
  let el1 = $("#file1 .loader");
  let el2 = $("#file2 .loader");
  let el3 = $("#file3 .loader");
  let elArr = [el1, el2, el3];
  let p1 = updatePanelDontCare(el1);
  let p2 = updatePanelDontCare(el2);
  let p3 = updatePanelDontCare(el3);
  let arr1 = [p1, p2, p3];

  Promise.all(arr1).then(function(values) {
    elArr.map(removeLoader);
  });
}
