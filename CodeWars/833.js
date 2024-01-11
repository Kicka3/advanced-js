function ageInDays(year, month, day){
   const birthday = new Date().getTime();
   const date=new Date(year,month-1,day).getTime()
   const days=Math.floor(Math.abs(birthday-date) / (1000 * 3600 * 24))
   return `You are ${days} days old`
}