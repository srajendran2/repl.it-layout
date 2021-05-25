//boolean values are true and false. It is case sensitive
console.log(true);
console.log(typeof true);
console.log(typeof false);

// below True / False are not identified as boolean as they're not lowercase
console.log(typeof True);
console.log(typeof False);

// below is identified as string
console.log(typeof "true");

//converting other datatypes to boolean can be done using Boolean function
//any variable with value is considered true
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(1));
console.log(Boolean('LaunchCode'));

//any variable without value is considered false. zero is also considered no value
console.log(Boolean(0));
console.log(Boolean(''));

// undefined variable
var x;
console.log(Boolean(x)); 

// null variable
var y = null;
console.log(Boolean(y)); 

// false
var z = false;
console.log(Boolean(z)); 

// NaN
var w = 10 / "H";
console.log(Boolean(w)); 

//condition true
console.log(5 == 5);
console.log(5 < 6);
console.log(6 >= 6);
console.log(6 <= 6);
console.log(8 != 6);
console.log('true' == "true");


//condition false
console.log(5 == 6);
console.log(true == "true");
console.log(5 > 6);

//exception conditions -> Even though values are not equal, we get true
// it is because == operator does conversion to same datatypes before comparing values
console.log(7 == "7");
console.log(0 == false);
console.log(0 == '');

// if A == B, B == C, A == C. But it is not the case in below scenario. So it is better not to use == operator for equality check
console.log('0' == 0);
console.log(0 == '');
console.log('0' == '');

//strictly equal === false conditions
console.log(7 === "7");
console.log(0 === false);
console.log(0 === '');

//strictly equal === true conditions
console.log('a' === 4);

console.log(9 != "8");
console.log(6 !== "8");
