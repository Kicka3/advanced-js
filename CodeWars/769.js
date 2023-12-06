const findSpaceship = (map = "") => {
   map = map.split("\n").reverse()

   for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
         if (map[y][x] === "X") return [x, y]
      }
   }

   return "Spaceship lost forever."
}