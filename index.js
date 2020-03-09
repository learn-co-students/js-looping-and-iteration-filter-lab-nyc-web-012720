// Code your solution in this file

function findMatching(drivers, driver){
    return drivers.filter(function(name){
   return name.toLowerCase() === driver.toLowerCase()
 })
};

function fuzzyMatch(drivers, letter){
    let result = []
     drivers.filter(function(word){
       if(letter.length > 1){
         if(word.substr(0,2) === letter){
           result.push(word)
         }
       }
       return result
     })
     return result
  }

  function matchName(drivers, name){
   return drivers.filter(function(driver){
        if(driver.name === name){
            return driver
        }
    })
  }