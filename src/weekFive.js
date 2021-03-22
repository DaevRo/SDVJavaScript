let Grade = 1;
switch (Grade) {
    case 100:
        console.log('A')
        break
        case 80:
            console.log('B')
            break
            case 70:
                console.log('C')
                break
                case 50:
                console.log('D')
                break
                default:
                    console.log('FAIL')
                    break
} 

const foo = -2;
switch (foo)  {
    case 1:
        case 2:
            case 3:
                case 4:
                    console.log('I like this number')
                    break
                    case -1:
                        case -2:
                            console.log('I love this number')
                            break
                            default:
                                console.log('i dont like this number')
}

const foo2 = 0
let output = ''
switch (foo2) {
    case 0:
        output += 'So '
    case 1: 
        output += 'How '
        output += 'Old '
    case 2:
        output += 'Are '
    case 3:
        output += 'You'
    case 4:
        output += '?'
        console.log(output)
        break
    case 5:
        output += '!'
        console.log(output)
        break
        default:
            console.log('Please pick a number from 0 to 5!')
    
}

// += (increments)

let person = {
    name : 'Tony',
    age : 17,
    driver : null,
    student : true
}

// if (person.age >=1) {
// person.driver = 'yes'
// } else {
//     person.driver = 'No'
// }

// same as the code above but on one line
person.driver = person.age >= 16 ? 'Yes' : 'No'

console.log(person)

//condition ? value if true : value if false
//condition
// True : false 
let x = 5
let y = 5 <= x ? 5 + 5 : x  // let y = 5 if y is equal or greater than x (which has has a value of 5 on line 80) then y =  5 + 5  or else the value of x which = 5.
console.log(y)

// let isStudent = true
// let price = isStudent ? 8 : 12
let price = person.student ? 8 : 12
console.log(price)



