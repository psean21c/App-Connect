//https://leetcode.com/submissions/detail/278248156/

var oddCells = function(n, m, indices) {
    let mapX = new Map();
    let mapY = new Map();
    indices.forEach(element => {
        // console.log('(debug)',element);
        let x = element[0];
        let y = element[1];
        if(mapX.get(x)) mapX.set(x,mapX.get(x)+1);
        else mapX.set(x,1);
        
        if(mapY.get(y)) mapY.set(y,mapY.get(y)+1);
        else mapY.set(y,1);
            
    });

    // const a = Array.from(mapX.entries()).filter(x => x[1] % 2 === 1).map(x => x[1]).reduce( (a,b) => a + b);
    const a = Array.from(mapX.entries()).filter(x => x[1] % 2 === 1).length;
    const b = Array.from(mapY.entries()).filter(x => x[1] % 2 === 1).length;
    
    total = (m * a) + (n * b) - 2 * ( a * b);
    return total;
};


//version 2
var oddCells = function(n, m, indices) {
    let mapX = new Map();
    let mapY = new Map();

    indices.forEach( ([x,y]) => {
        mapX.set(x, (mapX.get(x) || 0) + 1);
        mapY.set(y, (mapY.get(y) || 0) + 1);
    });
    const a = Array.from(mapX.entries()).filter(x => x[1] % 2 === 1).length;
    const b = Array.from(mapY.entries()).filter(x => x[1] % 2 === 1).length;
    
    return (m * a) + (n * b) - 2 * ( a * b);
};

// let n = 2, m = 3, indices = [[0,1],[1,1]]; // 6
// let n = 2, m = 2, indices = [[1,1],[0,0]]; // 0
let n = 3, m = 5, indices = [[1,1],[0,0],[1,2],[1,0]]; // 0

const x = oddCells(n,m,indices);
console.log(x);
