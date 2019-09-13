
let name1 = "john";

let john = {
    cnt1: 0,
    cnt2: 0,
    cnt3: 0
};

let name2 = "simon";

let simon = {
    cnt1: 0,
    cnt2: 0,
    cnt3: 0
};

let endpointsMap = new Map();

// john is the key for the map
endpointsMap.set(name1, john);
endpointsMap.set(name2, simon);

const v1 = endpointsMap.get(name1);
const v2 = endpointsMap.get(name2);
// console.log("v=" + v1);

// for (let endpoint of endpointsMap.keys()) {
//     console.log(endpoint); // 
// }

endpointsMap.forEach((value, key) => {
    console.log(key, value);
});

simon.cnt1++;
john.cnt3++;

endpointsMap.forEach((value, key) => {
    console.log(key, value);
});

john.cnt3++;
endpointsMap.forEach((value, key) => {
    console.log(key, value);
});
