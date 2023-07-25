function bouncer(arr) {
  let localArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) localArr.push(arr[i]);
  }

  return localArr;
}

bouncer([7, "ate", "", false, 9]);