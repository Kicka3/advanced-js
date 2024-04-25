const foo = (a,b) => {
   if (a % 2 === 0 && b % 2 === 0) {
      return a * b
   } else if (a % 2 !== 0 || b % 2 !== 0) {
      return a + b
   } else {

   }
}

// console.log(foo(2,4))
console.log('------------')
console.log(foo(7,3))

