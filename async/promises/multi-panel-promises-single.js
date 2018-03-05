function addLoader(el) {
  el.removeClass("hide");
  return new Promise(function(resolve, reject) {
    resolve(el);
  });
}

function removeLoader(el) {
  el.addClass("hide");
  return new Promise(function(resolve, reject) {
    resolve("hidden");
  });
}

function getRandomNumber() {
  let rnum = Math.round(Math.random() * 1e4) % 4000 + 1000;
  return rnum;
}

async function timerT(value, duration) {
  console.log(value);
  return new Promise(function(resolve, reject) {
    return setTimeout(function() {
      return resolve("done 1");
    }, duration);
  });
}

function updatePanel(element, duration) {
  addLoader(element).then(function(returnEl) {
    console.log(returnEl);
  });
  removeLoader(element);
}

async function logRandomNumber() {
  let rn1 = getRandomNumber();
  let rn2 = getRandomNumber();
  let rn3 = getRandomNumber();
  let el1 = $("#file1 .loader");
  let el2 = $("#file2 .loader");
  let el3 = $("#file3 .loader");
  console.log("p1: " + rn1 + ", p2: " + rn2 + ", p3: " + rn3);

  updatePanel(el1, rn1);

  addLoader($("#file1 .loader"))
    .then(function(val) {
      console.log(val);
      return new Promise(function(resolve, reject) {
        return setTimeout(function() {
          return resolve("done 1");
        }, rn1);
      });
    })
    .then(function(val) {
      removeLoader($("#file1 .loader"));
      console.log(val);
    });

  addLoader($("#file2 .loader"))
    .then(function(val) {
      console.log(val);
      return new Promise(function(resolve, reject) {
        return setTimeout(function() {
          return resolve("done 2");
        }, rn2);
      });
    })
    .then(function(val) {
      removeLoader($("#file2 .loader"));
      console.log(val);
    });

  addLoader($("#file3 .loader"))
    .then(function(val) {
      console.log(val);
      return new Promise(function(resolve, reject) {
        return setTimeout(function() {
          return resolve("done 3");
        }, rn3);
      });
    })
    .then(function(val) {
      removeLoader($("#file3 .loader"));
      console.log(val);
    });
}
