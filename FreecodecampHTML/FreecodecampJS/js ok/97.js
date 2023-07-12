function rangeOfNumbers(startNum, endNum) {
  return (endNum < startNum)
  ? [] 
  : rangeOfNumbers (startNum, endNum - 1).concat(endNum);
};