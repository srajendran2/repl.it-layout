// Syntax error - the console log bracket is not closed
let day = Wednesday;
console.log(day;

// quotes missing
let name = Julie;
console.log("Hello, name);

// Runtime error - the variable used in console log is not defined
let firstName = "Jack";
console.log(firstname);

let name = Julie;  // Julie should be in quotes
console.log("Hello", name);

// Logical error 
// considering work week is 5 days only, using 7 is considered incorrect in below use case
let weeklyPay = 600;
let dailyEarnings = weeklyPay / 7;
console.log(dailyEarnings);

// types of error
// SyntaxError - Occurs when trying to parse syntactically invalid code.
    // console.log("hello";


// ReferenceError	- Occurs when a non-existent variable is used/referenced.	
    // let firstName = "Jack";
    // console.log(firstname); 


// TypeError - Occurs when trying to use a value in an invalid way.	
//The numeric value 1 is not a function, so trying to use it as one //results in TypeError: 1 is not a function.
   //1(); 


// RangeError - Occurs when passing an invalid value to a function.
//The constructor function Array(n) creates an empty array of length //n. It is not possible to create an array with negative length, so //the code results in RangeError: Invalid array length.
  //  let nums = Array(-1);


// URIError - Occurs when improperly using a global URI-handling //function. ('URI' = Uniform Resource Identifier)	
//The % character is used to encode characters not otherwise allowed //in URIs, such as spaces (%20). If an invalid character encoding is //given, a URIError results.
  //  decodeURI('%');

  
// Error - The type from which all other errors are built. It can be used to generate programmer-triggered and programmer-defined errors.	
  //  throw Error("Something bad happened!");