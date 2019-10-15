// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/ (o)

const J = "aA";
const S = "aAAbbbb";

var numJewelsInStones = function (J, S) {
    let map = new Map();
    for (let i = 0; i < S.length; i++) {
        let key = S[i];
        if (map.has(key)) map.set(key, map.get(key) + 1);
        else map.set(key, 1);

    }
    // console.log("map=", map);

    let hit = 0; 
    map.forEach((value, key, map) => {
        // console.log(`${key}: ${value}`);
        for (let i = 0; i < J.length; i++) {
            if(key === J[i]) hit += value;
        }
        console.log("map in:", map);

    });

    return hit;
};

const num = numJewelsInStones(J, S);
console.log(num);
