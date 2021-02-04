/* 
  ~🧠~ Function Drills ~🧠~

  ### Creating Functions
  
  1. Function declaration                                       */
  function encryptMessage(msg) {
    // perform crazy computation to encrypt the message!
  }                                                             /*

  2. Function expression                                        */
  const encryptMessage = function(msg) {
    // perform crazy computation to encrypt the message!
  }                                                             /*

  3. Anonymous function expression (fat arrow function)                              */
  const encryptMessage = (msg) => {
    // perform crazy computation to encrypt the message!
  }                                                             /*

  When creating functions, variables like msg are considered "parameters." 
  When we're creating functions, the variables that are
  "passed in" are called parameters as long as we're interacting
  with him between the function's braces { }        */
  function doFunThing(someCrazyThing, parameterTwo) {
    const number = someCrazyThing + parameterTwo;
  }

  /*

  ### Using Functions

  When you make a function do the thing it's supposed to, 
  you "invoke" or "call" the function. You invoke a function
  by using parenthesis() directly() next() to() your() function()
  name()                                                        */

  encryptMessage("Whatever needs to be encrypted");              /*

  When you invoke a function, the values you "pass in"
  to the function are called "arguments." Here, the
  argument is a string.                   */

  const argumentOne = 1;
  const argumentTwo = 2;
  doFunThing(argumentOne, argumentOne);

  // When we invoke functions, the variables passed in are arguments.

  /*

  Creating functions think parameters
  Invoking functions, think arguments

  It's much more common to pass in variables as
  arguments to a function.                                  */
  const secretMessage = "4 your eyez only";
  encryptMessage(secretMessage);                              /*

  The names of parameters and arguments do not correllate to each other.

  https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/
  
*/

// ### Use function declarations for the below drills
// ### Name the functions so that they summarize what they do
// ### Infer how many arguments you'll need to pass in 

// Create a function that returns the sum of three numbers

function numSum(numOne, numTwo, numThree){
  return numOne + numTwo + numThree  
};

numSum(4, 4, 4);

// Create a function that multiplies two numbers 

function numTip(parameterOne, parameterTwo){
  return parameterOne * parameterTwo
};

numTip(2, 2);

// Create a function that divides two numbers

function numDiv(parameterThree, parameterFour){
  return parameterThree / parameterFour
};

numDiv(24,2);

// Create a function that returns the data type of a variable
// ## HINT: use the typeof keyword
let myAge = 34;

function retVar(paramOne){
   return typeof(paramOne);
};

retVar(myAge);

// Create a function that returns true if
// the age passed in is greater than 21

function legalAge(paramTwo) {

  if (paramTwo > 21)
    return true
};

legalAge(55);


// Declare three variables: firstName, middleName, lastName
// Create a function called generateFullName that accepts three parameters
// The function should return a concatenated string, creating a full
// name from the three passed in


function generateFullName(paraOne, paraTwo, paraThree){
  let firstName = "Nicole ";
  let middleName = "Marie-Christine ";
  let lastName = "Gray";

  return firstName + middleName + lastName;
};

generateFullName();