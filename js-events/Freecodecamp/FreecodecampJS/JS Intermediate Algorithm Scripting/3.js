function destroyer(arr, ...valToRemove) {


  return arr.filter(elem => !valToRemove.includes(elem));
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);