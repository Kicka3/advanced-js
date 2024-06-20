const matrixSquareUp = b => {
   let arr =[];
   let tempArr=[]
   for (let i=1 ; i<=b;i++){
      tempArr=[];
      for (let j=b ; j>0;j--){
         if (j>i) tempArr.push('x')
         else tempArr.push(j+'')
      }
      arr.push(tempArr)
   }
   return arr
}