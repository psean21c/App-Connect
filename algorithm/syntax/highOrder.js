
// Reference for High Order function
// https://eloquentjavascript.net/05_higher_order.html
// https://medium.com/@js_tut/higher-order-functions-in-javascript-732dc7a1952d

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(9));
console.log(greaterThan10(10));
console.log(greaterThan10(11));

let greaterThan9 = greaterThan(9);
console.log(greaterThan9(9));
console.log(greaterThan9(10));
console.log(greaterThan9(11));




