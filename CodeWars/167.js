// function sumArray(array) {
//   if(!array || array.length <= 2){
//       console.log('Null')
//     return 0
//   } else {
//     let sortArr = array.slice().sort((a, b) => a - b)
//     console.log(sortArr)
    
//     let result = sortArr.slice(1, -1).reduce((summ, current) => summ + current)
//     console.log(result)
// return result
//   }
// }


const sumArray = array => {
  !array || array.length <= 2 ? 0 : array.slice().sort((a,b) => a - b)
 //  let result = array.slice(1,-1).reduce((summ, curr) => summ + curr)
}
sumArray([ 0, 1, 6, 10, 10 ]);
sumArray([]);
sumArray([ -6, -20, -1, -10, -12 ]);