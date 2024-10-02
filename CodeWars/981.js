let toaster=(b)=>{
   b=b.toLowerCase()
   return b=="white bread"?"1 min":b=="frozen white bread"?"1.5 mins":
      b=="brown bread"?"2 mins":b=="frozen brown bread"?"3 mins":'Please do not put that in the toaster!'}