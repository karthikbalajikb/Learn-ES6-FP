var a = [];
(function() {
  for (var i = 0; i < 5; ++i) {   // change to let to see it working . change to var to see the issue
    a.push(function() {
      return i;
    });
  }
})();

console.log(
  a.map(function(f) {
    return f();
  })
);

var funcs = [];
for (var i = 0; i < 3; i++) {  // change to let to see it working . change to var to see the issue
  funcs[i] = function() {
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j](); 
}
