let billIsDue = true;
if (billIsDue) {
  console.log("Bill is due soon!");
};


billIsDue = false;
if (!billIsDue){
  console.log("Bill is not due soon!");
};

let input = require('readline-sync');
let number1 = input.question("enter a number ");

// if with else condition
if (number1 % 2 === 0){
  console.log("The number is even");
}
else
  console.log("The number is odd");
;

// if, elseif and else condition
if (number1 > 10){
  console.log("number is > 10");
}
else if(number1 > 5){
  console.log("number is > 5");
}
else if(number1 > 0){
  console.log("number is > 0");
};

// nested if
if (number1 % 2 === 0){
  console.log("The number is even");
  if (number1 > 0){
     console.log("The number is positive");
  }
  else{
    console.log("The number is negative")
  }
}
