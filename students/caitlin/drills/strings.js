/* 
  ~🧠~ String Drills ~🧠~

  Strings are characters wrapped in quotes.

  These can be 'single', "double", and `backtick.`

  The `backticks` are called template literals, and 
  allow us to do cool stuff like this ...*/
  const orderNumber = 598;
  const packageMessage = `Order #${orderNumber} is ready to ship!`;/*

  Note the $dollar sign$ and {braces} that surround the variable.

  The instructions may be a bit sparse, do your best to write
  full sentences pls 🙃

*/

// Create a variable with the name "name"
// Assign it any relatively human name
var customerName = "Helen";

// Create a number variable
var customerNum = 77;

// Create a template literal enthusiastically greeting the above name
const greeting = `Hello #${customerName}, how are you?`;

// Ask the above name what their favorite kind of dessert is
const question = `What is your favorite desert #${customerName}?`;

// Write a happy birthday message to the name above
const birthday = `Happy Birthday #${customerName}!`;

// Ask the above name if they are that number years old
const customerAge = `Are you #${customerNum} years old, #${customerName}?`;

// Create 3 variables, each of them a food.
var cheese = "Gouda";
var meat = "Steak";
var veggie = "Broccoli";
// Ask the name above if they like any of those foods
const customerFood = `Do you like #${veggie} #${customerName}?`;

// Using the variables below, calculate the total bill
// and draft a text to your friends.
  const myTotal = 14.99;
  const yourTotal = 589.23;
  

// Without creating any variables, create a template
// literal that prints out as:
//    ## 
//    ##  Your total is $20.20, how will you be paying?
//    ##
// Your answer must include the addition operator + 
