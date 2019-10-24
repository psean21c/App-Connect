// reference
// http://es6-features.org/#PromiseUsage
// https://medium.com/@theflyingmantis/callbacks-vs-promises-and-basics-of-js-80d3d1515e81
// https://javascript.info/promise-basics

/*** 
// <case-1>
function callAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}`), timeout)
    })
};

callAfterTimeout("text\n", "Foo\n", 300)
    .then((msg) => callAfterTimeout(msg, "Bar\n", 200))
    .then((msg) => { console.log(`done after 300ms:${msg}`) })

*/

// <case-2>
// var promise = new Promise(function (resolve, reject) {
//     // do a thing, possibly async, then…everything turned out fine 
//     try{
//         reject(Error("It broke"));
//         // resolve("continue!!!");
//     } catch (e) {
//     }
// });

// promise.then(function (result) {
//     console.log(result); // "Stuff worked!"
// }, function (err) {
//     // console.log(err); // Error: "It broke"
// });

let abc = function() {
    console.log("abc");
}
let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    console.log("promise");

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve(abc(), "done"), 1000);
});
