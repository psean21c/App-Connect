// console.log('start');
// console.log('end');

// 67-68) strict mode
// "use strict";

// var person;
// persom = {}; // Uncaught ReferenceError: persom is not defined
// console.log(persom);

function logNewPerson() {
    "use strict";
    
    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();


// 66) typeof / instancef
// var a = 3;
// console.log('a:' + typeof a);

// var b = "Hello";
// console.log(typeof b);

// var c = {};
// console.log(typeof c);

// var d = [];
// console.log('[]:' + typeof d); // weird!
// console.log(Object.prototype.toString.call(d)); // better!

// function Person(name) {
//     this.name = name;
// }

// var e = new Person('Jane');
// console.log('e:' + typeof e);
// console.log(e instanceof Person);
// console.log('e:' + e instanceof Person);

// console.log(typeof undefined); // makes sense
// console.log(typeof null); // a bug since, like, forever...

// var z = function() { };
// console.log('z:'+ typeof z);

// console.log(b instanceof String);
// console.log('string' instanceof String);

// console.log(a instanceof Number);
// console.log(1 instanceof Number);

// 65) Initialization
// var people = [
//     {
//         firstname: 'John',
//         lastname: 'Doe',
//         addrress: [
//             '330 Bay St.',
//             '222 Third St'
//         ]
//     },
//     {
//         firstname: 'Jane',
//         lastname: 'Doe',
//         addrress: [
//             '123 Bay St.',
//             '456 Third St'
//         ],
//         greet: function(){
//             return 'Hello';
//         }
//     }
// ]

// $ people[1].greet()


// 64) ES6 + classes
// Syntactic Sugar: A different way to type something ..
// that doesn't change how it works under the hood..

// class Person{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         return 'Hi ' + this.firstname;
//     }
// }

// var john = new Person('John','Doe');
// console.log(john);

// class BadPerson extends Person{
//     constructor(firstname, lastname){
//         super(firstname, lastname);
//     }
//     greet(){
//         return 'Yo ' + this.firstname;
//     }
// }

// var bad = new BadPerson('Bad','Guy');
// console.log(bad);

// 63) Object.create / Prototypal inheritance *********************************
// Polyfill: code that adds a feature which the engine may lack.
// if(!Object.creat){
//     Object.create = function(o){
//         if(this.arguments.length > 1) {
//             throw new Error('Object.create implementation' + 'only accepts the first parameters.');
//         }
//         function F(){}
//         F.prototype = o;
//         return new F();
//     }
// }

// var person = {
//     firstname : 'Default First',
//     lastname : 'Default Last',
//     greet: function (){
//         return 'Hi ' + this.firstname;
//     }
// }

// var john = Object.create(person);
// console.log(john);
// john.firstname = 'John';
// john.lastname = 'Doe';
// console.log(john);


// 62) arrays / for / in
// Array.prototype.myCustomerFeature = 'cool';

// var arr = ['John','Jane','Joe'];
// for(a in arr){
//     console.log(a + ':' + arr[a]);
// }
// console.log('-----------------------');

// // I get extra property, in the case of array, don't use for in
// for(var i = 0; i< arr.length;i++){
//     console.log(i + ':' + arr[i]);
// }

// 60) Built-in function 
// www.momentjs.com


// String.prototype.isLengthGreaterThan = function(limit){
//     return this.length > limit;
// }

// console.log("John".isLengthGreaterThan(5));


// 57-59) Function Constructor
// function Person(firstname, lastname) {
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log('This function is invoked');
//     //return {greeting: 'the way'};
// }

// Person.prototype.getFullName = function(){
//     return this.firstname + ' ' + this.lastname;
// }

// var john = new Person();
// console.log(john);

// var jane = new Person('Jane','Mill');
// console.log(jane);

// console.log(jane.getFullName());

// var tony = Person('Tony','Makhoul');
// console.log(tony);

// 56) reflection
// var person = {
//     firstname: 'Default',
//     lastname: 'Last',
//     getFullName: function(){
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// var john = {
//     firstname: 'John',
//     lastname: 'Doe'
// }

// john.__proto__ = person;

// // for(var prop in john) {
// //     //if(john.hasOwnProperty(prop))
// //     console.log(prop + ' ' + john[prop]);
// // }

// var jane = {
//     addrress: '111 Bay St.',
//     getFullName: function(){
//         return this.lastname + ' ' + this.firstname;
//     }
// }

// var jim = {
//     getFirstname: function(){
//         return firstname;
//     }
// }

// _.extend(john);//john,jane,jim
// console.log(john);


// 55) Object
// var a = {};
// var b = function(){};
// var c = [];

// a.__proto__
// b.__proto__.__proto__


// 54) Prototype
// var person = {
//     firstname: 'Default',
//     lastname: 'Last',
//     getFullName: function(){
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// var john = {
//     firstname: 'John',
//     lastname: 'Doe'
// }

// john.__proto__ = person;
// console.log(john);
// console.log(john.getFullName());
// console.log(john.firstname);

// var jane = {
//     firstname: 'Jane'
// }

// jane.__proto__ = person;
// console.log(jane);
// console.log(jane.getFullName());
// console.log(jane.firstname);

// 53) Classical vs. Prototype Inheritance
// Prototypal Inheritance


// 51-52) F.P. (Functional Programming) ******************************

// var arr1 = [1,2,3];
// console.log(arr1);

// var arr2 = [];
// for(var i=0;i<arr1.length;i++){
//     arr2.push(arr1[i] *2);
// }

// console.log(arr2);

// function mapForEach(arr, fn) {
//     var newArr = [];
//     for(var i=0;i<arr.length;i++){
//         newArr.push(
//             fn(arr[i])
//         )
//     };
//     return newArr;
// }
// var arr1 = [1,2,3];
// var arr2 = mapForEach(arr1, function(item){
//     return item * 2;
// });

// var arr3 = mapForEach(arr1, function(item){
//     return item > 2;
// });
// console.log(arr2);
// console.log(arr3);

// var checkPastLimit = function(limiter,item){
//     return item > limiter;
// }

// var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1,0));
// console.log(arr4);

// var checkPastLimit = function(limiter){
//     return function(limiter,item){
//         return item > limiter;
//     }.bind(this, limiter);
// };

// var arr5 = mapForEach(arr1, checkPastLimit(2));
// console.log(arr5);

// http://underscorejs.org
// lodash.com

// var arr1 = [1,2,3];
// var arr6 = _.map(arr1, function(item){ return item * 3});
// console.log(arr6);

// var arr7 = _.filter([2,3,4,5,6,7,8], function(item) {return item %2 ===0});
// console.log(arr7);

// 50) call, apply, bind, curry ******************************************
// Function is a special type of object
// call() , apply(), bind() 
// name(optional), code

// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// }

// var logName = function(lang1, lang2){
//     console.log('logged:' + this.getFullName);
//     console.log('arguments:' + lang1 + ' ' + lang2);
//     console.log('-----------------------');
// };
// //.bind(person)


// var logPersonName = logName.bind(person);
// // console.log(logPersonName);
// // logPersonName();

// logName();

// logPersonName('en');

// logName.call(person,'en','es');
// //app.js:35 Uncaught TypeError: CreateListFromArrayLike called on non-object
// //logName.apply(person,'en','es'); 
// logName.apply(person,['en','es']); 

// // Function Currying
// // Creating a copy of a function, but with some preset parameters
// // very useful in mathematical situations
// function multiple(a,b) {
//     return a*b ;
// }

// var multiplebyTwo = multiple.bind(this,2);
// console.log(multiplebyTwo(5));


// 49) Closure + Callback ****************************
// function sayHiLater(){
//     var greeting = 'Hi';
//     setTimeout(function() {
//         console.log(greeting);
//     },3000);
    
// }


// sayHiLater();
// // jQuery uses function expression and 1st-class functions!
// // $("button").click(function(){

// // });

// // Callback function:
// // A function you give to another function, 
// // to be run when the other function is finished
// // So the function you call (invoke), 'call back'
// // by calling the function you gave it when it finishes.

// function callbackDone(callback){
//     var a = 1000;
//     var b = 1000;
//     callback();
// }

// callbackDone(function(){
//     console.log('Done1');
// });

// callbackDone(function(){
//     // alert('Done2');
//     console.log('Done2');
// });



// 48) Function Factory
// function makeGreeting(language){

//     return function(firstname, lastname){
//         if(language ==='en'){
//             console.log('Hello ' + firstname + ' ' + lastname);
//         }
//         if(language ==='ko'){
//             console.log('An-Niong ' + firstname + ' ' + lastname);
//         }
//     }
// }

// var greetEnglish = makeGreeting('en');
// var greetKorean = makeGreeting('ko');

// greetEnglish('Simon','Park');
// greetKorean('Sungmin','Park');

// 46-47) Closure ***********************************
// function greet(whatever){

//     return function(name){
//         console.log(whatever + ' ' + name)
//     }
// }

// greet('good')('Tony');

// var sayHi = greet('Hi');
// sayHi('There');

// function buildFun(){
//     var arr = [];
//     for(var i=0; i<3;i++){
//         arr.push(function(){
//                 console.log(i);
//         });
//     }
//     for(var j=0; j<3;j++){
//         console.log(j + "" + arr[j]);
//     }

//     return arr;
// }

// var fs = buildFun();
// console.log(fs);

// // fs[0]();
// // fs[1]();
// // fs[2]();

// function buildFun2(){
//     var arr = [];
//     for(var i=0; i<3;i++){
//         // 1) use temp variable let
//         // let j = i;
//         // arr.push(function(){
//         //         console.log(j);
//         // });
//         // 2) use IIFE
//         arr.push(
//             (function(j){
//                 return function(){
//                     console.log(j);
//                 }
//             })(i)
//         )
//     }
//     return arr;
// }

// var fs2 = buildFun2();

// fs2[0]();
// fs2[1]();
// fs2[2]();



// 45)
// (function greet(name){
//     var greeting = 'Hello';
//     console.log('Hello ' + name);
// }('John'));

// console.log(greeting);

// (function greet(global, name){
//     var greeting = 'Hello';
//     global.greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// }(window,'John'));

// console.log(greeting);

// 44) IIFE (Immediately Invoked Function Expressions) **************
// function greet(name){
//     console.log('Hello ' + name);
// }
// greet();

// var greetFunc = function(name) {
//     console.log('Hello ' + name);
// };
// greetFunc('haha');

// // using IIFE
// var greetFunc2 = function(name) {
//     // console.log('Hello ' + name);
//     return 'Hello ' + name;
// }('test');

// console.log(greetFunc);
// console.log(greetFunc2);
// // console.log(greetFunc2()); // spark
// // app.js:20 Uncaught TypeError: greetFunc2 is not a function

// var firstname = 'John';
// (function(name) {
//     console.log('IIFE ' + name);
//     return 'Hello ' + name;
// }(firstname));
// (function(name) {
//     console.log('IIFE-2 ' + name);
//     return 'Hello ' + name;
// })(firstname);

// 43) whitespace
// var firstname, lastname,language;

// var person = {
//     firstname : 'John',
//     lastname : 'Doe'
// }

// console.log(person);

// 42) Automatic Semicolon Insertion
// function getPerson(){
//     return 
//     {
//         firstname: 'Tony'
//     }
// }

// console.log(getPerson());



// 40) Function overloading
// function greet(firstname, lastname,language){
//     language = language || 'en';

//     if(language === 'en') {
//         console.log('Hello ' + firstname + ' ' + lastname);
//     }

//     if(language === 'es') {
//         console.log('Hola ' + firstname + ' ' + lastname);
//     }
    
// }

// greet('John','Doe','en');
// greet('John','Doe','es');


// 39) arguments
// function greet(firstname, lastname,language = 'en', ... othersss){

//     if(arguments.length ===0) {
//         console.log('Missing parameters');
//         return;
//     }
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments);
//     console.log('arg0=' + arguments[0]);
//     console.log('-------------------');
// }

