function skiponacci(n) {
   if (n === 1) return '1'
   let arr = [1,1]
   for (let i = 0; i < n - 2; i++) {
      arr.push(arr[i] + arr[i+1])
   }
   return arr.map((v,i) => (i+1) % 2 === 0 ? 'skip' : v).join` `
}