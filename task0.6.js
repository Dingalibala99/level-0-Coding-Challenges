function getMaximum(val1, val2, val3) {
    let maximumValue = 0;
    if (val1 >= val2 && val1 >= val3) {
      maximumValue = val1;
    } else if (val2 >= val1 && val2>= val3) {
      maximumValue = val2;
    } else if (val3 >= val1 && val3 >= val2) {
      maximumValue = val3;
    }   
    return maximumValue;
    }
  console.log(getMaximum(-50,-60,-40));

