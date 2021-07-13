// Strings are objects and they have certain functions / methods // associated with it
// length function
let s1 = " This is a long string  ";
console.log(s1.length);

// lowercase function
console.log(s1.toLowerCase());

// Uppercase function
console.log(s1.toUpperCase());

//slice
console.log(s1.slice(0,3));

//substr (start,length)
console.log(s1.substr(0,3))

//substring(start,end)
console.log(s1.substring(1,3))

//trim - removes trailing and leading spaces
let t1=s1.trim();
let l1=t1.length;

console.log(t1,l1);

//indexof returns the first occurrence position of substr 
console.log(s1.indexOf("long"));

//replace chars - copy the string and replace chars
console.log(s1.replace("long", "short"));