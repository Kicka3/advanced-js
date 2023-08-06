function balance (arr1, arr2){
  if (arr1.length!==arr2.length) return false
  let f = arr1.reduce((a,b)=>(a[b]=a[b]+1|0+1,a),{})
  let s = arr2.reduce((a,b)=>(a[b]=a[b]+1|0+1,a),{})
  return Object.values(f).sort().toString()===Object.values(s).sort().toString()
}