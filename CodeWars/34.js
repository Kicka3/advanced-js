function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}


function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}