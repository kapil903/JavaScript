// const obj = new Object() --> Constructor --> Singleton
 const obj1 = {1:"a", 2:"b"}
 const obj2 = {3:"c", 4:"d"}

//  const obj3 = Object.assign({},obj1, obj2) // merge two objects

const obj3 = {...obj1, ...obj2} // Spreading
console.log(obj3)

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isloggedIn = true
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isloggedIn'))
