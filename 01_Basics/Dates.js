let myDate = new Date();

console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toLocaleString())

console.log(typeof myDate)

// let createDate = new Date(2024, 0, 23);

// let createDate = new Date(2024, 0, 23, 5, 6, 47);

 let createDate = new Date("2026-05-21");

// console.log(createDate.toDateString())

// console.log(createDate.toLocaleString())

let myTimeStamp = Date.now();

console.log(myTimeStamp)

console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000))


