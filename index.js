// Code your solution in this file
function findMatching(drivers, string) {
    return drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})

}

function fuzzyMatch(drivers, string) {
    let length = string.length
    return drivers.filter(function(driver) {
        return driver.slice(0,length) === string 
    })

}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name
    })
}