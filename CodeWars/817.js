1
121
12321
1234321
123454321
1234321
12321
121
1
// pattern(10):

1
121
12321
1234321
123454321
12345654321
1234567654321
123456787654321
12345678987654321
1234567890987654321
12345678987654321
123456787654321
1234567654321
12345654321
123454321
1234321
12321
121
1
// pattern(15):

1
121
12321
1234321
123454321
12345654321
1234567654321
123456787654321
12345678987654321
1234567890987654321
123456789010987654321
12345678901210987654321
1234567890123210987654321
123456789012343210987654321
12345678901234543210987654321
123456789012343210987654321
1234567890123210987654321
12345678901210987654321
123456789010987654321
1234567890987654321
12345678987654321
123456787654321
1234567654321
12345654321
123454321
1234321
12321
121
1
// pattern(20):

1
121
12321
1234321
123454321
12345654321
1234567654321
123456787654321
12345678987654321
1234567890987654321
123456789010987654321
12345678901210987654321
1234567890123210987654321
123456789012343210987654321
12345678901234543210987654321
1234567890123456543210987654321
123456789012345676543210987654321
12345678901234567876543210987654321
1234567890123456789876543210987654321
123456789012345678909876543210987654321
1234567890123456789876543210987654321
12345678901234567876543210987654321
123456789012345676543210987654321
1234567890123456543210987654321
12345678901234543210987654321
123456789012343210987654321
1234567890123210987654321
12345678901210987654321
123456789010987654321
1234567890987654321
12345678987654321
123456787654321
1234567654321
12345654321
123454321
1234321
12321
121
1

function pattern(n){
   if (n===1) return '1'
   let output="";
   for (let i=1;i<=n;i++){
      let arr = Array(i).fill(0).map((v,i)=>(i+1)%10).join``
      let arr2 = arr.split``.reverse().join``.slice(1)
      output+=' '.repeat(n-i)+arr+arr2+' '.repeat(n-i)+'\n'
   }
   return output+(output.split`\n`.reverse().slice(2).join`\n`);
}