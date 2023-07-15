function wave(str){
  let result = [];
if([...str].length === 0) return [];
for(let i = 0; i < str.length; i++){
  let copy = str.split('');
  if(copy[i] === ' ') continue;
  copy[i] = copy[i].toUpperCase('');
  result.push(copy.join(''))
}
return result
}