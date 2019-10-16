
// reference
// http://javascript.info/function-expressions-arrows

let yes = () => console.log("You agreed.");
let no = () => console.log("You Dont.");

let ask = (num) => (num === 1) ? yes()  : no();

ask(1);
ask(2);

