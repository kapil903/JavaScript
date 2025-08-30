const promiseone = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve();
  }, 1000);
});
promiseone.then(function() {
    console.log("Promise resolved");
});

new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("This is executed first");
    resolve();
  }, 500);
}).then(function() {
    console.log("This is executed last");
});

const promiseThree = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve({userName: "Kapil", email: "jkl@example.com" });
  }, 1000);
});
promiseThree.then(function(user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let error = true;
    if(!error) {
      resolve({userName: "Kapil", email: "jkl@example.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promiseFour.then(function(user) {
    console.log(user);
}).catch(function(error) {
    console.log(error);
}).finally(function() {
    console.log("Finally executed"); //This will execute no matter what
});

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
    let error = true;
    if(!error) {
      resolve({userName: "Kapil", email: "jkl@example.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function init() {
  try {
    const user = await promiseFive;
    console.log(user);
  } catch(error) {
    console.log(error);
  } finally {
    console.log("Finally executed");
  }
}
init();

// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }
// fetchUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
