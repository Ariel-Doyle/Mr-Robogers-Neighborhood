function countToValue(number) {
  const newArray = [];
  if (number > 0) {
    for (i=0; i <= number; i+=1) {
      newArray.push(i);
    }
  } else if (number < 0) {
    for (i=0; i >= number; i-=1) {
      newArray.unshift(i);
    }
  }
  return newArray;
}

