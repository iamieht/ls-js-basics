function calculateBMI(height, weight) {
  let bmi = weight / (height / 100) ** 2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"
