// 169. Majority Element
// 1) Simon's solution
var majorityElement = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        map[key] = map[key] ? map[key] + 1 : 1;
        // console.log("key=", key,",value=",map[key], ", average=", (nums.length /2));
        if (map[key] > nums.length / 2) return key;
    }
};
// 2) other
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums[~~(nums.length / 2)]
};

// let a = [2,2,1,1,1,2,2];
let a = [-1, 100, 2, 100, 100, 4, 100];
var v = majorityElement(a);

console.log(v);