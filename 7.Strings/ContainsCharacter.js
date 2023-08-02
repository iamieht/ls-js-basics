// Write code that checks whether the string byteSequence contains the character x.
function includes(char, string) {
  for (let s of string) {
    if (s === char) {
      return true;
    }
  }
  return false;
}

let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";

console.log(byteSequence.includes("x"));
console.log(includes("x", byteSequence));
