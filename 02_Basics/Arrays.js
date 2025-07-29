let myArr = [1,2,3,4,5]

let myArr1 = ["kapil", "Nikhil"]

// console.log(myArr1[1])

// Array Methods
myArr.push(6) //Add element at the last index of the array
// console.log(myArr)
myArr.pop() //Remove element from the last index of the array
// console.log(myArr)
myArr.unshift(9) //Add element at the begining of the array
// console.log(myArr)
myArr.shift()
// console.log(myArr) //Remove elements from the begining of the array

// console.log(myArr.includes(4))

// console.log(myArr.indexOf(3)) //-1 if the element doesnt exist in the array

const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof myArr) //Object
// console.log(newArr)
// console.log(typeof newArr) //String

// Slice, Splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2)
