function multipleBy5(num){
    this.num = num
    return num * 5
}

console.log(multipleBy5(5));

function CreateUser(userName, score){
    this.userName = userName;
    this.score = score;
}

CreateUser.prototype.incrementScore = function(){
    this.score++;
}

CreateUser.prototype.printMe = function(){
    console.log(`User: ${this.userName}, Score: ${this.score}`);
}

const chai = new CreateUser("Chai", 20);
chai.incrementScore();
chai.printMe();

const coffee = new CreateUser("Coffee", 10);
coffee.incrementScore();
coffee.printMe();