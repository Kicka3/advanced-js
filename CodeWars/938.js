function rndCode(){
   let dict1="ABCDEFGHIJKLM"
   let dict2 = '0123456789'
   let dict3 = "~!@#$%^&*"
   let str=''
   for (let i=1; i<=8;i++){
      if (i===1||i===2){str+=dict1[~~(dict1.length*Math.random())]}
      if (i>2&&i<7){str+=dict2[~~(dict2.length*Math.random())]}
      if (i>6){str+=dict3[~~(dict3.length*Math.random())]}
   }
   return str
}