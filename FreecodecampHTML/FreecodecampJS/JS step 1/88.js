function randomRange(myMin, myMax) {
  let randomNumber = 0;
  randomNumber += Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  return randomNumber;
}