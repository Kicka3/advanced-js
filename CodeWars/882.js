function motifLocator(sequence, motif) {
   let index=sequence.indexOf(motif)+1
   let lastIndex=sequence.lastIndexOf(motif)+1
   if (!index) return []
   return index===lastIndex?[index]:[index,lastIndex];
}