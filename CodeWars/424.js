function squareSum(numbers){
  return numbers.reduce((sum, num) => {
    return sum + num * num;
  }, 0);
}