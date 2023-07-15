var number = function(busStops){
    
}

var number = (busStops) => {
  var people = 0;
  for (let stop of busStops) {
    people += stop[0] - stop[1];
  }
  return people;
};