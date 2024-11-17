function howMany(students,[a,b],unfinish){
   for (let i=0;i<students;i++){
      if (a-i+b-i+i+unfinish===students) return i
   }
   return -1
}