const arr = [1,2,3,4]

//FOR OF
for (const element of arr) {            
    // console.log(element)
}

const greetings = "Hello World!"

for (const str of greetings) {
    // console.log(str)
}


//MAPS

const map = new Map()

map.set("In", "India")
map.set("USA", "United States Of America")
// console.log(map)

// for (const itr  of map) {
//     console.log(itr)
// }

for (const [key,value] of map) {
    // console.log(key + " : " + value)
}

const myObject = {
    Name : "Kapil",
    Age : 18
}

for (const key in myObject) {
    // console.log(key + " : " + myObject[key])
}

//FOREACH

const myCoding = [
    {
        language: "JavaScript",
        script: "JS"
    },
    {
        language: "JAVA",
        script: "Java"
    },
    {
        language: "Python",
        script: "py"
    }
]

myCoding.forEach((element) =>{
    for (const key in element) {
        console.log(key + " : " + element[key])
    }
})