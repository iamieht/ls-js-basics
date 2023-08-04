let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
// let nestedPerson = [];

// for (const prop in person) {
//   nestedPerson.push([prop, person[prop]]);
// }

// console.log(nestedPerson);

let nestedPerson = Object.entries(person);

console.log(nestedPerson);
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
