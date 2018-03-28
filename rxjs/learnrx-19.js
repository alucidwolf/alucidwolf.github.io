function f() {
  var videos = [
    {
      id: 65432445,
      title: "The Chamber"
    },
    {
      id: 675465,
      title: "Fracture"
    },
    {
      id: 70111470,
      title: "Die Hard"
    },
    {
      id: 654356453,
      title: "Bad Boys"
    }
  ];

  return videos.reduce(function(accumulatedMap, video) {
    console.log("acc map: " + accumulatedMap);
    var obj = {};

    // add video title to video id in new object
    obj[video.id] = video.title;

    // Object.assign() takes all of the enumerable properties from the object
    // listed in its second argument (obj) and assigns them to the object
    // listed in its firest argument (accumulatedMap)
    return Object.assign(accumulatedMap, obj);

    // use empty map as initial value instead of first item in list
  }, {});
}
