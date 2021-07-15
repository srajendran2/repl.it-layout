//two dimensional array
let shuttleCrews = [
   ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
   ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
   ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);


let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);

let school = [
   ["science", "computer", "art"],
   ["Jones", "Willoughby", "Rhodes"]
];

//display jones
console.log(school[1][0]);

// add a new row in two dimensional school array
school.push(["dance"]);
school[2][1]=("Holmes");
console.log(school);

