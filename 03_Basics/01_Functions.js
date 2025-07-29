function addTwoNumber(number1, number2){
    return number1+number2 
}

const  result = addTwoNumber(3,4)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    return `${username} just logged in`
}
console.log(loginUserMessage());
console.log(loginUserMessage("Kapil"));
