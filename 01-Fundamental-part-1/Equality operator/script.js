const age = 18;
if(age === 18){
    console.log('you just became an adult  :D(Strict)');
}
if(age == 18){
    console.log('you just became an adult : D(Loose)')
}
console.log(18 === 18);
console.log(18 === 19);
console.log('18' == 18);
console.log('18' === 18);

const favourate = prompt("What's your favourate number!")
console.log(favourate);
console.log( typeof favourate);
if (favourate == 23){
    console.log('cool! 23 is an amazing number!')
}

const accu_number = Number(prompt('Enter your valid account Number'));
console.log(typeof accu_number);

if(accu_number === 2345){
    console.log('cool! 2345 is your account Number!');
} else if(accu_number === 2346){
    console.log('2346 is also a cool account number')
} else if(accu_number === 2347){
    console.log('2347 is also your account number');
} else{
    console.log('Account Number is not 2345 or 2346 or 2347 ')
}