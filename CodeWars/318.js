const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

function toHex(numb) {
  if (numb <= 0)   return '00';
  if (numb > 255)  return 'FF';
  return numb.toString(16).toUpperCase();
}