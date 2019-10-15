const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

let x = new Set([...a].filter(x => b.has(x)));