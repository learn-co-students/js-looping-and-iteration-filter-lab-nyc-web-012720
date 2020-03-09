// Code your solution in this file
function findMatching (drivers, string) {
    return drivers.filter(function (driverName){
        return driverName.toUpperCase() === string.toUpperCase();
    });
}

function fuzzyMatch (drivers, string){
    return drivers.filter(function (driver){
        return driver.charAt(driver[0]) === string.charAt(string[0]);
    });
}

function matchName(drivers, string){
    return drivers.filter(function (driver){
        return driver.name === string;
    });
}
