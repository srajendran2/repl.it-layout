let input = require('readline-sync');
let userName = input.question("Enter name ");
console.log("Hello " + userName + "!" + " let's do some addition");

//* numbers calculation 
// input is accepted as a string, so number conversion is required
let num1 = input.question("Enter 1st number ");
let num2 = input.question("Enter 2nd number ");
let sum = Number(num1) + Number(num2);
console.log("total sum is " + sum);
