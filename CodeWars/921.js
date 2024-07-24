function arrayMash (array1, array2) {
   return [].concat(...array1.map((v,i)=>[array1[i],array2[i]]))
};