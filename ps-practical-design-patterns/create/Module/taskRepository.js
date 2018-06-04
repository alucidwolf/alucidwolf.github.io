var repo = function() {
  // keep db connections private to this function
  var db = {};

  // operate on data returned from db
  var get = function(id) {
    console.log("Getting task " + id);
    return {
      name: "new task from db"
    };
  };

  // operate on data returned from db
  var save = function(task) {
    console.log("Saving " + task.name + " to the db");
  };

  // return methods like this for easy reference aka revealing
  return {
    get: get,
    save: save
  };
};

// execute on export has advantages
module.exports = repo();
