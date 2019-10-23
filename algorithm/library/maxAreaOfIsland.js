

const dfs = (grid, r, c, res, area = { count: 0 }) => {
    if (!grid[r] || !grid[r][c]) return;
    res.count = Math.max(res.count, area.count += grid[r][c])
    grid[r][c] = 0
    dfs(grid, r, c - 1, res, area)
    dfs(grid, r, c + 1, res, area)
    dfs(grid, r - 1, c, res, area)
    dfs(grid, r + 1, c, res, area)
};

const maxAreaOfIsland = (grid) => {
    const res = {count: 0};
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            dfs(grid,i,j,res);
        }
    }
    return res;
};

// const grid = 
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]];

 const grid = 
 [[0,0,1,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,1,1,0]];

 let x = maxAreaOfIsland(grid);
 console.log("count>>",x.count);

