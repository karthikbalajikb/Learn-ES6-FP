// ES5
var a = 100;
var b = 10;

function calculateBill(fine) {
  if (fine) {
    var b = 50; // hoisting occurs bcoz of function scope
    return a + b;
  }
  return a + b;
}

console.log("ES5: ", calculateBill(true));
console.log("ES5: ", calculateBill(false));

/*********************************************************************/

// ES6
let a1 = 100;
let b1 = 10;

function calculateBillWithES6(fine) {
  if (fine) {
    let b1 = 50; // No hoisting occurs bcoz of block scoping feature of ES6 with `let`
    return a1 + b1;
  }
  return a1 + b1;
}

console.log("ES6: ", calculateBillWithES6(true));
console.log("ES6: ", calculateBillWithES6(false));
