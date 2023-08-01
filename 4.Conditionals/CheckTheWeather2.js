const weatherOptions = ["sunny", "rainy", "snow", "muddy"];
let weather =
  weatherOptions[Math.round(Math.random() * weatherOptions.length - 1)];

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
}
