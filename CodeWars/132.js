longestPalindrome=function(s){
  if (s.length===0) return 0
  let n=[];
  for (let i=0;i<s.length;i++){
      for (let j=i;j<s.length+1;j++){
      if (isPalindrome(s.slice(i,j))){n.push(s.slice(i,j).length)}
      }}
    return Math.max(...n)
}

function isPalindrome(line) {
let q=line.split('').reverse().join('');
return q==line;
}