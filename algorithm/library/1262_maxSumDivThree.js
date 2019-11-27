// 1262. Greatest Sum Divisible by Three

var maxSumDivThree = function(nums) {

    if(nums.length ===0) return 0;

    let max = 0;
    // let set = new Set();
    let memo = new Map();

    let validate =(arr) => {

        if(arr.length ===0) return 0;

        let val = 0;
        if(arr.length ===1) val = (arr[0] % 3 ===0)? arr[0]: 0;
        else {
            let sum = arr.reduce( (x1,y1) => x1 + y1);
            val = (sum % 3 ===0)? sum: 0;
        }
        max = Math.max(max, val);
        
        return max;
    }
    
    let loop = (nums) => {
        if(nums.length < 1) return 0;
        // max = Math.max(max, validate(nums));
        validate(nums);

        let part = nums.pop();
        // max = Math.max(max,validate(nums));
        validate(nums);

        let m = nums.length;
        // re-create subset of array[] after removing diagnal element..
        for(let i=0;i<m;i++) {
            let sub = [...nums.slice(0,i),...nums.slice(i+1,m),part];
            console.log('sub:',sub);
            loop(sub);
        }
        return max;
    
    }

    return loop(nums);

};

let nums1 = [3,6,5,1,8]; // 18 => 3,6,(5),1,8
let nums2 = [4];// 0
let nums3 = [1,2,3,4,4]; // 12
let nums4 = [1,2,3,4,5]; // 15
let nums5 = [1,2,3,4,5,6]; 
let nums6 = [3]; 
let nums7 = [4,1,5,3,1]; // 12

let nums8 = [366,809,6,792,822,181,210,588,344,618,341,410,121,864,191,749,637,169,123,472,358,908,235,914,322,946,738,754,908,272,267,326,587,267,803,281,586,707,94,627,724,469,568,57,103,984,787,552,14,545,866,494,263,157,479,823,835,100,495,773,729,921,348,871,91,386,183,979,716,806,639,290,612,322,289,910,484,300,195,546,499,213,8,623,490,473,603,721,793,418,551,331,598,670,960,483,154,317,834,352];


// let x = maxSumDivThree(nums);
// console.log(x);
console.log( maxSumDivThree(nums1)); // 18
// console.log( maxSumDivThree(nums2)); // 0
// console.log( maxSumDivThree(nums3)); // 12
// console.log( maxSumDivThree(nums4)); // 15
// console.log( maxSumDivThree(nums5)); // 21 ? 
// console.log( maxSumDivThree(nums6)); // 3
// console.log( maxSumDivThree(nums7)); // 12
// console.log( maxSumDivThree(nums8)); // 12
