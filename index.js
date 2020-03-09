// Code your solution in this file
let drivers
let search_name

function findMatching(drivers, search_name){
    debugger;
    return drivers.filter(function (driver_name) { return driver_name.toUpperCase() === search_name.toUpperCase()} )
}

function fuzzyMatch(drivers, search_name){
    return drivers.filter(function(driver_name) { return driver_name[0].toUpperCase() === search_name[0].toUpperCase()} )
}

function matchName(drivers, search_name){
    return drivers.filter(function(thing) {return thing.name === search_name} )
}