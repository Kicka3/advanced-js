function points(games) {
  let count = 0;
  games.forEach(item => {
    if (item[0] > item[2]) {
      count +=3;
    } else if(item[0] < item[2]) {
        count += 0;
    } else if (item[0] === item[2]) {
        count += 1;
    }
  });
    return count;
  }