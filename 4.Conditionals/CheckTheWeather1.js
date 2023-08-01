const weatherOptions = ["sunny", "rainy", "snow", "muddy"];
let weather =
  weatherOptions[Math.round(Math.random() * weatherOptions.length - 1)];

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}
