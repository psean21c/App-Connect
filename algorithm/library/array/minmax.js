// 714. Best Time to Buy and Sell Stock with Transaction Fee
// Other's solution
var maxProfit = function(prices, fee) {
    let cash = 0, hold = -prices[0];
    console.log(cash,':',hold);
    for(let i =0;i<prices.length;i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};

let prices = [1, 3, 2, 8, 4, 9], fee = 2; // 8
let x = maxProfit(prices,fee);
console.log(x);