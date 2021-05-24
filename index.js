// define variables
const shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384000;
let milesPerKilometer = 0.621;

// identify data type 
let v1 = typeof(shuttleName);
console.log(v1);

v1 = typeof(shuttleSpeed);
console.log(v1);

v1 = typeof(distanceToMars);
console.log(v1);

v1 = typeof(distanceToMoon);
console.log(v1);

v1 = typeof(milesPerKilometer);
console.log(v1);

// calculate miles to mars
let milesToMars = distanceToMars * milesPerKilometer;
console.log(milesToMars);

// calculate hours to mars
let hoursToMars = milesToMars / shuttleSpeed;
console.log(hoursToMars);

// days to mars
let daysToMars = hoursToMars / 24;
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars");

// calculate miles to moon
let milesToMoon = distanceToMoon * milesPerKilometer;
console.log(milesToMoon);

// calculate hours to moon
let hoursToMoon = milesToMoon / shuttleSpeed;
console.log(hoursToMoon);

// days to moon
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach Moon");