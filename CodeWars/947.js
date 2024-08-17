function bareable(h, hu){
   if (h>35||hu>0.5) return false
   if (h>25&&hu>0.4) return false
   if (h<=25) return false
   return true
}