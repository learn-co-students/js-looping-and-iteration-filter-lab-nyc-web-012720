// // Code your solution in this file
// let drivers
// let string

function findMatching(drivers, string) {
   return drivers.filter(function (driver) {return driver.toUpperCase() === string.toUpperCase();});
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) {return driver[0] === string[0]});
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) {return driver.name === string});
}