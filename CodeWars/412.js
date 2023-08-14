function areaCode(text) {
  return text.match(/\((\d{3})\)/)[1];
}