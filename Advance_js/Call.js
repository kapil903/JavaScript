function setUserName(username) {
    this.username = username;
    console.log("Called setUserName");
}

function createUser(username, email, password) {
    setUserName.call(this, username); //If we dont use call here, this will refer to the global object (window in browsers) and not the current instance of createUser
    this.email = email;
    this.password = password;
}

const user1 = new createUser("john_doe", "john@example.com", "password123");
console.log(user1);