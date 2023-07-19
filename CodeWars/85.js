function removeExclamationMarks(s) {
  let res = '';
  for (let i = 0; i < s.length; i++){
    if (s[i] != '!') {
      res += s[i];
    }
  }
  return res;
}