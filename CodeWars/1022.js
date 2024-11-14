function drawRectangle(canvas, [ x1, y1, x2, y2 ]) {

   for (let x = x1 + 1; x < x2; x++) {
      canvas[y1][x] = '-';
      canvas[y2][x] = '-';
   }

   for (let y = y1 + 1; y < y2; y++) {
      canvas[y][x1] = '|';
      canvas[y][x2] = '|';
   }

   canvas[y1][x1] = '*';
   canvas[y1][x2] = '*';
   canvas[y2][x1] = '*';
   canvas[y2][x2] = '*';

   return canvas;
}