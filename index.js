// Code your solution in this file
function findMatching(drivers, someWords) {
    const filtered = drivers.filter(driver => driver == someWords || driver == someWords.toLowerCase());
    return filtered
}

function fuzzyMatch(drivers, someWords) {
    const filtered = drivers.filter(driver => driver.startsWith(someWords))
    return filtered
}

function matchName(drivers, someWords) {
    const filtered = drivers.filter(driver => driver.name == someWords)
    return filtered
}