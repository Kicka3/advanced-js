function getGrade (s1, s2, s3) {
   let score = (s1 + s2 + s3) / 3;
   if (90 <= score && score <= 100) {
     return "A";
   } else if (80 <= score && score < 90) {
     return "B";
   } else if (70 <= score && score < 80) {
     return "C";
   } else if (60 <= score && score < 70) {
     return "D";
   } else if (0 <= score && score < 60) {
     return "F"
   }
 }

 function getGrade(...scores) {
   let average = scores.reduce((a, b) => a + b) / scores.length
   
   if (average >= 90) return 'A'
   else if (average >= 80) return 'B'
   else if (average >= 70) return 'C'
   else if (average >= 60) return 'D'
   else return 'F'
 }

 function getGrade (s1, s2, s3) {
   avg = (s1+s2+s3)/3;
   if (avg < 60)  return "F";
     else if (avg < 70) return "D";
     else if (avg < 80) return "C";
     else if (avg < 90) return "B";
     else return "A";
 }