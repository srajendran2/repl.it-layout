// the back tick character ` allows variables to be included as part of output

let name = "Jack";
let currentAge = 9;
// normal output
console.log("Next year, " + name + " will be " + (currentAge + 1) + ".");

// back tick used output
console.log(`Next year, ${name} will be ${currentAge + 1}.`);

// back tick allows multi-line output without using \n
let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);
//

let input=require('readline-sync')
let pluralNoun = input.question("Enter pluralNoun ");
let name1 = input.question("Enter name ");
let verb = input.question("Enter verb ");
let adjective = input.question("Enter adjective ");
let color = input.question("Enter color ");

console.log(`JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun} that allows ${name1} to ${verb} with strings.`)