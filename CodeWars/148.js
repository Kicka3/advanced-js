function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i])
      continue;
    } else if (bag.lenght-1 == 3) {
      break;
    }
  } 
  
  return bag.slice(0,3);
}



const grabDoll = dolls => dolls.filter(e => e == 'Hello Kitty' || e == 'Barbie doll').slice(0,3)

