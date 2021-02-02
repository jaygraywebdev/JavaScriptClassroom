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

const lady = "Nicole";

// Create a number variable

let timeToEat = 7;

// Create a template literal enthusiastically greeting the above name

const greeting = `Hi ${lady}!`; 

// Ask the above name what their favorite kind of dessert is

let mood = `${lady}, what is your favorite dessert?`;

// Write a happy birthday message to the name above

var celebrate = `Happy Birthday ${lady}!`;

// Ask the above name if they are that number years old

const age = `${lady}, Are you ${timeToEat}`;


// Create 3 variables, each of them a food.

let breakfast = "bacon";
let lunch = "salad";
let dinner = "steak";
// Ask the name above if they like any of those foods

const food = `${lady}, Do you like ${breakfast}, ${lunch} or ${dinner}?`;

// Using the variables below, calculate the total bill
// and draft a text to your friends.
  const myTotal = 14.99;
  const yourTotal = 589.23;
  
 const ourTotal = myTotal + yourTotal; 
 `Check for dinner was ${ourTotal}. My portion was ${myTotal} and ${yourTotal} is what you guys owe.`;
 

// Without creating any variables, create a template
// literal that prints out as:
//    ## 
//    ##  Your total is $20.20, how will you be paying?
//    ##
// Your answer must include the addition operator + 
`Your total is ${10.10 + 10.10}, how will you be paying?`;


