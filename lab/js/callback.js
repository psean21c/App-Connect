// Closure vs. Callback
// Callback function: 
/**
 * 
 - a function you give to another function, to be run when the other function is finished.
 - a function passed to some other function, which we assume will be invoded at some point
 * */

// so .. the function you call (invoke), calls back by calling the function you gave it when it finishes.

// function sayHi() {
//     var greet = 'Hi';
//     setTimeout(function(){
//         console.log(greet);
//     }, 3000);
//     console.log('Also done');
// }

// sayHi();

// function tellMeWhenDone(callback2) {
//     var a = 1000;
//     var b = 2000;
//     callback2();
// }

// tellMeWhenDone(function(){
//     console.log('I am done');
// });
    

// tellMeWhenDone(function(){
//     console.log('All done');
// });

/*** 
 * 
// Closure .. 
function createCounter() {
    let counter = 1
    const myFunction = function() {
      counter = counter + 1
      return counter
    }
    return myFunction
  }
  const increment = createCounter()
  const c1 = increment()
  const c2 = increment()
  const c3 = increment()
  console.log('example increment', c1, c2, c3)
 
  
// Callback

function callF () {
    var arr = [];

    for(var i=0;i<3;i++){
        arr.push(function() {
            console.log(i);
        })
    }

    return arr;
}

var fs = callF();
fs[0]();
fs[1]();
fs[2]();

// result ? 
// 3 3 3

// Global Execution Context vs. Execution Context

// // Solution-1
// function callF2 () {
//     var arr = [];

//     for(var i=0;i<3;i++){
//         let j = i;
//         arr.push(function() {
//             console.log(j);
//         })
//     }

//     return arr;
// }

// var fs2 = callF2();
// fs2[0]();
// fs2[1]();
// fs2[2]();


// Solution-2
function callF3 () {
    var arr = [];

    for(var i=0;i<3;i++){
        let j = i;
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}

var fs3 = callF3();
fs3[0]();
fs3[1]();
fs3[2]();


*/

let c = 4
const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)

let c2 = 4
function addX2(x) {
  return function(n) {
     return n + x
  }
}
const addThree2 = addX2(3)
let d2 = addThree(c2)
console.log('example partial application', d2)


const addY = y;
const addFour = addY(4);
console.log(addFour);