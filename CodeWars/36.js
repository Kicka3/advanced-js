//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0; 
  
  const eyes = {
    ":" : true,
    ";" : true,
  };
   
  const noses = {
    '-' : true,
    '~' : true,
  };
  
  const mouths = {
    ')' : true,
    'D' : true
  };
  
  for (let i = 0; i < arr.length; i++) {
    const face = arr[i];
    if (face.length == 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count ++;
      }
    } else if (face.length == 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]){
        count++;
      }
    }
  }
  return count;
}