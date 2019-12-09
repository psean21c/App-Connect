
// 905. Sort Array By Parity
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    for(let i=0;i<A.length;i++) {
        if(A[i]%2 ==0) even.push(A[i])
        else odd.push(A[i])
    }
    // console.log(even,', odd=',odd);
    return [...even,...odd];
};

let a = [3,1,2,4]; //[2,4,3,1]
let x = sortArrayByParity(a);
console.log(x);

// 922. Sort Array By Parity II

var sortArrayByParityII = function(A) {

    let a1 = A.filter(a => a%2 ==0);
    let a2 = A.filter(a => a%2 ==1);
    let b1 = [];
    for(let i=0;i<a1.length;i++){
        b1.push(a1[i],a2[i]);
    }
    return b1;
};

let a = [4,2,5,7]; //[4,5,2,7]
sortArrayByParityII(a);


// 950. Reveal Cards In Increasing Order
var deckRevealedIncreasing = function(deck) {

    let len = deck.length;
    deck.sort( (a,b) => (b -a));

    let c1 = [];
    for(let i=0;i<len;i++){
        let high = deck.shift();
        let pop;
        if(c1.length == 0) {
            c1.unshift(high);
        } else {
            pop = c1.pop();
            c1.unshift(high,pop);
        }
    }
    return c1;
};

let a= [17,13,11,2,3,5,7]; //  [2,13,3,11,5,17,7]
let x = deckRevealedIncreasing(a);
console.log(x);

// 1122. Relative Sort Array
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

var relativeSortArray = function(arr1, arr2) {
    let merge = [];
    let difference = arr1.filter(x => !arr2.includes(x));
    difference.sort((a,b) => (a-b));
    // console.log('delta:',difference);
    arr2.forEach(element => {
        let get = arr1.filter( a => (a ==element));
        merge.push(...get);
    });
    merge.push(...difference);
    return merge;
};

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]; // [2,2,2,1,4,3,3,9,6,7,19]
let x = relativeSortArray(arr1,arr2);
console.log('x=',x);

// 1185. Day of the Week

var dayOfTheWeek = function(day, month, year) {

    var date = new Date(year, month-1, day);
    var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday");
    
    console.log(weekday[date.getDay()]);
    return weekday[date.getDay()];

};

dayOfTheWeek(31,8,2019);
dayOfTheWeek(1,9,2019);
dayOfTheWeek(15,8,1999);
dayOfTheWeek(15,8,1993);

// dayOfTheWeek(28,2,2016);
// dayOfTheWeek(29,2,2016);
// dayOfTheWeek(1,3,2016);

// 1051. Height Checker
// Don't need to think too over complicated.. 
var heightChecker = function(heights) {

    return [...heights].sort((a,b) => (a-b)).filter( (e,i) => e != heights[i]).length; // 1)

};

let a = [1,1,4,2,1,3]; // 3

let x = heightChecker(a);
console.log(x);

// 867. Transpose Matrix
// Othere solution;
// return A[0].map((_,  i) => A.map(b => b[i]));
// return Array(A[0].length).fill([]).map((_, i) => {
//     return Array(A.length).fill([]).map((_, n) => A[n][i])
// })

var transpose = function(A) {
    let m = A.length;
    let n = A[0].length;
    // console.log(A,'>> col=',m,':row=', n);
    let p = Array.from(Array(n), () => new Array(m));
    for(let i=0; i<m;i++) {
        for(let j=0;j<n;j++) {
            p[j][i] = A[i][j];
        }
    }
    return p;
};

let a =  [[1,2,3],[4,5,6],[7,8,9]]; // [[1,4,7],[2,5,8],[3,6,9]]
let b =  [[1,2,3],[4,5,6]]; // [[1,4],[2,5],[3,6]]
let c = [[1],[2],[3],[4]];

transpose(c);
transpose(a);
transpose(b);


// 985. Sum of Even Numbers After Queries

var sumEvenAfterQueries_v2 = function(A, queries) {
    if(A.length ==0) return null;

    let sum = [];
    queries.forEach( e => {
        A.splice(e[1],1,A[e[1]] + e[0]);
        let val = A.filter(a => (a % 2) ==0);
        if(val.length == 0) sum.push(0);
        else sum.push(val.reduce( (b,c) => b+c));
    });

    return sum;
};



var sumEvenAfterQueries = function(A, queries) {
    if(A.length ==0) return null;

    let ans = [];
    let sum = 0;
    let even = A.filter( a => (a % 2 ==0));
    if(even.length !=0) sum = even.reduce( (a,b) => (a + b));

    queries.forEach( (e,i) => {
        if(A[e[1]] % 2 ==0) sum -= A[e[1]];
        A[e[1]] += e[0];
        if(A[e[1]] % 2 ==0) sum += A[e[1]];
        ans.push(sum);        
    });

    return ans;
};

let A1 = [1,2,3,4], queries1 = [[1,0],[-3,1],[-4,0],[2,3]]; //[8,6,2,4]
let A2 = [1], queries2 = [[4,0]]; //[0]
let A3 = [1], queries3 = [[5,0]]; //[6]
let A4 = [5,1], queries4 = [[0,1],[4,0]]; // [0,0];


console.log(sumEvenAfterQueries(A1,queries1));
console.log(sumEvenAfterQueries(A2,queries2));
console.log(sumEvenAfterQueries(A3,queries3));
console.log(sumEvenAfterQueries(A4,queries4));


