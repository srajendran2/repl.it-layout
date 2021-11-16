// Strings are objects and they have certain functions / methods // associated with it
// length function
let s1 = " This is a long string  ";
console.log(s1.length);

// lowercase function
console.log(s1.toLowerCase());

// Uppercase function
console.log(s1.toUpperCase());

//slice (start pos,end pos)
console.log(s1.slice(0,3));

//slice (start pos,end pos) -> Empty 
//If start > stop, slice() will return the empty string. ("")
//If start is negative: sets char from the end of string
//If stop is negative: sets stop to: string.length – Math.abs(stop) //(original value), except bounded at 0 (thus, Math.max(0, //string.length + stop))

console.log(s1.slice(24,3));

//substr (start,length)
console.log(s1.substr(0,3))

//substring(start pos,end pos)
//If start > stop, then substring will swap those 2 arguments.
//If either argument is negative or is NaN, it is treated as if it //were 0.
console.log(s1.substring(1,3))


//trim - removes trailing and leading spaces
let t1=s1.trim();
let l1=t1.length;

console.log(t1,l1);

//indexof returns the first occurrence position of substr 
console.log(s1.indexOf("long"));

//replace chars - copy the string and replace chars
console.log(s1.replace("long", "short"));