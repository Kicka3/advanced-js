// Word Segmentation: MaxMatch.js

function maxMatch(sentence){
  const arr = []
  for (let i=0;i<=sentence.length;i++){
    for (let j=sentence.length;j>=0;j--){
      if (VALID_WORDS.has(sentence.slice(i,j))){ arr.push(sentence.slice(i,j))
        sentence=sentence.replace(sentence.slice(i,j),'*')
        i=-1
        break
      }
    }
  }
   let i=0
   return sentence.split``.map(v=>v==='*'?arr[i++]:v)
}