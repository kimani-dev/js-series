//DOM Events and Handling
//Event handling in JavaScript is essential for creating interactive web applications.
//It allows you to respond to user actions,
//like clicking a button or moving the mouse, and perform actions in response to those events.

//Event Listeners
//Event listeners are functions that "listen" for a specific event to occur and
//then execute a predefined function (event handler).
//You can attach event listeners to DOM elements.
//e.g let's attach an event listener to the button in our page
const button = document.getElementById("button");
const text = document.querySelector(".text");
let count = 0;
let clickEvent = button.addEventListener("click", (e) => {
  //This callback receives the event(e) object that has information concerning the event
  //e.g e.target is the element that triggered the event
  console.log(e.target); //<button id="button">Click me </button>
  count++;
  text.innerText = `You have clicked the button ${count} times`;
});

//Another syntax to attach event listeners:
button.onclick = (e) => {
  console.log("This is another click listener. It runs after the first one");
};

//Event types
//There are multiple types of events like click, mouseover, keyout, submit etc
//For a complete list see:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

//Removing event listeners
//You can remove listeners by use of button.removeEventListener method
