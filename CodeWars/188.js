function combine(...arr) {
    let newArr=[]
    let max=Math.max(...arr.map(v=>v.length))
    for(let i=0;i<max;i++){
      for (let j=0;j<arr.length;j++){
        arr[j][i]?newArr.push(arr[j][i]):1
        }
    }
     return newArr
  }