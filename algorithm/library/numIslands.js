
//200. Number of Islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    console.log(grid);
};

let grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']];   // 1
// let grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]; // 3

let x = numIslands(grid);
console.log(x);

/**
 * 
Input:
11110
11010
11000
00000
Output: 1

11000
11000
00100
00011

Output: 3

Given a 2d grid map of '1's (land) and '0's (water)

 */