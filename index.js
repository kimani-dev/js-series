//Deepers Into Objects
//Objects consist of key value pairs
//They consist of properties(variables) and function(methods)
let student = {
  name: "Kimani",
  age: 55,
  citizen: true,
  sayHi() {
    console.log("Hello Javascript");
  },
};

//accessing properties and functions in objects
console.log(student.name); //Kimani
student.sayHi(); //Hello Javascript
//modifying properties
student.age = 29;
console.log(student.age); //29

//Asynchronous Js
//Javascript is single-threaded hence it can only perform a single task
//At a time. But at time we have operations that take time e.g Getting data
//from a server or reading a file
//Javascript skips these lines of code and comes back later when the
//operations are done. This makes JS aynchronous e.g
setTimeout(() => {
  console.log("This will come second");
}, 0);

console.log("This will come first");

//There are several ways to handle these operations
//1. Callback functions
//Callback functions are a common way to handle asynchronous operations in JavaScript.
// A callback is a function passed as an argument to another function to be executed 
//later when the first function has completed its task.
function fetchData(callback) {
  setTimeout(() => {
    //Assuming this is a call to the server
    const data = "This is a big chunk of data from a server";
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);

//2. Promises
//Promises provide a more structured way to handle asynchronous operations and avoid "callback hell." 
//A Promise represents a future value or event that may not be available yet but will be at some point.
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "These are some users from the db";
      resolve(data);
    }, 2000);
  });
}

getUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//3. Async/await
//The async and await keywords provide a cleaner syntax for working with Promises, 
//making asynchronous code look more like synchronous code.
async function getBlogs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "These are some blogs from the database";
      resolve(data);
    }, 2000);
  });
}

const data = await getBlogs();
console.log(data); //These are some blogs from the database

//Error Handling
//Try catch block
//A try catch block is used to safely catch and errors that arise from asynchronous operations
//It can also be used to throw custom errors
try {
  const data = await getBlogs();
  //To thro a custom error use the throw("You error") function
  console.log(data);
} catch (error) {
  console.log(error);
}
