function closestPairTonum(n) {
  for (let i=n-1;i>0;i--){
      for (let j=n-2;j>0;j--){
        if (Math.sqrt(i+j)%1===0&&Math.sqrt(i-j)%1===0&&i>j) return [i,j]
      }
    }
}