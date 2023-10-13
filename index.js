//The JavaScript Event Loop
//This is a fundamental part of Javascript that is responsible for
//handling asynchronous operations and makes sure that JS remains
//non-blocking and responsive

//1. Call Stack
//The event loop begins here. The call stack is a data structure that keeps
//track of function calls in you code. When a function is calles it is added
//to the top of the stack. When it returns it is removed from the stack

//2. Callback Queue
//This queue deals with asynchronous operations i.e callbacks and promises
//When an async task is complete, it's callback is placed here

//3. Event Loop
//The event loop continously checks the call stack and the callback queue
//If the call stack is empty it takes the first function from the queue and
//pushes it to the stack for execution. This process repeats ensuring async tasks
//do not block the main thread of execution

//4. Microtasks & Macrotasks Queues
// Promises have a higher priority than callbacks in the callback queue. After the call
//stack is empty all pending promise callbacks(microtasks) are executed before other
//callbacks (Macrotasks)

//Example
console.log("Start");

// Simulating a time-consuming operation with a callback
setTimeout(() => {
  console.log("Timeout callback executed");
}, 0);
// Adding a promise to the microtask queue that resolves immediately
Promise.resolve().then(() => {
  console.log("Promise microtask executed");
});

console.log("End");
//Start
//End
//Promise microtask executed
//Timeout callback executed

//Here the first console.log("start") is placed in the call stack and executed
//Then the setTimeout callback(The arrow function inside) is placed in the macrotask
//queue. Then the promise .then callback is added into the microtask queue.
//Finally the final console.log("end") is added to the call stack and executed
//Then the promise callback followed by the setTimeout callback

//P.S ALL OTHER METHODS AND CALLBACKS IN THIS FILE WILL BE EXECUTED IN THE SAME WAY
//HENCE YOU WILL SEE OTHER CONSOLE.LOGS LOGGING BEFORE THE CALLBACK AND PROMISE IN THIS EXAMPLE

//The Document Object Model (DOM)
//The DOM represents the document structure of an HTML web page and provides
//a way for programs to interact with the page's content.
//In JavaScript, you can manipulate and access HTML elements through the DOM.

//1. Selecting Elements (DOM Traversal)
const grandparent = document.getElementById("grandparent");
//returns a HTML collection of all elements with that class name
//The collection is not an array. Can be converted with Array.from()
const parents = document.getElementsByClassName("parent");
//query selector
const grandparent_with_querySelector = document.querySelector("#grandparent");
//query selector all - selects all elements with the selector you provide
//It returns a loopable array
const children = document.querySelectorAll(".child");
//selecting children of an element
//Returns a HTML collection
const grandparent_children = grandparent.children;
//There are more selectors like selecting siblings, selecting parents etc.
//Read more of this on https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

//2.DOM Manipulation
//creating elements
const div = document.createElement("div");
//Appending elements to the DOM
document.body.append(div);
div.innerText = "This div was created with Javascript";
//Modifying text content
//a.
div.innerHTML = "<b>This is bold text</b>";
//b.
const p = document.createElement("p");
p.innerText = "This is a paragraph";
div.append(p);
//Removing elements
p.remove();
//Modifying element attributes
const span = document.createElement("span");
span.id = "my-id";
span.innerText = "This is my span";
console.log(span); //<span id="my-id">This is my span</span>
//Modifying classes
const container = document.createElement("div");
container.classList.add("container");
console.log(container); //<div class="container"></div>
container.classList.remove("container");
console.log(container); //<div class></div>
//Modifying styles
container.innerText = "This is my container";
container.style.backgroundColor = "red";
document.body.append(container);
// Note that styles separated with hyphens e.g background-color
//are changed to camel casing i.e backgroungColor

//More information on DOM manipulation can be found on
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
