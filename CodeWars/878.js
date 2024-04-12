function crossingSum(matrix, row, column){

   let rowSum = 0;
   for(let i = 0; i < matrix[row].length; i++){
      rowSum += matrix[row][i];
   }

   let columnSum = 0;
   for(let i = 0; i < matrix.length; i++){
      columnSum += matrix[i][column]
   }

   return columnSum + rowSum - matrix[row][column];

}