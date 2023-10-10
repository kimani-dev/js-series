//Advanced Data Structures in JS
//B. Reference Types

//4.Arrays
let students = ["Alex", "Amos", "Jacinta"];
let ages = [23, 56, 75, 12];
//adding elements
ages.push(22);
console.log(ages); //23,56,75,12, 22
students.push("Cynthia");
//removing last element
ages.pop();
//removing elements
delete ages[1];
//Getting the size of array
console.log(students.length); //4


//5.Objects
//These consist of key: value pairs
let person = {
    name: "Jude Bellingham",
    age: 20,
    team: "Real Madrid",
    pro: true,
    hello() {
        console.log("Hello Javascript");
    }
}
//Functions inside of objects are referred to as methods
//The rest are referred to as properties(key: value pairs)

//Arrays and objects are reference types
//These means that when you assign an array to another array
//The new array inherits the address reference of the existing array
//Hence when arr1 is modified the second array is modified as well
//since they share the same address! e.g
let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2); //1,2,3,4


//Deeper into functions
//1. Return Values
//Functions can return values
function add(a,b) {
    return a+b;
}
let addition = add(2,3);
console.log(addition); //5

//2.Scope
//Funtions have scopes i.e The scope of variables declared inside a function
// is only inside the function. That means those variavbles can only be accessed
//from inside the function e.g
function multiply(x,y) {
    let product = x * y;
    return product;
}
console.log(product); //Should produce a reference error in the console!
//The variable product is only accessible from inside the function multiply

//IN ORDER TO SEE CONSOLE LOGS BELOW THIS LINE, COMMENT LINE 61
//Javascript executes line by line and since we have introduced a Reference Error
//in line 61, the Javascript engine stops execution thus cannot execute past there!

//Arrow Functions
//syntax
let divide = (p,q) => {
    return p/q;
}
//The implicit return
//By ommiting the curly braces in the arrow function
//You return the value from the operation e.g the function above can be:
let divide1 = (p,q) => p/q;

//Scope in arrow functions
//Before we dive into scope, let's discuss about the this key word
//The this keyword is used to reference it's context depeding on where
//it is used. By default it references the window object which has a 
//bunch of methods that are used to manipulate the page
//When used inside a method(A function inside an object) it references
//that object
let car = {
    color: "red",
    doors: 4,
    drive() {
        console.log(`This car has ${this.doors} doors`);
    }
}
car.drive(); //This car has 4 doors
//Here the this keyword accessed the doors property inside the object
//Let's see an arrow function
let aeroplane = {
    color: "White",
    company: "EgyptAir",
    fly: () => {
        console.log(`I am owned by ${this.company}`)
    }
}
aeroplane.fly(); //Outputs I am owned by undefined
//Here the this keyword now references to the window object insted of
//the aeroplane