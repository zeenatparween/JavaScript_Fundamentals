const hasdriverlicense = true;
const hasGoodvision  = true;

console.log(hasdriverlicense && hasGoodvision);
console.log(hasdriverlicense || hasGoodvision);
console.log(!hasGoodvision)

if (!hasdriverlicense && hasGoodvision){
    console.log('sarah is able to drive')
} else {
    console.log('Someone else should drive...')
}

const isTired = false; 
     if(hasdriverlicense && hasGoodvision && !isTired ){
    console.log('sarah is able to drive!')
} else{
    console.log('Someone else should drive...')
}