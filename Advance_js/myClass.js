class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}12345`;
    }
    changeUsername(){
        return `Username changed to ${this.username.toUpperCase()}`;
    }
}

const user1 = new user("john", "john@example.com", "password");
console.log(user1.encryptPassword());
console.log(user1.changeUsername());