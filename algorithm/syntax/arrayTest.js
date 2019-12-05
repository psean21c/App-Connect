var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (each, index) {
    console.log(index + 1 + ". " + each); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

var arr = [3, 5, 7];
arr.foo = "hello";

console.log("arr>>",arr);

for (var i in arr) {
   console.log(i, '\t',arr[i]); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs "3", "5", "7"
}

// Initialize array
let grid = [[0,0,0],[0,0,0]];
console.log(Array(grid.length).fill(false));
console.log( Array(5).fill(0).map(x => Array(3).fill(false)));
console.log([...Array(grid.length)].map(_ => Array(grid[0].length).fill(false)));

// ref : https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements-in-jav


// make new list [1,2,3,4,5,6, ... n]
let a1 = Array.from(Array(n).keys()).map( a => a + 1);
