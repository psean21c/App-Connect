// 41) Continue from 36)
'use strict';

var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');


// 40)  ES6 - Classes
// Syntactic Sugar
// A feature that only changes how you type something,
// but nothing changes under the hood.
// 'use strict';

// class Person {
// 	constructor(firstname, lastname) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 	}
	
// 	greet() {
// 		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
// 	}
// }

// var john = new Person('John', 'Doe');
// john.greet();

// var jane = new Person('Jane', 'Doe');
// jane.greet();

// console.log('=============================')
// console.log(john.__proto__);
// console.log(jane.__proto__);
// console.log(john.__proto__ === jane.__proto__);



// 39) Continue from 36)
// var util = require('util');

// function Person() {
// 	this.firstname = 'John';
// 	this.lastname = 'Doe';
// }

// Person.prototype.greet = function() {
// 	console.log('Hello ' + this.firstname + ' ' + this.lastname);
// }

// function Policeman() {
// 	Person.call(this);
// 	this.badgenumber = '1234';
// }

// util.inherits(Policeman, Person);
// var officer = new Policeman();
// officer.greet();
// console.log(officer.badgenumber);



// 38) call + apply
// var obj = {
// 	name: 'John Doe',
// 	greet: function() {
// 		console.log(`Hello ${ this.name }`);
// 	},
// 	bye: function(param1, param2) {
// 		console.log('Hello ' + param1 + ':' + param2);
// 	}
// }

// obj.greet();
// obj.greet.call({ name: 'Jane Doe'});
// obj.greet.apply({ name: 'Jane Doe'});

// // difference between call() and apply()
// obj.bye.call('a','b');
// //obj.bye.apply('a','b'); // TypeError: CreateListFromArrayLike called on non-object
// obj.bye.apply(['a','b']);

// obj.bye.call({ name: 'Simon Park'},'a','b');
// obj.bye.apply({ name: 'Simon Park'},['a','b']);

// 37) ES 6 (ECMAScript 2015)
//babeljs.io : In order to convert to a Web Browser.
// var name = 'John Doe';

// var greet = 'Hello ' + name;
// console.log(greet);

// // Template Literal:
// // A way to concatenate Strings in Javascript (ES6)
// var greet2 = `Hello ${ name }`;
// console.log(greet2);


// {
//     "compilerOptions": {
//         "target": "ES6"
//     }
// }


// 36) Inherit from EE (Event Emitter)

// var EventEmitter = require('events');
// var util = require('util');

// function Greetr() {
// 	this.greeting = 'Hello world!';
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
// 	console.log(this.greeting + ': ' + data);
// 	this.emit('greet', data);
// }

// var greeter1 = new Greetr();

// greeter1.on('greet', function(data) {
// 	console.log('Someone greeted!: ' + data);
// });

// greeter1.greet('Tony');


// 35) Object.create() + Prototypes
// // prototype chain
// var person = {
// 	firstname: '',
// 	lastname: '',
// 	greet: function() {
// 		return this.firstname + ' ' + this.lastname;
// 	}
// }

// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Doe';

// var jane = Object.create(person);
// jane.firstname = 'Jane';
// jane.lastname = 'Doe';

// console.log(john.greet());
// console.log(jane.greet());

// 34)
// // https://nodejs.org/dist/latest-v10.x/docs/api/events.html
// var Emitter = require('events');
// var eventConfig = require('./config').events;

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function() {
// 	console.log('Somewhere, someone said hello.');
// });

// emtr.on(eventConfig.GREET, function() {
// 	console.log('A greeting occurred!');
// });

// console.log('Hello!');
// emtr.emit(eventConfig.GREET);

// 33)
// var Emitter = require('./emitter');

// var emtr = new Emitter();
// emtr.on('greet', function(){
//     console.log('Hello!!');
// });

// emtr.on('greet', function(){
//     console.log('greet occured!!');
// });

// // console.log('Hello2!');
// emtr.emit('greet');


// 31) object properties and methods
// var obj = {
//     greet: 'Hello'
// }

// console.log(obj.greet);
// console.log(obj['greet']);

// var prop = 'greet';
// console.log(obj[prop]);

// // functions and arrays
// var arr = [];

// arr.push(function(){
//     console.log('Hello world 1');
// });

// arr.push(function(){
//     console.log('Hello world 2');
// });

// arr.push(function(){
//     console.log('Hello world 3');
// });

// // invoke
// arr.forEach(function(item) {
//     item();
// });