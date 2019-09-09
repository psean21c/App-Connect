// Closure vs. Callback
// Callback function: 
/**
 * 
 - a function you give to another function, to be run when the other function is finished.
 - a function passed to some other function, which we assume will be invoded at some point
 * */

// so .. the function you call (invoke), calls back by calling the function you gave it when it finishes.


 
  
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

// Solution-1
function callF2 () {
    var arr = [];

    for(var i=0;i<3;i++){
        let j = i;
        arr.push(function() {
            console.log(j);
        })
    }

    return arr;
}

var fs2 = callF2();
// fs2[0]();
// fs2[1]();
// fs2[2]();

callF2()[0]();
callF2()[1]();
callF2()[2]();


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


