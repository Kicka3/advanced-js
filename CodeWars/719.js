function to1D(x, y, size) {
   let arr1 =[];
   let j=0
   let tempArr=[]
   for (let i=0;i<size[1];i++){
      tempArr=[]
      for (let k=0;k<size[0];k++){
         tempArr.push(j++)
      }
      arr1.push(tempArr)
   }
   return arr1[y][x]
}

function to2D(n, size) {
   let arr =[];
   let j=0
   let tempArr=[]
   for (let i=0;i<size[1];i++){
      tempArr=[]
      for (let k=0;k<size[0];k++){
         tempArr.push(j++)
      }
      arr.push(tempArr)
   }
   for (let i=0;i<arr.length;i++){

      for (let k=0;k<arr[0].length;k++){
         if (arr[i][k]===n) return [k,i]
      }
   }
}