array = _ => {
   for (i = 1, a = [1, 1]; i < 38; i++) a.push((a[i - 1] + a[i]) % 10);
   return a
}