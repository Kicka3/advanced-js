var capitals = function (word) {
   let w2 = word.split('');
   let z = [];
   for (let i = 0; i < w2.length; i++){
      if (w2[i] == w2[i].toUpperCase()) {
         z.push(i);
      }
   }
   return z;
};