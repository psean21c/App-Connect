// 78. - Subsets

var subsets = function (nums) {
    function loop(remains) {
        let total = [];
        if (remains.length === 1) return  [remains, []];
        else {
            let first = remains.pop();
            let remain = loop(remains);
            for (let i in remain) {
                let initial = remain[i];
                let added = [...initial, first];
                total.push(initial);
                total.push(added);
            }
        }
        return total;
    }
    return loop(nums);
};

// nums = [1, 2, 3]; //  [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]
nums = [1, 2];
const x = subsets(nums);
console.log("<<<answer>>>", x);

// reference : ES6 API
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

