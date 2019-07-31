function myFunc(x, y, ...params) { // used rest operator here
    console.log(x);
    console.log(y);
    console.log(params);
  }
  
var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc(...inputs); 

console.log(x);
var x = 1;
//let x=5;
console.log(x);

// 
// https://jscomplete.com/learn/lab-functions-scopes/1lx9-var-vs-let
var x = 5; 
console.log(x, "\n"); 

// calling y after definition  
let y = 10; 
console.log(y, "\n"); 

// calling var z before definition will return undefined 
console.log(z, "\n"); 
var z = 2; 

// calling let a before definition will give error 
let a = 3;
console.log(a); 
//let a = 3; 

  // https://dev.to/sagar/three-dots---in-javascript-26ci