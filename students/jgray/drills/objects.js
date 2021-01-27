/* 
    Object Drills

    Objects are used store relational data.

    They help us show how things are related
    to one another

    Objects are create with {braces}

    Made up key/value pairs

    Values can be any data type in JavaScript

    Keys can be strings
*/

const person = {
  name: "Billy Bob", // string
  age: 96, // number
  job: null, // Null / undefined
  friends: ["Dina", "Paulina", "Georgina"], // array
  "his_real_address": "123 Fake Street", // possible, but avoid for now
}

// Dot notation
console.log(person.name)

// Bracket notation
console.log(person["name"]);

// Bracket notation can be useful when you want
// to use dynamic key names
const keyName = "name";
console.log(person[keyName]);