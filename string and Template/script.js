const FirstName = 'Zeenat';
const job = 'student';
const birthYear = 2000;
const year = 2023;

const Intro = "I'm " + FirstName + ", a " + ( year-birthYear) + " Year old " + job + "!";
console.log(Intro);

const IntroZ = `I'm ${FirstName}, a ${year-birthYear} year old ${job}`

console.log(IntroZ);

console.log(`Just a regular string...`)

console.log('string with \n\
multiple \n\
lines');  // by using comma 

console.log(`String with 
multiple
lines`)