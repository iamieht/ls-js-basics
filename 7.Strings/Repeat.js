function repeat(times, str) {
  let newStr = "";

  while (times > 0) {
    newStr += str;
    times -= 1;
  }

  return newStr;
}

console.log(repeat(3, "ha")); // 'hahaha'
