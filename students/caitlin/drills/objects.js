/*
object drills

objects are used to store relational data,

They help us show how things are related
to one another.

Objects are created with {braces}

Made up key/value pairs.

Values can be any data type in javascript

Keys can be stringsgi
*/

const person = {
    name: "Billy Bob",
    age: 96,
    job: null,
    friends: ["Diana", "Paulina", "Georgina"],
    someRandomObject: {}//nested objects
}

//Dot Notation
console.log(person.name)

//Bracket Notation
console.log(person["name"])

//Bracket notation can be useful when you want
//to use dynamic key names
const keyName = "name";
console.log{person[keyName]};