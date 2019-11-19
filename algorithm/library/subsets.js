/***
 * 
 * 78 - Subsets
 * line-25: debug is important because .. you will be given .. [ [ 1 ], [] ] with first (2), 
 * just before making [ [ 1 ], [ 1, 2 ], [], [ 2 ] ]
 * In the for loop : 
 * initial [1] + first (2)
 *  >> initial [1] with added [1,2] 
 *  >> pushed to total [ [1], [1,2] ]
 * initial [] + first(2)
 *  >> initial [] + added [2]
 *  >> pushed to total [ [], [2]]
 * 
 * After for-loop
 *  >> total = [ [ 1 ], [ 1, 2 ], [], [ 2 ] ]
 */

var subsets = function (nums) {
    function loop(remains) {
        let total = [];
        if (remains.length === 1) return  [remains, []];
        else {
            let first = remains.pop();
            let remain = loop(remains);
            // console.log('num>> ',remain); 
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

