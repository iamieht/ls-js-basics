let animal = "horse";

switch (animal) {
  case "duck":
    console.log("quack");
  case "squirrel":
    console.log("nook nook");
  case "horse":
    console.log("neigh");
  case "bird":
    console.log("tweet tweet");
  default:
    console.log("*cricket*");
}

// neigh, tweet tweet, *cricket*
// In order to avoid this "fall through" behavior, we can place a break statement in each clause of our switch statement:

switch (animal) {
  case "duck":
    console.log("quack");
    break;
  case "horse":
    console.log("neigh");
    break;
  case "bird":
    console.log("tweet tweet");
    break;
  default:
    console.log("*crickets*");
}
