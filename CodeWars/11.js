const isLeapYear = (year) => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;


const str1 = "Кирилл"
let splt2 = str.split('');
console.log(splt);






const str = "Кирилл"
let splt = str.split('');
console.log(splt);


let rev = splt.reverse();
console.log(rev);


let join = rev.join('');
console.log(join);


const reverseWords = (str) => str.split

function reverseWords(str) {

   let result = str.split('').reverse().join('').split(' ').reverse().join(' ');
    return result;
   
 }