/**
 * If statements allow us to conditionally execute code in our applications.
 * 
                              
  if (customerAge > 21) {
    // allow customer to purchase alcohol
  }                                                                           

  1. Everything between the parenthesis are considered 'conditions.'             

  2. If the conditions are met, the code block executes.

  3. Single variables can be evaluated as a condition; JavaScript will 
  determine if the variable is 'truthy' or 'falsy' -- if it has any value at all

  4. We use operators to create more complex conditions
  
  5. Comparison Operators:
    >     greater than
    <     less than
    >=    greater than or equal to
    <=    less than or equal to
    ==    shallow equality
    ===   deep equality                   
  
  6. Logical Operators: 
    ||    or
    &&    and

    Logical operators require at least two variables.

    A condition with the || OR || operator will evaluate to true if
    either variables is truthy.

    A condition with the && AND && operator will evaluate to true only if
    both variables are truthy. 
 */


const variables = [
  "'Tupac'",
  true,
  null,
  549,
  false,
  undefined,
  "'Water Bottle'",
  -10,
  NaN,
  9001,
];

const operators = ["||", "&&"];


function generateComparison(numberOfVars) {
  if (!numberOfVars || typeof numberOfVars !== "number") return false;
  let result = "";
  
  if (numberOfVars === 2) {
    const varIndex1 = randomFromRange(variables.length);
    const varIndex2 = randomFromRange(variables.length);
    const opIndex = randomFromRange(operators.length);
    result = `${variables[varIndex1]} ${operators[opIndex]} ${variables[varIndex2]}`
  }

  const codeBlock = `if (${result}) { \n    // does this code block run? \n}`

  console.log(codeBlock);
}


generateComparison(2);


function randomFromRange(max) {
  if (typeof max !== "number") return 0;
  let min = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}
