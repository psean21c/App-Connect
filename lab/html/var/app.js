// difference between let vs. var


let a = "a";
var b = "b";

// 1) same
console.log(a);
console.log(b);

// 2) 1st difference
console.log(window.a);
console.log(window.b);

// 3) 2nd difference 
function iterates(){

    for(let c =0; c <5; c++){}
    // console.log(c);

    for(var d =0; d <5; d++){}
    //console.log(d);
}

iterates();

// 4) 3rd difference
// let a1 = 'foo';
// let a1 = 'bar';

var b1 = 'bar';
var b1 = 'bor';
console.log(b1);

var b2 = 'bar';
b2 = 'bor';
console.log(b2);

const c = 'c1';
c = 'c2';
console.log(c);
