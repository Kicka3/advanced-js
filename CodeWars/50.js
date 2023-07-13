function persistence(num) {
   let result = 0;
      str = String(num);
  while (str.length > 1) {
    str = String([...str].reduce((prev,curr) => prev * curr));
    result ++;
  }
  return result
}