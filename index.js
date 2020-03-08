// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(drivers, letters) {
    console.log(letters)
    return drivers.filter(driver => driver[0] === letters[0]);
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}