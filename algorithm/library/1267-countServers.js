// 1267. Count Servers that Communicate
// https://leetcode.com/problems/count-servers-that-communicate/

var countServers = function(grid) {
    // console.log(grid);
    let servers = [];
    for(let i=0;i<grid.length;i++){
        // console.log(grid[i]);
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1) servers.push([i,j]);
        }
    }
    let cs = [];

    servers.forEach( ([x,y]) => {
        let a1 = servers.filter(s => (s[0] ===x || s[1] ===y));
        if(a1.length >=2) cs.push([x,y]);
    });
    // console.log('connected servers:',cs);
    return cs.length;
};

// grid = [[1,0],[0,1]]; // 0
// grid = [[1,0],[1,1]]; // 3
grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]; //4

let x = countServers(grid);
console.log('x=', x);