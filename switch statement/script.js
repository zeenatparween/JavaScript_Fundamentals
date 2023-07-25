const day = 'saturday' ;

switch (day){
    case 'monday':
        console.log("plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'Tuesday':
        console.log('prepare theory vdeos');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log("write code example");
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend : day!');
        break;
    default: 
    console.log("Not a valid day!")

}

// by using if-else 
if(day === 'monday'){
    console.log("plan course structure");
    console.log("Go to coding meetup");
} 
else if(day === 'Tuesday'){
    console.log('prepare theory vdeos');
} 
else if(day === 'wednesday' || day === 'thrusday') {
    console.log("write code example")
} 
else if( day === 'friday'){
    console.log('Record videos');
}
else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend : day!');
} 
else{
    console.log("Not a valid day!");
}