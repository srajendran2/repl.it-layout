// reference https://www.w3schools.com/jsref/jsref_obj_array.asp
let a1 = ['a','b','c'];
let a2 = ['d','e','f'];
let a3 = ['g','h','i'];
let a5 = [4,3,5];

// concat - joins multiple arrays to create a new one
let a4 = a1.concat(a2,a3);
console.log(a4.length);
console.log(a4[2],a4[5],a4[8]);

//includes - checks if the array contains it
console.log(a4.includes('h'));
console.log(a4.includes('j'));

//indexof - the position of the value in array
// not found returns -1
console.log(a4.indexOf('h'));
console.log(a4.indexOf('j'));

// display entire array
console.log(a4);
console.log(a1);
console.log(a2);

// reverse
console.log(a4.reverse());

//sort array value
console.log(a5.sort());

// pop - remove last element and returns it
console.log(a5);
a5.pop();
console.log(a5);

//push - adds last element
console.log(a5);
a5.push(5);
console.log(a5);

//shift - removes the first element of array and returns it
console.log(a5);
a5.shift();
console.log(a5);

//unshift - adds 1 or more to the beginning of array and returns //length
console.log(a5);
a5.unshift(1,2,3);
console.log(a5);

//splice
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(2);    //Everything from index 2 and beyond is removed.
console.log(arr);

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//Start at index 2 and remove 3 total entries.
arr1.splice(2,3);    
console.log(arr1);

//Start at index 1 and remove 1 entry.
arr1.splice(1,1);    
console.log(arr1);

//Start at index 2, remove 0 entries, and add 'hello'.
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
arr2.splice(2,0,'hello'); 
console.log(arr2);

//Start at index 2, replace 3 entries with 'hello' and 9.
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
arr3.splice(2,3,'hello', 9);   
console.log(arr3);

// join - joins elements into string
let arr4 = [1, 2, 3, 4];
let words = ['hello', 'world', '!'];
let newString = '';

newString = arr4.join("+");
console.log(newString);

newString = words.join("");
console.log(newString);

newString = words.join("_");
console.log(newString);

// split - split string into array elements. split is determined // by delimeter
let numbers = "1,2,3,4";
let word = "Rutabaga";
let phrase = "Bookkeeper of balloons."
let arr5 = [];

arr5 = numbers.split(',');  //split the string at each comma.
console.log(arr5);

arr5 = phrase.split(' ');   //split the string at each space.
console.log(arr5);

arr5 = word.split('');      //split the string at each character.
console.log(arr5);

// slice (start pos, end pos) - Extracts and creates new array
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);