const url = "https://randomuser.me/api";

let data = {
  name: "Sara"
};

let fetchData = {
  method: "POST",
  body: data,
  headers: new Headers()
};

fetch(url, fetchData).then(function() {
  // handle response from server
});
