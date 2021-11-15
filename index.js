var var1 = "hello's world";
console.log(var1);
//typeof keyword finds out what is the type of variable
console.log("type of 'var1' variable is "+ typeof var1);
var var2 = 1000;
console.log(var2);
console.log("type of 'var2' variable is "+ typeof var2);
var var3 = 1000.10;
console.log(var3);
console.log("type of 'var3' variable is "+ typeof var3);
var var4 = "1000.10";
console.log(var4);
console.log("type of 'var4' variable is "+ typeof var4);

// Type conversion Number and String functions help convert inputs to respective data types

// Number examples
console.log(Number("123 "));
console.log(typeof Number("123 "));
console.log(Number(17));
console.log(Number("-123 "));
console.log(Number("+123 "));
console.log(Number("1 3"));
console.log(Number("one"));

// Number NaN - Not A Number
console.log(Number("123a"));

// String examples
console.log(String(17));
console.log(typeof String(17));
console.log(String("..."));
console.log(String());