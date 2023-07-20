function mutation([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  return !regex.test(elem2);
}

mutation(["hello", "hey"]);