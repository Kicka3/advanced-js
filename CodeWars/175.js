function pattern(n){
   var output="";
     let arr = [];
     for (let i=1,j=(n-1)*2-1;i<=n;i++,j-=2){
       if (i===n) output+=' '.repeat(i-1)+i%10+' '.repeat(i-1)+'\n'
       else output+=' '.repeat(i-1)+i%10+' '.repeat(j)+i%10+' '.repeat(i-1)+'\n'
     }
   return output+output.split`\n`.slice(0,-2).reverse().join`\n`;
  }