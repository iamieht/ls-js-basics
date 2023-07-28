// What will the following statements return?

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(" ");
let isValid = tweet.length < 140;

typeof tweet; // => 'string'
typeof words; // => 'object'
typeof isValid; // => 'boolean'

// Note in particular that although words is an array, typeof words returns 'object'. This is because, in JavaScript, arrays are a kind of object. If you need to specifically distinguish whether an object is an array, you can use the Array.isArray() method, which returns a Boolean
