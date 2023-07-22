function expressionMatter(a, b, c) {
  const results = []
  results.push(a + b + c);
  results.push(a * b * c);
  results.push(a + b * c);
  results.push((a + b) * c);
  results.push(a * b + c);
  results.push(a * (b + c));
  
  
  return Math.max(...results)
  return // highest achievable result
}