function addTwoNumber(number1, number2){
    return number1+number2 
}

const  result = addTwoNumber(3,4)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    return `${username} just logged in`
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Kapil"));

function calculateCartPrice(...num1){ //Rest or Spread Operator
    return num1
}

// console.log(calculateCartPrice(100,300,200))

const user = {
    username : "kapil", 
    price : 100
}

function handleObject(anyobject){ //Function in Object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
}

handleObject(user)