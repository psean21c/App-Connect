
// 1) scope of let vs. constant

// 2) coercion
var answer = 1 + 2;
console.log(answer);

var answer = 1 + '2';
// console.log(answer);

// 3) coercion + asociativity
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

console.log(3 > 2 > 1); // true or false ?

console.log(3 < 2 < 1); // true or false ?

console.log(1 < 2 < 3); // true or false ?

console.log(true > 1); // 
console.log(false < 1); // 

Number(undefined) //
Number(null)
Number(true)
Number(false)

// 

