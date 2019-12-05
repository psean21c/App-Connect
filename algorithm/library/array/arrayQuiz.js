
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
