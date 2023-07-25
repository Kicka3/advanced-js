function splitAndMerge(string, separator) {
  return string.split(' ').map(word => word.split('').join(separator)).join(' ')
  
}