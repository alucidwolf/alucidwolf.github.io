const dog = function dog() {
  const sound = "woof";
  return {
    talk: function() {
      console.log(sound);
    }
  };
};

const barker = function barker(state) {
  return {
    bark: function bark() {
      return console.log("woof, " + state.name);
    }
  };
};

const driver = function driver(state) {
  return {
    drive: function drive() {
      return (state.position = state.position + state.speed);
    }
  };
};

const dogDriver = function dogDriver(name) {
  let state = {
    name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, barker(state), driver(state));
};

const peterPiper = dogDriver("Peter Piper");
peterPiper.bark();
peterPiper.drive();

const scruffy = dog();
scruffy.talk();
