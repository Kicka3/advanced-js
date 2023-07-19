function DNAStrand(dna){
  let  object = {A:'T', T:'A', C:'G', G:'C'}
  return dna.replace(/./g, e => object[e]);
}