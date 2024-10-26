function board(size){
   let chess_row = ""
   for(var y=0;y<size;y++){
      for(var x=0;x<size;x++ ){
         if((y+x)%2 == 0){
            chess_row += '#';
         }else{
            chess_row += ' ';
         }
      }
      chess_row +="\n";
   }
   return chess_row
}