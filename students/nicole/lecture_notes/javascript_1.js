/* ##### Variables and data types ##### */
//Numbers

// 1. Declare a variable called age and give it a value of your age.

const age = 34;

// 2. Declare a variable called showMeSix and give it a value of 3 + 3.  We can perform math operations on numbers.
 
const showMeSix = 3 + 3;


// Strings
// 3. Declare a variable called name and give it a value of your name.

const name = "Nicole";

// 4. Declare a variable called greeting and give it a value of a nice greeting.  Use either template strings or concatenation to add your name to the end of the greeting.

const greeting = `Hi! How have you been ${name}?`;

// Booleans
// 5. Declare a variable called lovesCode and give it a value of a boolean.

let lovesCode = true;

// Arrays
// 6. Declare a variable called friends and give it a value of an array containing 3 strings, each one a name of a friend.
//Console.log the first item in your array

let friends = ["Addison", "Nathan, Amy"];

console.log(friends[0]);

// Objects
// 7. Declare a variable called me.  Make it an object with the following properties: name, age, lovesCode, friends, and greeting.  Use your previously declared variables to provide values to this object.

// 8.Consol e log the name property on your object.
// 8a. DOT NOTATION

// 8b. BRACKET NOTATION

// 9. Add a new property called favoriteNumber and give it a value of your favorite numbe
//Console log the whole object

/* ##### Functions ##### */

// 10. Write a function called sayHello, have it return the string of hello.  Invoke it below.

function sayHello(){
   return "Hello"
};

sayHello();

// 10a. Modify the above function to take in an argument of name.  Invoke it below passing in any name as a string.



// 11. Create a function called sum as a function expression that takes in two parameters: num1 and num2.  Return their sum.  Invoke it below passing in any two numbers.

// 12. Write a function as an arrow function called findFirst that will take in an array.  It should return the first item in the array.
const numsArr = [1, 2, 3, 4, 5, 6]

/* ##### If statements ##### */

// 13. Write a function called equalChecker that takes in two numbers.  If they are equal return true, if they are not return false.

// 14. Write a function called canIDrive that takes in a number, someones age.  If the person is under 16 return the string 'you can drive a bike'.  If they are between 16 and 50 return 'you can drive a car'.  Otherwise, return the string 'you can drive a cadillac'.  Invoke the function below.



/* ##### Scope ##### */

// 15. Look at the variables and functions below.  Let's figure out what is visible where.

let globalVar = 'I am on the global scope'

function outerFn() {
  let outerVar = 'I am scoped to outerFn'
  console.log(globalVar)
  console.log(outerVar)
  function innerFn() {
    let innerVar = 'I am scoped to innerFn'
    console.log(globalVar)
    console.log(outerVar)
    console.log(innerVar)
  }
  innerFn()
}

// outerFn()
