"use strict";
// map 新しい配列に入れてくれる。returnが必要
// const numbers = [1, 2, 3];
// let doubled = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubled);
let cars = [
    { type: '軽自動車', price: '安い' },
    { type: '高級車', price: '高い' },
];
let prices = cars.map(function (car) {
    return car.price;
});
console.log(prices);
// あるオブジェクトの配列から特定のプロパティを抜き取ってくる関数
function pluck(array, property) {
    return array.map(function (element) {
        return element[property]; // propertyで指定されたプロパティの値を取得する！
    });
}
