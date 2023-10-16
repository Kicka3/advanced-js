//return price without vat
function excludingVatPrice(price){
   if (price === null) return -1
   const vat = 1.15;
   const rs = Math.round(price / vat * 100) /100
   console.log(rs)
   return rs;
}