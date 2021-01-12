/**
 * var / let / const
 * assignment operator
 * data types
 * concatenating strings
 */

// 3 ways to create a variable
var myName = "Jeremy";
const otherName = "Billy";
let finalName = "Jesus";

// Data types
var string = "My name is";
var string2 = 'My name is';   // string
var number = 87654;           // number
var trueBoolean = true;
var falseBoolean = false;
var null_var = null;
var undefined_var = undefined;
var myListOfFriends = ["Bob", "Jane", "Ken"];    // array
var myToys = {}   // object

/**
 * use typeof to check the type of a variable
 */
console.log("typeof number: ", typeof number);


/**
 * concatenating simple strings
 */
const firstName = "Jeremy";
const lastName = "Gray";
// console.log("Hello " + firstName + lastName);

/**
 * ## Type Casting
 * When comparing variables, JavaScript will try to cast variables
 * to other types so they can be logically compared
 */
const one = 1;
const two = 2;
// console.log(one + two);

const alpha = "anythingatall!! I'm a string!";
const beta = 10;
// console.log(alpha + beta);