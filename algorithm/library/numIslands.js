
//200. Number of Islands
/**
 * points
 * 1) create the same size of 2D array : visited
 * 2) update (visited[i][j] = true) inside dfs()
 * 3) how to count ...
 */
var numIslands = function(grid) {

    if(!grid.length) return 0;

    // point-1
    const visited = [...Array(grid.length)].map(_ => Array(grid[0].length).fill(false));

    let count = 0;
    for(let i =0; i< grid.length; i++) {
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] === '1' && visited[i][j] ===false) {
                //  point-3
                dfs(grid,visited,i,j);
                count++;
            }
        }
    }
    // console.log(count);
    return count;
};

let dfs = (grid,visited, i, j) => {
    // console.log('dfs called');
    if(!valid(grid,visited,i,j)) return;

    // points 2 : set to visited
    visited[i][j] = true;

    dfs(grid,visited,i+1,j);
    dfs(grid,visited,i-1,j);
    dfs(grid,visited,i,j+1);
    dfs(grid,visited,i,j-1);
    
};

let valid = (grid,visited, i, j) => {
    // console.log('valid called');
    if(i >= grid.length || i < 0) return false;
    if(j >= grid[i].length || j <0) return false;

    if(grid[i][j] ==='0') return false;
    if(visited[i][j] === true) return false;

    return true;

};

// let grid = [['1','1','1','1','0'],
//             ['1','1','0','1','0'],
//             ['1','1','0','0','0'],
//             ['0','0','0','0','0']];   // 1
let grid = [['1','1','0','0','0'],
            ['1','1','0','0','0'],
            ['0','0','1','0','0'],
            ['0','0','0','1','1']]; // 3

let x = numIslands(grid);
console.log(x);

/**

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

 * Given a 2D grid map of '1's (land) and '0's (water), 
 * count the number of islands. An island is surrounded by water 
 * and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 */
