//create a function that concatenates n input arrays, where n is variable.



// firstfun([1,2,3], [5,6,7], [8,9,10]) => [1,2,3,4,5,6,7,8,9,10]

//answer

function firstFunc(...args) {  
    let result = []
    for (i = 0; i < (arguments.length); i++) {
        result = result.concat(arguments[i])
    }
    return result
}
//spread operator.
//Spread syntax (...)
//Spread syntax (...) allows an iterable such as an array expression or string
//to be expanded in places where zero or more arguments (for function calls) or
//elements (for array literals) are expected, or an object expression to be expanded
//in places where zero or more key-value pairs (for object literals) are expected.

//ES6
function esSixFunc(...args) {
    return [].concat(...args)
}

console.log(firstFunc([1,2,3], [4,5,6], [7,8,9]))
console.log(esSixFunc([1,2,3], [5,6,7]))

// create a function that takes two arguments (number, length)
// secondFunc(7, 5) => ([7, 14, 21, 28, 35])

function secondFunc(number, length) {
    let result = []
    for (i = 1; i <= length; i ++){
        result.push(number * i)
    }
    return result
}




console.log(secondFunc(7, 5))


// create a function that takes an array of numbers and a string, returns an array of number sorted in 
// ascender or descender order.

//fsortFunc([4,3,2,1], "Ascending") -> [1,2,3,4]
//fsortFunc([6,7,8,9], "Descending") -> [9,8,7,6]

//Answer

function sortFunc(arr, str) {
    switch (str) {
        case 'Ascending':
            return arr.sort((a, b) => a - b)
            break;
        case 'Descending':
            return arr.sort((a, b) => b - a)
            break;
        default: return arr
    }
}

console.log(sortFunc([4,2,1,7,9], 'Ascending'))
console.log(sortFunc([7,5,1,3,6,8,14], 'Descending'))

// function es6SortFunc(arr, str) {
//     if (str = 'Asc') return arr.sort((a ,b) => a - b) : (str = 'Desc') return arr.sort((a, b) => b - a) 
// }

const es6SortFunc = (arr, str) =>
str === 'Asc' ? arr.sort((a, b) => a - b) :
str === 'Desc' ? arr.sort((a, b) => b - a) :
    arr

console.log(es6SortFunc([1, 4, 2, 6], 'Asc'))
console.log(es6SortFunc([1, 4, 2, 6], 'Desc'))

//create a function that returns true if all params are truthy otherwise return false

//trueOR?False(true, true, true) -> true

const trueOfFalse = (...args) => args.every(Boolean)

//create a funcction that takes three arguments (x, y, z) and returns
//an array containing a n number of sub arrays
// each sub array contains item within

function subArrays(x, y, z) {
    return Array(x).fill(Array(y).fill(z))
}

console.log(subArrays(3,2,3))

// function subArray5(x, y, z) {
    
// }

//checkSubArrays([1, 3], [1,2,3,4,5]) -> true
//checkSubArrays([1,2,3], [6,7,8,9]) -> flase

