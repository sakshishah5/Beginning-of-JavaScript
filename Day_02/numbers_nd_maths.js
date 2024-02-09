const score = 400
console.log(score);

const num = new Number(100)
console.log(num);

console.log(num.toString().length)

console.log(num.toFixed(2))

const otherNum = 123.8966
console.log(otherNum.toPrecision(3))
 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// Mathssss

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.49))
console.log(Math.round(4.5));

console.log(Math.random()); //any random value from 0 to 1
console.log((Math.random() * 10) + 1); //any random value from ((0 to 1) * 10)+1 ~ almost between 1 to 10

const min = 10
const max = 20
console.log((Math.random() * (max-min+1)) + min);
