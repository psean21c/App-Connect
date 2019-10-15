
let hdxFile = new Set(['A','B','C','D']);
let hdxDynamo = new Set(['A','B','X','C']);

let diffMinus = new Set([...hdxDynamo].filter(i => !hdxFile.has(i)));
let diffPlus = new Set([...hdxFile].filter(i => !hdxDynamo.has(i)));
console.log(diffMinus);
console.log(diffPlus);

// let a = new Set([1,2,3]);
// let b = new Set([4,3,2]);
// let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference);

/**
 * https://github.com/psean21c/monk/tree/master/src/com/leetcode
 * 
 * LeetCode 525 (week20) 
 * https://github.com/psean21c/monk/blob/master/resource/java/algo/minmax/ContiguousArray.md
 * 
 * https://github.com/psean21c/AlgorithmLib/tree/master/useMax
 * 
 * Whiteboard animation 
 * https://www.youtube.com/watch?v=ft8IPX6RXuo
 */