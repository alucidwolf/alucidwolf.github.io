function output(text) {
  console.log(text);
}

function simAJAX(url, cb) {
  var simResponse = {
    file1: "1st text",
    file2: "2nd text",
    file3: "3rd text"
  };
  var randomDelay = Math.round(Math.random() * 1e4) % 4000 + 1000;

  console.log("Request starting: " + url + ", delay: " + randomDelay);

  setTimeout(() => {
    cb(simResponse[url]);
  }, randomDelay);
}

function simGetFile(fileName) {
  $("#" + fileName).addClass("bg-primary");
  return new Promise((resolve, reject) => {
    simAJAX(fileName, resolve);
  });
}

function logRandomNumber() {
  ["file1", "file2", "file3"]
    .map(simGetFile)
    .reduce(
      (chain, filePromise) => {
        return chain
          .then(() => {
            return filePromise;
          })
          .then(fullfilled => {
            console.log(fullfilled);
          });
      },
      Promise.resolve() //fulfill promise and start chain
    )
    .then(() => {
      output("done");
      if ($(".panel-body").hasClass("bg-primary")) {
        $(".panel-body").removeClass("bg-primary");
      }
    });
}
