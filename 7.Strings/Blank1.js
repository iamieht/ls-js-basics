function isBlank(string) {
  return string ? false : true;
  // return string.length === 0;
}

console.log(isBlank("mars")); // false
console.log(isBlank("  ")); // false
console.log(isBlank("")); // true