// greet();

// greet('John');
// greet('John','Doe');
// greet('John','Doe','es');

// 38) Array ******
// var arr = new Array();
// console.log(arr);

// var arr2 = [
//     1, 
//     false, 
//     'a',
//     {
//         name:'Tony',
//         address: '111 Main St.'
//     },
//     function a(name){
//         var greeting = 'hello';
//         console.log(greeting + " " +  name);
//     }
// ];
// console.log(arr2);
// arr2[4]();
// arr2[4](arr2[3].name); // spark

// 37) this.
// function a(){
//     console.log(this);
//     this.newvariable = 'hello';
// }

// var b = function () {
//     console.log(this);
// }

// a();
// console.log(newvariable);
// b();

// var c = {
//     name: 'The c company',
//     log: function() {
//         this.name = 'Updated c company';
//         console.log(this);

//         var setname = function(newname) {
//             this.name = newname;
//         }
//         setname('Updated again!');
//         console.log(this);
//     },
//     log2: function() {
//         var self = this;
//         self.name = 'Updated c company';
//         console.log(self);

//         var setname = function(newname) {
//             self.name = newname;
//         }
//         setname('Updated again!');
//         console.log(self);
//     }    
// }

// c.log();
// c.log2();

// 36) by value vs. by reference
// all primitive types are by value, all objects are by reference..
// var a = 1;
// var b = a;
// a = 3;
// console.log(a);
// console.log(b);

