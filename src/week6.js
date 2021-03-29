function greet () {
    return 'hi'
}



/**
 * function firstFunction () {
 * throw new Error('stack)}
 */

console.log('whats up')

const name = 'kenny'
const anotherName= 'Bob'

console.log(greet())  

function firstFunction(){
    console.log('hello from firstFunction')
}
function secondFunction() {
    firstFunction()
    console.log('The end from secondFunction')
}
secondFunction()

firstFunction()

let myNumber = 23
let newVar = myNumber
myNumber = myNumber + 1


console.log(newVar)

let myString = 'abc' //address 12345

myString = myString + 'd'

//myString will now = abcd and its address will change 
/**In Javascript, an array is a Hashtable Object type so the interpreter 
doesn't need to keep track of physical memory and changing the value of
an element doesn't affect other elements as they're not stored in a contiguous block of memory.*/

// TODO read about GARBAGE COLLECTION!!
//non primative ARRAYS, FUNCTIONS, OBJECTS! - arrays and objects are my friends
//Memory Call Stack and HEAP (this will be assigned on the run time)

const myArray = []

myArray.push('first')
myArray.push('second')
myArray.push('third')
myArray.push('fourth')

console.log(myArray)
myArray.pop()
console.log(myArray)

const numbers = []
numbers.push(1)
numbers.push(2)
numbers.push(3)
numbers.push(4)

console.log(numbers)

const id = 100

//if myArray is a const the datype cannot be changed down the road.
//myArray = ['a'] will not work because myArray is a const.
myArray.push('a')
console.log(myArray)


// ##ANCHOR //Class two
// // .length .split() .join Used in Arrays and Objects

// let arr = [1, 2, 3, 4,]
// console.log(arr.length)

function dog(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
    this.bark = function() {
    return 'Woof!'
    }
}

// //dog.prototype
// //dog.prototype.constructor
// //The isPrototypeOf() method checks if an object exists in another object's prototype chain.
// //The toString() stringifier method of the Location interface returns a USVString containing the whole URL. It is a read-only version of Location.href.

const dog1 = new dog(
    'Daisy',
    'Labrador',
    'black'
)

const dog2 = new dog(
    'Cheeko',
    'Foxy',
    'Tan'
)

console.log(dog1)

const str = 'The quick brown fox jumps over the lazy dog.'

str.split()

console.log(dog2)

dog2.toString()

const student = {
    name: 'Bob',
    year: 'one',
    class: 'SDV503'
} 

console.log(student.name)
student.name = 'Dave'

console.log(student)

const newObj = {}

const info = {
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1st DEC 2000',
    friends: ['Bob', 'Tom']
}
console.log(info.friends[1])

const example = {
    nestedObj: {
        name: 'Alex'
    }
}

console.log(example)

// const anotherObj = new Object()
// console.log(anotherObj) 

const propsName = 'firstName'

const objOne = {
    [propsName.toUpperCase()]: 'Alex'
}
console.log(objOne)

const objTwo = {
    firstName: 'Alex',
    lastName: 'Ali',
    printFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(objTwo.printFullName())
console.log(objTwo['firstName'])

console.log(objTwo.hasOwnProperty('lastName'))
console.log(objTwo.hasOwnProperty('address'))

console.log(objTwo)

console.log(delete objTwo.firstName)
const newProps = delete objTwo.firstName

console.log(objTwo.hasOwnProperty('firstName'))




