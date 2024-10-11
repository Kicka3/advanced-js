function itinerary(travel) {
   let itinerary=[];
   for (let i=0;i<travel.length;i++)
   {
      itinerary.push(travel[i].in)
      itinerary.push(travel[i].out)
   }
   return itinerary.filter((v,i)=>v!==itinerary[i+1]).join('-')
}