function isJubilee(year) {
   return new Date(Date.UTC(year,07-1,25)).toLocaleString('en-US',{weekday:'long'})==='Sunday'
}