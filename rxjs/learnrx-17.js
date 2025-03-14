// Retrieve the largest rating
function d() {
  var ratings = [2, 3, 4, 1, 5];

  return ratings.reduce(function(acc, curr) {
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  });
}

////////////

// Retrieve url of the largest boxart
function e() {
  var boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    },
    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    },
    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    },
    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
  ];

  return boxarts
    .reduce(function(acc, curr) {
      if (acc.width * acc.height > curr.width * curr.height) {
        return acc;
      } else {
        return curr;
      }
    })
    .map(function(boxart) {
      return boxart.url;
    });
}
