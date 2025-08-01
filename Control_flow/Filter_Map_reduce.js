//Filter and Map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myNewNum = myNums.filter((num) => num > 4)
// console.log(myNewNum)

myNewNum = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50) //Chaining
// console.log(myNewNum)

//Reduce
const mynums = [1, 2, 3, 4, 5]
const newNum = mynums.reduce((acc, curr) => {
    // console.log(`Accumulator: ${acc} and Current value: ${curr}`)
    return acc + curr
}, acc = 0)
// console.log(newNum)

//Example

const shoppingCart = [
    {
        course: "python",
        price: 2300
    },
    {
        course: "java",
        price: 1900
    },
    {
        course: "JS",
        price: 2500
    },
    {
        course: "C++",
        price: 2100
    },
]

const myTotal = shoppingCart.reduce((acc, curr) => {
    console.log(`Accumulator: ${acc} and Current value: ${curr.price}`)
    return acc + curr.price
}, acc = 0)

console.log(myTotal)

