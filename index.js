// addition between two numbers
let a1 = 10;
let a2 = 20;
let addResult = a1 + a2;
console.log(addResult);

// subtraction between two numbers
let subtractResult = a1 - a2;
console.log(subtractResult);

// multiplication between two numbers
let multiplyResult = a1 * a2;
console.log(multiplyResult);

// division between two numbers
let divisionResult = a1 / a2;
console.log(divisionResult);

// to power of
let powerResult = a2 ** a1;
console.log(powerResult);

// modulus remainder
let modulusResult = a2 % a1;
console.log(modulusResult);

// pre assignment increment
let preincrementResult = ++a1;
console.log(preincrementResult);

// post assignment increment
let postincrementResult = a2++;
console.log(postincrementResult);

//order of operation can be determined using PEDMAS
//P = parentheses
//E = exponentiation
//M = multiplication
//D = division
//A = addition
//S = subtraction

console.log(16 - 2 * 5 / 3 + 1);
console.log(1 + 5 % 3);
console.log(2 ** 2 ** 3 * 3);

//compound assignment operator
let x = 1;
let y = 1;
let z = 1;
let w = 1;

// x = x + 1
x += 1;
console.log(x);

// y = y - 1
y -= 1;
console.log(y);

// z = z * 1
z *= 1;
console.log(z);

// w = w * 1
w /= 1;
console.log(w);