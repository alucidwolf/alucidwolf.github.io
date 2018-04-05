var Book = function(name, price) {
  var priceChanging = [];
  var priceChanged = [];
  this.name = function(val) {
    return name;
  };

  this.price = function(val) {
    if (val !== undefined && val !== price) {
      for (var i = 0; i < priceChanging.length; i++) {
        if (priceChanging[i](this, val)) {
          return price;
        }
      }
      price = val;
      for (var i = 0; i < priceChanged.length; i++) {
        priceChanged[i](this);
      }
    }
    return price;
  };

  this.onPriceChanging = function(cb) {
    priceChanging.push(cb);
  };
  this.onPriceChanged = function(cb) {
    priceChanged.push(cb);
  };
};

var book = new Book("Javascript", 23.99);

console.log("The book name is: " + book.name());
console.log("The price of the book is: $" + book.price());

book.onPriceChanging(function(b, price) {
  if (price > 100) {
    console.log("Price too high");
    return false;
  }
  return true;
});

book.onPriceChanged(function(b) {
  console.log("Book price changed to: $" + b.price());
});

book.price(19.99);
book.price(200);
