// https://leetcode.com/problems/two-added/ (o)

// 1. Two added
const nums = [2, 7, 11, 15];
const target = 9;

var twoadded = function(nums, target) {
    let added = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j< nums.length;j++) {
            // console.log("i=",nums[i], ",j=",nums[j], ",added=",nums[i] + nums[j], "= target(", target, ")" );
            if(nums[i] + nums[j] == target) {
                added.push(i);
                added.push(j);
                return added;
            }
        }
    }
    return added;
};

const a = twoadded(nums, target);
console.log(a);