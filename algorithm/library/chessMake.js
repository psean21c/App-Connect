
let output = [];
let dirs = [[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]];

const check = (position, dir) => {
  position[0] += dir[0];
  position[1] += dir[1];
  if (position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8) {
    const found = queens.find(q => q[0] === position[0] && q[1] === position[1]);
    if (found) output.push(found);
    else check(position, dir);
  }
};

dirs.forEach(d => {
  check([king[0],king[1]], d);  
});

return output;
