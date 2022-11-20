function countToValue(number) {
  const newArray = [];
  if (number >= 0) {
    for (i=0; i <= number; i+=1) {
      newArray.push(i);
    }
  } else if (number <= 0) {
    for (i=0; i >= number; i-=1) {
      newArray.unshift(i);
    }
  } else if (isNaN(number)) {
    return false;
  }
  return newArray;
}

// This will need to use array.map!
function robogerIt(number) {
  let numToString = "" + number;
  if (numToString.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (numToString.includes("2")) {
    return "Boop";
  } else if (numToString.includes("1")) {
    return "Beep";
  } else {
    return number;
  }
}