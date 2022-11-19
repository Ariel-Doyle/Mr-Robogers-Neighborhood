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


function findNumber(array) {
  let separateOutNum = ("" + number).split("");
  //let sum=0;
  for (i=0; i < separateOutNum.length; i++) {
    if (separateOutNum.includes(3)) {
      separateOutNum += 1;
    }
    //sum = sum + parseInt(output[i], 10);
  }
  return separateOutNum;   
}


