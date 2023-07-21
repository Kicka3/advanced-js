var uniqueInOrder=function(iterable){
  let uni = [];
  for (let i = 0; i < iterable.length; i++) {
    let curr = iterable[i];
    let next = iterable[i + 1];
    
    if(curr !== next) {
      uni.push(curr)
    }
  }
  return uni;
}