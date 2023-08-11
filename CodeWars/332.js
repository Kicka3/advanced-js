function getMean(arr, x, y) {
  if (x > 1 && y > 1 && x <= arr.length && y <= arr.length) {
    var mean1 = 0, mean2 = 0, answer;
    var clone = arr.slice().reverse();
    for(var i=0; i < x; i++){
      mean1 += arr[i];
    }
    for(var j=0; j < y; j++){
      mean2 += clone[j];
    }
    answer = ((mean1/x) + (mean2/y))/2;
    return answer;
  }
  return -1;
 }