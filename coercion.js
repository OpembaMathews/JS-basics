//coercion
// let a = 7;
// let b = '6';
// b = parseInt
// let c = a + b;

// console.log('Answer: '+ c);
// console.log(typeof c);

// let d = 7 * c;
// console.log(d);
// console.log(typeof d);

let a = 7;
let b = '6';
b = parseInt(b,10);
let c = a + b;

console.log('Answer: '+ c);
console.log(typeof c);

let d = parseInt('bob',10);
let e = isNaN(d);
console.log(d);
console.log(e);