// var c = {greeting: 'hi'};
// var d = c;
// c.greeting = 'hello'; // mutate

// console.log(c);
// console.log(d);

// function changeGreeting(obj){
//     obj.greeting = 'Hola';
// }

// console.log('----------------------');

// changeGreeting(d);
// console.log(c);
// console.log(d);

// console.log('----------------------');

// c = {greeting: 'howdy'};
// console.log(c);
// console.log(d);

// 35) F.S. (Function Statement) vs. F.E. (Function Expression)
// Expression = A unit of code that results in a value,
// It doesn't have to save to a variable.
// However, statement does NOT return a value
// // --------------------------
// greet();

// // this is statement
// function greet(){
//     console.log('hi');
// }

// //Uncaught TypeError: anonymousGreet is not a function
// // anonymousGreet();

// // this is expression, 
// //function expression is not hoisted
// var anonymousGreet = function() {
//     console.log('anonymousGreet !!');
// }

// function log(a){
//     a();
// }



// log(function() {
//     console.log('what is ?');
// });

// 34) Function and Object
// First Class Functions: Assign them to variables, pass them around, 
// create them on the fly.
// function greet(){
//     console.log('hi');

// }

// greet.language = 'english';
// console.log(greet);
// console.log(greet.language);


// 33) JSON : JavaScript Object Notation
// var objectLiteral = {
//     firstName: 'Tony', 
//     isAProgrammer: true
// }

// console.log(objectLiteral);

// //console.log(JSON.stringify(objectLiteral));

// var jsonValue = JSON.parse('{ "firstName" : "Mary",    "isAProgrammer": false}');
// console.log(jsonValue);

// 32) Namespace
// var greet = 'Hello';
// var greet = 'Hola';

// var english = {
//     grettings: {
//         basic: 'Hello'
//     }
// };
// var spanish = {};

// // english.grettings.greet = 'Hello';
// // Uncaught TypeError: Cannot set property 'greet' of undefined

// english.greet = 'Hello';
// spanish.greet = 'Hola';

// console.log(english);

// 30) Object and DOT(.)
// var person = new Object();

// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "111 Main St";

// console.log(person.address.street);

// 31) Object and literal
// var Tony = {
//     firstName: 'Tony', 
//     lastName:'Alicea',
//     address: {
//         street: '111 Main st.',
//         city: 'Toronto',
//         state: 'Ontario'
//     }
// };

// function greet(person){
//     console.log('Hi ' + person.firstName);
//     console.log('There: ' + person.address.street);
// }

// greet(Tony);


