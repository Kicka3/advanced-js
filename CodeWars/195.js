function Robot() {
  this.arr =['i', 'already', 'know', 'the', 'word','thank', 'you', 'for','me','teaching','understand']
}

Robot.prototype.learnWord = function(word) {
  if (/\W|\d|\s/i.test(word)||!word) return "I do not understand the input"
  if (!this.arr.includes(word.toLowerCase())){
  this.arr.push(word.toLowerCase())
  return `Thank you for teaching me ${word}`
  }else
  return `I already know the word ${word}`
}