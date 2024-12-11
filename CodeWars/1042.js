const toOnes = x => (x.toString(2).match(/1/g) || []).length
const sortFunction = (a, b) => (toOnes(b) - toOnes(a)) || (a-b)
const sortByBinaryOnes = (list) => list.sort(sortFunction)