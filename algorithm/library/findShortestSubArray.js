// https://leetcode.com/problems/degree-of-an-array/

var findShortestSubArray = function(nums) {
    let mapX = new Map();

    for(let i=0;i<nums.length;i++){
        let key = nums[i];
        let val = [];
        if(mapX.get(key)){
            val = mapX.get(key);            
            val = [++val[0],val[1],i];
            mapX.set(key,val);

        } else {
            val = [1,i,i];
            mapX.set(key,val);
        }
    }

    let max = 0, short=50000;
    mapX.forEach( (v,i) => {
        // console.log(v,':',i);
        if(v[0] > max) {
            max = v[0];
            short = v[2] - v[1];
        } else if(v[0] == max) {
            if(short > v[2] - v[1]) short = v[2] - v[1];
        };
    });
    // console.log(max, ',', short);
    return short + 1;

};

// const nums = [1, 2, 2, 3, 1];
const nums = [1,2,2,3,1,4,2];
const x = findShortestSubArray(nums);
console.log('the answer:',x);