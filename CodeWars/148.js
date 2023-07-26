function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i])
      continue;
    } 
  } 
  
  return bag.slice(0,3);
}