function areSimilar(A, B) {
   return A==B+''||A.filter((v,i)=> v!=B[i]).length==2&&A.every(v=> B.includes(v));
}