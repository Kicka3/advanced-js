const findSpaceship = (map = "") => {
   map = map.split("\n").reverse()

   for (let y = 0; y < map.length; y++) {
      for (let x = 0function GrεεκL33t(str){
         let dict = {a:'α',b:'β',d:'δ',e:'ε',i:'ι',k:'κ',n:'η',o:'θ',p:'ρ',r:'π',t:'τ',u:'μ',
            v:'υ',w:'ω',x:'χ',y:'γ'}
         return str.replace(/./g,v=>{
            if (dict[v.toLowerCase()]){
               return v===v.toUpperCase()?dict[v.toLowerCase()]:dict[v]
            }
            return v.toLowerCase()
         })
      }; x < map[y].length; x++) {
         if (map[y][x] === "X") return [x, y]
      }
   }

   return "Spaceship lost forever."
}