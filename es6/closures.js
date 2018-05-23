//ES5

function counter() {
  var count = 0;
  return (count += 1);
}

console.dir(counter());
console.dir(counter());
console.dir(counter());

// Using Closures

var counterWithClosure = (function(i) {
  var count = i;
  return function() {
    return (count += 1);
  };
})(10);

console.dir(counterWithClosure());
console.dir(counterWithClosure());
console.dir(counterWithClosure());


// Using let

