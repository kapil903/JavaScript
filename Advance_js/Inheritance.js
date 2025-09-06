class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    about(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class child extends user{
    constructor(name,age,school){
        super(name,age);
        this.school=school;
    }
    details(){
        return `${this.name} studies in ${this.school}.`;
    }
}

const child1=new child("Alice",10,"Greenwood High");

console.log(child1.about());
console.log(child1.details());

const user1=new user("Bob",30);
console.log(user1.about());
// console.log(user1.details()); // This will throw an error as details() is not a method of user class.

console.log(child1 === user1); // false

console.log(child1 instanceof child); // true
console.log(child1 instanceof user); // true
console.log(user1 instanceof child); // false
console.log(user1 instanceof user); // true


