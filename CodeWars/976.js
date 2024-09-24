function make2dList(head,row,col){
   let arr = [];
   let tempArr =[]
   for (let i=0;i<row;i++){
      tempArr=[];
      for (let j=0;j<col;j++){

         tempArr.push(head++)

      }
      arr.push(tempArr)
   }

   return head>10000000004?[]:arr
}