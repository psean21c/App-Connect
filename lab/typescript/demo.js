var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello !!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
