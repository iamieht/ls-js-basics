// Find out whether JavaScript has a method to lowercase a string, for example converting 'Aloha, World!' into 'aloha, world!.

console.log("Aloha, World!".toLowerCase());

// You might notice that there is an additional method String.prototype.toLocaleLowerCase(), which is relevant for alphabets in which the case mapping is not as straightforward as in English. But as long as we don't work with a language where this is the case, toLowerCase() is the straightforward choice.
