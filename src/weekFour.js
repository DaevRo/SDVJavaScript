x = '1234567'
console.log(typeof x)
let y = Number(x)

console.log(typeof y) 

// let lbs = 2.20462
// let kgs = 1
// let grams = 1000


const infomation = {
    student : 'Dave',
    country : 'New Zealand',
    city : 'Nelson',
    postcode : 7010
}

console.log(infomation)

// const weight = {
//     kgs : 1
//     lbs : 2.20462
//     grams : 1000
// }

// console.log(weight)

// || = or
// && = add
// != not equal to

let c = 11

if(c === 11 && typeof c === 'number') { 
    console.log('its true')
} else {
    console.log('error')
} 

// creates a container for a which has a value of 5
let a = 5 
// creates a container for b which has a value of 'a' which also has a value of 5 
let b = a 
// prints the value of a
console.log(a)
//prints the value of b which inturn has a value of 'a' which has a value or '5'
console.log(b)
// if a equals b print 'true' a = 5, b = a which = 5
console.log(a === b)
// changes the value of a to 10
a = 10
//prints the value of a which has been changed to 10 on line 52
console.log(a)
//prints the value of 'a' which has a stored value of 5 until line 52. (js reads top to bottom)
console.log(b)
// if a equals b print true, if not print false.
console.log(a === b)

// papaFranks console log 
// function conert(input) {}
// console.log(convert("string)):
// console.log(convert("string")):