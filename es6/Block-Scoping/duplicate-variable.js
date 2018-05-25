// ES5
var i = 10;
var i = 100;

function callISquare() {
  return i * i;
}

console.log("Duplicate variable", callISquare());


/**********************************************************************/

let j = 10;
let j = 100;    // duplicate error

function callISquareWithES6() {
  return j * j;
}

console.log("Duplicate variable", callISquareWithES6());

