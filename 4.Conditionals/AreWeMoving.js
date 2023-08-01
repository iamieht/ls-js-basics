let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
// brakingForce < acceleration && (false || true);
// brakingForce < acceleration && (true);
// true && true
// true

console.log(isMoving);

isMoving = (brakingForce < acceleration && speed > 0) || acceleration > 0;
// true && speed > 0 || acceleration > 0;
// true && false || acceleration > 0;
// false || true;
// true
console.log(isMoving);
