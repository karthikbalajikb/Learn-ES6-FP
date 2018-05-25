
// ES5 with function closures
var a2 = 100;
var b2 = 10;

var calculateBillWithClosures = (function() {
  return (function(fine) {
    if (fine) {
       return (function(){
            var b2 = 50;
            return a2 + b2;
        })()
    } else {
      return a2 + b2;
    }
  })
})();

console.log("ES5 closures: ", calculateBillWithClosures(true));
console.log("ES5 closures: ", calculateBillWithClosures(false));
