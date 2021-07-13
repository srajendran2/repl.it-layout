//Strings are immutable, once value is given it cannot be changed
// c in lower case is being changed to "C" in below example. It is // not possible

let nonprofit = "Launchcode";

console.log(nonprofit);
nonprofit[6] = "C";
console.log(nonprofit);

//String variables can still be changed. The reference to the    // value on the memory will change. Old value will be on the same // place in the memory, once a new value is assigned to variable, // it will start refering to new value 
let nonprofit1 = "Launchcode";
nonprofit1 = "LaunchCode";

console.log(nonprofit1);

// Appending values is not changing the string
let pet = 'cat';
console.log(pet + 's');
pet += 's';
console.log(pet); 
