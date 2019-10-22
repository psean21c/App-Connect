

var queensAttacktheKing = function(queens, king) {
  output = [];

  const check = (position, dir) => {
    switch(dir) {
      case 't':
        position[0]--;
        break;
      case 'l':
        position[1]--;
        break;
      case 'r':
        position[1]++;
        break;
      case 'b':
        position[0]++;
        break;
      case 'tl':
        position[0]--;
        position[1]--;
        break;
      case 'tr':
        position[0]--;
        position[1]++;
        break;
      case 'bl':
        position[0]++;
        position[1]--;
        break;
      case 'br':
        position[0]++;
        position[1]++;
        break;
    }
    if (position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8) {
      const found = queens.find(q => q[0] === position[0] && q[1] === position[1]);
      if (found) output.push(found);
      else check(position, dir);
    }
  };

  check([king[0],king[1]], 't');
  check([king[0],king[1]], 'l');
  check([king[0],king[1]], 'r');
  check([king[0],king[1]], 'b');
  check([king[0],king[1]], 'tl');
  check([king[0],king[1]], 'tr');
  check([king[0],king[1]], 'bl');
  check([king[0],king[1]], 'br');

  return output;
};
console.log(queensAttacktheKing([[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]],[0,0]));
console.log(queensAttacktheKing([[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]],[3,3]));

// 2nd version 

// let output = [];
// let dirs = [[-1,0],[0,-1],[0,1],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]];

// const check = (position, dir) => {
//   position[0] += dir[0];
//   position[1] += dir[1];
//   if (position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8) {
//     const found = queens.find(q => q[0] === position[0] && q[1] === position[1]);
//     if (found) output.push(found);
//     else check(position, dir);
//   }
// };

// dirs.forEach(d => {
//   check([king[0], king[1]], d);
// });

// return output;