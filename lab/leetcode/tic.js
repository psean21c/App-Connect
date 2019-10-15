/**
 * Initialize your data structure here.
 * @param {number} n
 * 
 * Design a Tic-tac-toe game that is played between two players on a n x n grid.
 * 
 * You may assume the following rules:
 * 1) A move is guaranteed to be valid and is placed on an empty block.
 * 2) Once a winning condition is reached, no more moves is allowed.
 * 3) A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
 */

var TicTacToe = function(n) {
    
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    console.log(row, ":", col, ":",player);
};

const n = 1;
let row=0, col=0, player=0;
var obj = new TicTacToe(n);
var param_1 = obj.move(row,col,player);

var abc = function(a,b) {
    let c = ab;
    console.log(c);
}
let a = 2, b=3;
abc(a,b);

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

/**
 * 
Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|


["TicTacToe","move","move","move","move","move","move","move"]
[[3],[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]]


 */

class formatDate extends Date {
    constructor(dateStr) {
      super(dateStr);
    }
  
    getFormattedDate() {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }
  
  console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());