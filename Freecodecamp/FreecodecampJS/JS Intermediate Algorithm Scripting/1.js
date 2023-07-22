function sumAll(arr) {
  let maxNum = Math.max(arr[0], arr[1]);
  let minNum = Math.min(arr[0], arr[1])
  console.log(maxNum)
  console.log(minNum)
  let numBetween = 0;
  for (let i = minNum; i <= maxNum; i++){
    numBetween += i;
    console.log(numBetween)
  }
  return numBetween;
}

sumAll([1, 4]);