// What are the return values of the statements on lines 3 to 5?

let trees = ["birch", "pine", "sequoia", "palm tree"];

console.log(trees[trees.length - 1]); // => 'palm tree' the last element of the array
console.log(trees.pop()); // => 'palm tree' will mutate the array by removing the last element and returning it
console.log(trees[trees.length - 1]); // => 'sequoia'
