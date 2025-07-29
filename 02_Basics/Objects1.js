// Object Literals --> Not Singleton

const mySym = Symbol("key1")
const user = {
    name: "Kapil", 
    [mySym] : "mykey1", //Use Brackets to use as SYMBOL
    age : 12,
    location : "Delhi"
}


//To access
// console.log(user.name)
// console.log(user["age"])
// console.log(user[mySym])

//To change value
user.age = 20
user.location = "Mumbai"
// Object.freeze(user) //Restricts the further changes in the object
user.location = "Kolkata"

// console.log(user)

//Functions

user.greeting = function(){
    console.log("Hello JS users");
}

console.log(user.greeting())

user.greeting1 = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(user.greeting1())

