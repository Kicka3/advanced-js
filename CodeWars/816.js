function getFunction(sequence) {
   const n = sequence[1]-sequence[0]
   const check = sequence[1]-sequence[0]===sequence[2]-sequence[1]
   if (!check) return'Non-linear sequence'
   return (x)=>x*n+sequence[0]
}