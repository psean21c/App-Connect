
// reference : def
// http://javascript.info/function-expressions-arrows

let yes = () => console.log("You agreed.");
let no = () => console.log("You Dont.");

let ask = (num) => (num === 1) ? yes()  : no();

ask(1);
ask(2);


// reference : issue - how 'this' works with arrow "=>" function
// https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/

this.test = "attached to the module";

var foo = {
    test: "attached to an object"
};

// a method to create methods
foo.method = function (name, cb) {
    // this[name] = cb;
    this[name] = cb.bind(this);
};

// use an arrow function and get lexical analysis of "this"
// not what you expected, maybe?
// <case-1> 
foo.method("bar", () => {
    console.log(this.test);
});
// <case-2>
// foo.method("bar", function () {
//     console.log(this.test);
// });

foo.bar();
