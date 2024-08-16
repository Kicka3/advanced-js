var countCombinations = function(string, key){
   let check=string.toLowerCase().match(new RegExp(`${key}`,'g'))
   return check===null?0:check.length
}