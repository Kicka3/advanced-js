var number=function(array){
  return array.map((line, index) => {
    return `${index + 1}: ${line}`
  })
  
}

var number=function(array){
  let out = [];
  
  for(i = 1; i <= array.length; i++) {
    out.push((i)+ ": " + array[i - 1])
  }
  return out;
}