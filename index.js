// declare array
let emptyArray = [];
let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];

// declare multiline
let javaScriptFrameworks = [
   "React",     //index 0
   "Angular",   //index 1
   "Ember",     //index 2
   "Vue"        //index 3
];

// array length
console.log(programmingLanguages.length);
console.log(javaScriptFrameworks.length);

// Array can hold different data types
let grabBag = ["A string value", true, 99, 105.5];
console.log(grabBag.length);

let classes = ["science, computer, art"];
console.log(classes.length);

let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length);

console.log(javaScriptFrameworks[0]);
console.log(javaScriptFrameworks[1]);
console.log(javaScriptFrameworks[2]);
console.log(javaScriptFrameworks[3]);
console.log(javaScriptFrameworks[-1]);
console.log(javaScriptFrameworks[4]);

// update array with new values or change an existing value
javaScriptFrameworks[4] = "test";
javaScriptFrameworks[3] = "vue1";
console.log(javaScriptFrameworks[3]);
console.log(javaScriptFrameworks[4]);
console.log(javaScriptFrameworks.length);
