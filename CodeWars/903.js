function isPalindrome(stringToTest) {
   if (typeof stringToTest !== 'string') return false
   stringToTest=stringToTest.toLowerCase().replace(/[^\w]/gi,'')
   return stringToTest == stringToTest.split('').reverse().join('');
}