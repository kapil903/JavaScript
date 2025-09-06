const myArray = ["Thor", "Loki", "Odin", "Hela", "Frigga"]

const heropower = {
    Thor: "Thunder",
    Loki: "Magic",
    Odin: "Wisdom",
    Hela: "Death",
    Frigga: "Love"
}

Object.prototype.getPower = function() {
    console.log(`This is present for all objects`);
}

Array.prototype.heyPower = function() {
    console.log(`This is present for all arrays`);
}


// heropower.getPower();

// heropower.heyPower();   // This will give an error because heyPower is not defined for objects

// myArray.heyPower();

// myArray.getPower();



//Inheritance in JS is prototype based. Every object has a prototype property which points to its prototype object. When we try to access a property of an object, JS first looks for that property in the object itself. If it doesn't find it there, it looks in the prototype object. This continues up the prototype chain until it finds the property or reaches the end of the chain (null).


const TechingSupport = {
    isAvailable: true,
    assist: function() {
        console.log(`Assisting in ${this.subject}`);
    }
}

const Teacher = {
    subject: "Mathematics",
    teach: function() {
        console.log(`Teaching ${this.subject}`);
    },
    __proto__: TechingSupport
}



const mathTeacher = Object.create(Teacher);
mathTeacher.name = "Mr. Smith";

// mathTeacher.teach(); // Teaching Mathematics
// mathTeacher.assist(); // Assisting in Mathematics

// console.log(mathTeacher.isAvailable); // true


// Modern Syntax

Object.setPrototypeOf(Teacher, TechingSupport);

let anotheruserName = "Ms.Johnson  ";

String.prototype.trueLength = function() {
    console.log(`The true length is ${this.trim().length}`);
}

anotheruserName.trueLength(); // The true length is 10
"  Kapil  ".trueLength(); // The true length is 5
