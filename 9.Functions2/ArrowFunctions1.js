const template = "I VERB NOUN.";

function sentence(verb, noun) {
  return template.replace("VERB", verb).replace("NOUN", noun);
}

let sentenceArrow = (verb, noun) =>
  template.replace("VERB", verb).replace("NOUN", noun);

console.log(sentence("like", "birds"));
console.log(sentenceArrow("like", "birds"));
// logs: I like birds.
