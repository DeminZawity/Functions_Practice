// --------------------------------------------------------------Part One
const practice = () => {
  console.log("FUNctions are fun!");
};

practice();
// ----------------------------------
const sum = (num1, num2) => {
  return num1 + num2;
};
const adding = sum(10, 15);

console.log(adding);
// ----------------------------------
const multiplication = (num1, num2) => {
  return num1 * num2;
};
const multiply = multiplication(5, 5);

console.log(multiply);
// ----------------------------------
const demin = (num1, num2, num3) => {
  let addition = sum(num1, num2);
  let dem = multiplication(addition, num3);
  console.log(dem);
};

demin(5, 5, 10);
