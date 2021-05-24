// define variables
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 0;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7
let crewMassKg = 0;
let totalMassKg = 0;
let fuelMassKg = 76000;
let shuttleMassKg	= 74842.31;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
const dashDisplay = "------------------------------------------";
const symbol = ">";
const asterisk = "*";

// GET INPUT from user
let input = require('readline-sync');
astronautCount = input.question("Enter number of Astronauts ");
crewMassKg = astronautCount * averageAstronautMassKg;
totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;

//format output and print
console.log(dashDisplay);
console.log(symbol + " LC04 - LAUNCH CHECKLIST");
console.log(dashDisplay);
console.log("Date: " + date);
console.log("Time: " + time);
console.log("");

console.log(dashDisplay);
console.log(symbol + " ASTRONAUT INFO");
console.log(dashDisplay);
console.log(asterisk + " count "  + astronautCount);
console.log(asterisk + " status " + astronautStatus );
console.log("");

console.log(dashDisplay);
console.log(symbol + " FUEL DATA");
console.log(dashDisplay);
console.log(asterisk + " Fuel temp celsius "  + fuelTempCelsius);
console.log(asterisk + " Fuel level " + fuelLevel );
console.log("");

console.log(dashDisplay);
console.log(symbol + " MASS DATA");
console.log(dashDisplay);
console.log(asterisk + " Crew mass: "  + crewMassKg + " kg");
console.log(asterisk + " Fuel mass: " + fuelMassKg + " kg");
console.log(asterisk + " Shuttle mass: " + shuttleMassKg + " kg");
console.log(asterisk + " Total mass: " + totalMassKg + " kg");
console.log("");

console.log(dashDisplay);
console.log(symbol + " FLIGHT PLAN");
console.log(dashDisplay);
console.log(asterisk + " Weather: "  + weatherStatus);
console.log("");

console.log(dashDisplay);
console.log(symbol + " OVERALL STATUS");
console.log(dashDisplay);
console.log(asterisk + " Clear for takeoff: "  + "YES");
console.log("");