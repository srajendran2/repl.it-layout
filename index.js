// for loop
for (let i = 0; i < 5; i++) {
   console.log(i);
}

// for loop iteration of strings
let name = "LaunchCode";

for (let i = 0; i < name.length; i++) {
   console.log(name[i]);
}

// for loop iteration of arrays
let languages = ["JS", "Java", "C#", "Python"];

for (let i = 0; i < languages.length; i++) {
   console.log(languages[i]);
}

// reverse string
let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
   reversed = str[i] + reversed;
}

console.log(reversed);

//while loop
let i = 0;

while (i < 5) {
   console.log(i);
   i++;
}

// loop based on entered value
// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

// break statement
for (let i = 0; i < 4; i++) {
    
   console.log("Loop out No" + i)

   if (i > 2) {
      console.log("Loop in No" + i)
      break;
   }

}