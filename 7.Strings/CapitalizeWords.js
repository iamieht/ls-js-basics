// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

function capitalize(string) {
  let array = string.split(" ");
  let newArray = [];

  for (word of array) {
    newArray.push(word[0].toUpperCase() + word.slice(1));
  }

  return newArray.join(" ");
}

console.log(capitalize("launch school tech & talk"));
