

// function hoist() {
//     a = 20;
//     var b = 100;
//     c = a + b;
//     console.log('hoist fn:' + c );
//   }

// hoist();

// console.log(a);
// // console.log(b);
// console.log(c);
// 'use strict';

// hoisted(); 

// var hoisted = function hoist() {
//     console.log('This function has been hoisted.');
//   };

// function greet(whatso) {
//   return function(name){
//     console.log(whatso + ':' + name);
//   }
// }

// // greet('Hi')('Tony');

// const greet2 = greet('Hi');
// greet2('Tom');

// Closure !!
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
 
 


// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


// Node : question
/*** 
 * 
https://www.fullstack.cafe/blog/7-hardest-nodejs-interview-questions-and-answers

* 
*/
