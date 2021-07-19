// // forEach 1個1個取り出して処理

// let colors = ["red", "blue", "green"];

// colors.forEach(function (color) {
//   console.log(color);
// });

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

function adder(number: number) {
  sum += number;
}

// numbers.forEach(function (number) {
//   sum += number;
// });

numbers.forEach(adder);

console.log(sum);
