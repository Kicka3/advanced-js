// Sum Numbers
let arr1 = [1,3,44,2.3,1,0];
let arr2 = [0];
let arr3 = [-2.33];

function sum (numbers) {
    "use strict";
        let initVal = 0;
    let result = numbers.reduce((acc,curr) => acc + curr, initVal);
    return result;
    console.log(result);
};
sum (arr1);



const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);