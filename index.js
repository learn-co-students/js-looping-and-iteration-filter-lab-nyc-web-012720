// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, given){
    // 1 returns all drivers that match the passed in name
    // 2 returns matching drivers if case does not match but letters do
    // 3 returns an empty array if there is no match

    return collection.filter(n => (n === given.toLowerCase() || n === given))

}

function fuzzyMatch(collection, given){
    // 4 returns a driver if beginning provided letters match
    // 5 does not return drivers if only middle or ending letters match
    // 6 does not return drivers if only middle or ending letters match
    return  collection.filter(n => n.startsWith(`${given}`)) 
}
function matchName(collection, given)
{
    // 7 accesses the data structure to check if name matches
    return  collection.filter(n => n.name === given) 
}

