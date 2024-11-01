function gearInchCalculator(chainrings, sprockets){
   return chainrings.map( c => sprockets.map( sprocket => Math.round(+(26*c/sprocket)*10)/10));
}