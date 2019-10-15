// leetcode ? 

var findTheDifference = function (s, t) {

    // string
    const a = "abc";
    console.log(a);
    console.log([...a]);

    // set
    let t1 = new Set(['r', 's', 't']);
    console.log(t1);
    console.log([...t1]);

    // array
    let t2 = ['x', 'y', 'z'];
    console.log(t2);
    console.log([...t2]);

    // map
    let t3 = new Map([['v', 1], ['w', 2], ['u', 3]]);
    console.log(t3);
    console.log([...t3]);

    // const b = { 'd':1 , 'e':2 };

    // console.log("x:", y);
};

var findTheDifference = function(s, t) {
    let s1 = new Set(s.split(''));
    let t1 = new Set(t.split(''));
    console.log("s1=",s1, ":t1=", t1);
    let y = [...t1].filter( x => !s1.has(x));
    return y;
};

let s = "ab";
let t = "aa";

const x = findTheDifference(s,t);
console.log(x);

