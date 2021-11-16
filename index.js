// way to translate between characters and integers
// the most recent versions of the Unicode character encoding    // include emoji characters, such as 🌮.
//--------------------------------------------------------------
// ASCII mapping lowercase
// a to 97, 
// b to 98, and so on for lowercase letters, 
// z to 122. 
// ASCII mapping uppercase
//A -> 65, Z -> 90
// Other integers between 0 and 127 represent symbols, punctuation, // and other assorted odd characters. 
//---------------------------------------------------------------
//The string method charCodeAt takes an index and returns the    // ASCII code of the character at that index.
let s1 = "This is ASCII encoding";
console.log(s1.charCodeAt(5));
console.log(s1.charCodeAt(0));

let n1=122;
console.log(String.fromCharCode(n1))

let n2=50;
console.log(String.fromCharCode(n2));
;