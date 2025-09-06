class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }  

    get pass() {
        return this.password;
    }

    set pass(newPassword) {
        this.password = newPassword;
    }
    
}

const user1 = new user("john_doe", "john@example.com", "password123");
console.log(user1.pass);
user1.pass = "newpassword456";
console.log(user1.pass);
