
// 1202. Smallest String With Swaps

var smallestStringWithSwaps = function (s, pairs) {
    const set = createDisjointSet(pairs);
    const map = createMap(set);
    function createDisjointSet(pairs) {
        const set = new DisjointSet();
        for (const [i, j] of pairs) {
            set.union(i, j);
        }
        return set;
    }
    
    function createMap(set) {
        const map = {};
        for (let i = 0; i < s.length; i++) {
            const r = set.find(i);
            if (!(r in map)) map[r] = [];
            map[r].push(s[i]);
        }
        for (const key in map) {
            map[key].sort();
        }
        return map;
    }
    
    let output = '';
    for (let i = 0; i < s.length; i++) {
        const r = set.find(i);
        output += map[r].shift();
    }
    return output;
};



class DisjointSet {
    constructor() {
        this.roots = {};
    }

    find(root) {
        if (!(root in this.roots)) this.roots[root] = root;
        let ptr = root;
        while (this.roots[ptr] !== ptr) {
            this.roots[ptr] = this.roots[this.roots[ptr]];
            ptr = this.roots[ptr];
        }
        return ptr;
    }

    union(p1, p2) {
        const r1 = this.find(p1);
        const r2 = this.find(p2);
        this.roots[r2] = r1;
    }
}

// let s = "dcab", pairs = [[0,3],[1,2]]; // "bacd"
// let s = "dcab", pairs = [[0,3],[1,2],[0,2]]; //"abcd"
let s = "cba", pairs = [[0,1],[1,2]]; // "abc"

let x = smallestStringWithSwaps(s,pairs);
console.log(x);