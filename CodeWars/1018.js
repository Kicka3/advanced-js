function squarePi(digits){
   let pi = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
   return Math.ceil(Math.sqrt(pi.slice(0,digits).split(``).map(v=>v*v).reduce((a,b)=>a+b,0)))
}