function reachDestination(distance, speed) {
   let t=Math.round(distance / speed / 0.5) * 0.5;
   return `The train will be there in ${t} hour${t===1?'':'s'}.`
}