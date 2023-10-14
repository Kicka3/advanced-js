let str1 ="What are you, a communist?";
let str2 ="This website is for losers LOL!";

function disemvowel(str) {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   let result = str.split('').filter(char => !vowels.includes(char)).join('');
   console.log(result);
   return result;
}

disemvowel(str1);
disemvowel(str2);