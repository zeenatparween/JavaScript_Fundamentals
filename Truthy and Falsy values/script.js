// 5 Falsy values : 0, '' , undefine, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas')); // Not Empty String
console.log(Boolean({})); // Empty Object
console.log(Boolean('')); // null

// const money = 0;
const money = 12;
if(money){
    console.log("Don't spend it all")
} else{
    console.log('You should get a job!');
}

// let height;
let height = 123;
if(height){
    console.log('YAY! Height id define');
} else{
    console.log('Height is UNDEFINED')
}

