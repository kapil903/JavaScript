let myYtchannel = "KapilYt"

let newName = myYtchannel

newName = "NikhilYt"

console.log(myYtchannel)
console.log(newName)

let userOne = {
    name : "Kapil",
    age : 18
}

let userTwo = userOne

userTwo.age = 19

console.log(userOne.age) // Its non primitive and get stored in heap and take refrence and if made changes then original will also change
console.log(userTwo.age)