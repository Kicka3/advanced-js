function get_neighbourhood(type, arr, [y,x]){
   if(!arr[y]||arr[y][x]===undefined) return [];
   return (type==='moore'?[[y-1,x-1],[y-1,x],[y-1,x+1],[y,x-1],[y,x+1],[y+1,x-1],[y+1,x],[y+1,x+1]]:[[y,x-1],[y,x+1],[y-1,x],[y+1,x]]).filter(([y,x])=>arr[y]&&arr[y][x]!==undefined).map(([y,x])=>arr[y][x]).sort((a,b)=>a-b);
}