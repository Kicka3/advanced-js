function whatIsInAName(collection, source) {

  const sourceKeys = Object.keys(source);
  console.log(sourceKeys)

  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]){
        return false;
      }
    }
    return true;
  })


}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });