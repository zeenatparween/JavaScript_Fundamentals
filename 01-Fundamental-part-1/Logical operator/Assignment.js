let sarah_language = 'English';
let sarah_Population = 50;
let sarah_continent = ' not island'

let user_country = prompt('Enter your country name');
let user_language = prompt('Enter your country spoken language')

let user_Population = Number(prompt('Enter Your country Population'));

let user_continent = prompt('Enter your country continent');

if (sarah_language == user_language && sarah_Population == user_Population && sarah_continent == user_continent){
    console.log(`you should live in ${user_country} country`)
} else{
    console.log(`${user_country} does not meet your criteria`)
}