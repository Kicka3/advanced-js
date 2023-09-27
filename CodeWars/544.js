function addLength(str) {
   let arrStr = str.split(' ');
   console.log(arrStr)

   let resultArray = [];
   let count = 0;

   for (let i = 0; i < arrStr.length; i++) {
      count = arrStr[i];
      console.log(count.length)

      let result = count + ' ' + count.length
      console.log(result)

      resultArray.push(result)
      console.log(resultArray)

   }
   return resultArray;

}



const addLength = str => str.split(' ').map(elem => elem + ' ' + elem.length)