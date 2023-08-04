let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  greet: (recipient) => console.log(`Hej, ${recipient}!`),
};

jane.greet("Bobby"); // Hej, Bobby!
