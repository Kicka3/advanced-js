function howMuchTax(salary) {
   salary-=11500
   let tax = 0
   if (salary<=0) return 'You should pay no tax'
   if (salary>=33500){
      salary-=33500
      tax+=6700
   } else { return `You should pay £${salary*0.2} in tax`}
   if (salary>=105000){
      salary-=105000
      tax+=42000
   } else { return `You should pay £${salary*0.4+6700} in tax`}
   return `You should pay £${salary*0.45+tax} in tax`
}