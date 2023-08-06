function encrypt(text, rule) {
  return text.split('').map(v=>String.fromCharCode((v.charCodeAt()+rule)%256)).join(``)
};