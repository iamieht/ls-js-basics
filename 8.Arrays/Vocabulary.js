// Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

for (let element of vocabulary) {
  for (let word of element) {
    console.log(word);
  }
}

// Expected output:
// happy
// cheerful
// merry
// etc...
