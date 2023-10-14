
let friends = ["Ryan", "Kieran", "Mark", "Diana", "Kirya",];

function friend(friends){
   let result = friends.filter(words => words.length === 4);
   console.log(result);
}


friend(friends);

const friend = friends => friends.filter(words => words.length == 4);