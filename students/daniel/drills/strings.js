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
var name = "X AE A-Xii";
// Create a number variable
var number = 21;
// Create a template literal enthusiastically greeting the above name
const happyGreeting = `Hello, so nice to meet you, ${name}!`;
// Ask the above name what their favorite kind of dessert is
const foodPrompt = `${name}, what is your favorite food?`;
// Write a happy birthday message to the name above
const happyBirthday = `Happy Birthday, ${name}`;
// Ask the above name if they are that number years old
const ageQuery = `${name}, are you ${number} years old?`;
// Create 3 variables, each of them a food.
var food1 = "cherries";
var food2 = "berries";
var food3 = "ferrys";
// Ask the name above if they like any of those foods
const doYouLike = `${name}, do you like ${food1}, ${food2}, or ${food3}?`
// Using the variables below, calculate the total bill
// and draft a text to your friends.
  const myTotal = 14.99;
  const yourTotal = 589.23;
  const billSplit = `Hello, my bill is ${myTotal}, and your bill is ${yourTotal}`;
  
// Without creating any variables, create a template
// literal that prints out as:
//    ## 
//    ##  Your total is $20.20, how will you be paying?
//    ##
// Your answer must include the addition operator + 

const finalQuestion = `Your total is $${10+10.20}0, how will you be paying?`;
console.log(finalQuestion);