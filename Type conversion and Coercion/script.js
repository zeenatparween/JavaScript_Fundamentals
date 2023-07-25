// type Conversion

const inputYear = '1998';
console.log(typeof inputYear);
 
const NewInput = Number(inputYear);
console.log(typeof NewInput );

console.log(Number(inputYear),  inputYear);

const Adding = '798769'
console.log(Adding);
console.log(Number(Adding))

// type Coercion
// In Coercion + operator treated as Concatination with String Value
console.log('I am ' + 23+ ' Year Old')
console.log('23'- '10'-3);
console.log('10'+ 5); //  here string concatenate  with + operator Not Add

console.log('10'-5); // here string subract the value 
console.log('23' + 56 +  '9' - 5);

let n = '1' + 1; // op: 11
n = n-1;
console.log(n)

console.log('10'-'4'-'3'-2+'5'); 
console.log(2+3+4 +'5');

