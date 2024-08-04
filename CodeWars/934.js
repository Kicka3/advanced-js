function authList(arr) {
   return arr.every( (y) => {

      return /^(?=.*\d)(?=.*[a-z])[a-z\d]{6,10}$/.test(y)
   })
}