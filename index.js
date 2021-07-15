// Add new items to array separately and combined
let practiceFile = [273.15];

practiceFile.push(42);
console.log(practiceFile);

practiceFile.push("hello");
console.log(practiceFile);

practiceFile.push(false, -4.6, "87");
console.log(practiceFile);


let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

// replace slinky with space tether
cargoHold.splice(5,1,'space tether');
console.log(cargoHold);

//remove the last item and display array and removed item
console.log(cargoHold.pop());
console.log(cargoHold);

//remove the first item 
console.log(cargoHold.shift());
console.log(cargoHold);

//add 1138 to start of array and 20 meters to last
cargoHold.unshift(1138);
console.log(cargoHold);
cargoHold.push("20 meters");
console.log(cargoHold);

console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);
