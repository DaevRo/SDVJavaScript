// two arguements, return the two arguements in an array


// function newArr(a, b) {
//     let arrOne = [a, b]
//     return arrOne
// }

// console.log(newArr(1, 2))


//ANCHOR Arrow function expressions syntax =>

// let newArr = (a,b) => [a, b]

//ANCHOR Spread syntax (...) continious array
//let newArr = ( ... a) => a

// console.log(typeof newArr)
// console.log(newArr(1, 2, 3, 4, 5, 6, 7, 8, 9))

// let arrTwo = ['dave', 2, 3, 4, 5]

// //calling arrays
// console.log(arrTwo[0], arrTwo[1])


//ANCHOR FOR EACH
// arr = [2]

// function oddOrEven(x) {
//     let sum = 0
//     x.forEach(num => sum += num) 
//     return sum%2 === 0 ? 'even' : 'odd'  // '? = if' ': = else' '% = remainder' '=== = strickt'
// }

console.log(oddOrEven([2, 4, 6]))  // 2 + 4 + 6 = 12
console.log(oddOrEven([1, 2, 3, 4, 5]))



function oddOrEven(x) {
    let sum = 0
    for(let i =0; i < x.length; i++ ) {
    sum += x[i]
    if (sum%2 === 0) {
    return 'even' 
    } else {
        return 'odd'
}
}
}



//ANCHOR Map  Mapping string to number

//arr = ['9.4', '4.2']

// function stringToNumber(arr) {
//     return arr.map(x => Number(x))
// }

//console.log(stringToNumber(['2.4', '9.4', '777']))

// function stringToNumber(arr) {
//     newArr = []
//     arr.forEach((x) => {            //The push() method adds one or more elements to the end of an array and returns the new length of the array.
//         newArr.push(parseInt(x))  //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
//     })
//     return newArr
// }

// console.log(stringToNumber(["7101.9"]))

//ANCHOR Changing an array to a string

// function arrayToString(arr){
//     let text = ''
//     for(let i = 0; i < arr.length; i++) {
//         text += arr[i]
//     }
//     return text
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6]))

// function arrayToString(arr) {
//     return arr.join('') //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// }

// const arrayToString = arr => arr.join('')

// console.log(arrayToString([1, 2, 3, 4, 5, 6]))



console.log(gnirts('Dave'))

// function gnirts(x) {
//     let arr = x.split('')
//     let newArr = arr.reverse()
//     let joinNewArr = newArr.join('')
//      return joinNewArr
// }

// function gnirts(x) {
//     if(!x) return x  //!x = if it is not a string  //doesnt work
//     return x.slice(-1) + reverse(str.slice(0, -1))
// }

// const gnirts = (x) => x.length < 2 ? str.reverse(str.slice(1, str.length)) + str[0] //doesnt work















