/*
When you inherit from a delegate prototype, the new object gets a reference to the prototype.

When you try to access a property on the new object, it checks the object’s own properties first. If it doesn’t find it there, it checks the `[[Prototype]]`, and so on up the prototype chain until it gets back to `Object.prototype`, which is the root delegate for most objects.

Method delegation can preserve memory resources because you only need one copy of each method to be shared by all instances.
*/

// NOT RECOMMENDED CLASSICAL INHERITANCE, BUT COMMONLY USED ES6
class Greeter {
  constructor(name) {
    this.name = name || "John Doe";
  }
  hello() {
    return "Hello, I am " + this.name;
  }
}
const george = new Greeter("George");
const msg = george.hello();
console.log(msg);

// NOT RECOMMENDED CLASSICAL INHERITANCE, BUT COMMONLY USED ES5
function Greeter(name) {
  this.name = name || "John Doe";
}
Greeter.prototype.hello = function hello() {
  return "Hello, I am " + this.name;
};
var george = new Greeter("George");
var msg = george2.hello();
console.log(msg);

//////////////////////
//////////////////////
//////////////////////

// USING FACTORY FUNCTION AND 'OBJECT.CREATE()'
// not a constructor, it is a factory
// not very good for storing state, can avoid property delegation by using 'Object.create(null)'
const proto = {
  hello() {
    return `Hello, I am ${this.name}`;
  }
};

const greeter = name =>
  Object.assign(Object.create(proto), {
    name
  });

const george = greeter("George");
const msg = george.hello();
console.log(msg);

//////////////////////
//////////////////////
//////////////////////

// CONCATENTATIVE INHERITANCE
// process of copying the properties from one object to another
// without retaining a reference between the two object
const proto = {
  hello: function hello() {
    return `Hello I am ${this.name}`;
  }
};

const george = Object.assign({}, proto, { name: "George" });
const msg = george.hello();
console.log(msg);

//////////////////////
//////////////////////
//////////////////////

// FUNCTIONAL INHERITANCE
// do not confuse with functional programming
