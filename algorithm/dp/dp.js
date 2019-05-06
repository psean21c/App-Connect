//322. Coin Change in leetcode, https://leetcode.com/problems/coin-change/description/

class Book{

    makeChange(){
        console.log('makeChange');
    }
}

console.log('amount-1');

function MinCoinChange(coins){
//function MinCoinChange(coins){

    console.log('Dynamic Programming:' + coins);
    for(i=0;i<coins.length;i++){
        console.log(i + ':' + coins[i]);
    };

    this.makeChange = function(amount){
        // var me = this;

        console.log(amount);
        return 1;
    }
};

console.log('amount-2');

// var coins = [1, 2, 5];
var minCoinChange = MinCoinChange(coins);
// console.log(minCoinChange.makeChange(36));

console.log('amount-3');


// var front = function() {
//     console.log('front')
//     return 1;
// }
// front();
