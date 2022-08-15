// --------------------------------------------------------------Part One
// const practice = () => {
//   console.log("FUNctions are fun!");
// };

// practice();
// ----------------------------------
// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// const adding = sum(10, 15);

// console.log(adding);
// ----------------------------------
// const multiplication = (num1, num2) => {
//   return num1 * num2;
// };
// const multiply = multiplication(5, 5);

// console.log(multiply);
// ----------------------------------
// const demin = (num1, num2, num3) => {
//   let addition = sum(num1, num2);
//   let dem = multiplication(addition, num3);
//   console.log(dem);
// };

// demin(5, 5, 10);
// --------------------------------------------------------------Part Two
// iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentence "<NAME> is a superhero!".
let superheroesDetails = [
  {
    id: 1,
    name: "Wonder Woman",
    isDC: true,
  },
  {
    id: 1,
    name: "Captain America",
    isDC: true,
  },
  {
    id: 1,
    name: "Batman",
    isDC: true,
  },
  {
    id: 1,
    name: "The Flash",
    isDC: true,
  },
  {
    id: 1,
    name: "Spiderman",
    isDC: false,
  },
];
for (person of superheroesDetails) {
  if (person.isDC == true) {
    console.log(`${person.name} is in the Justice League.`);
  } else {
    console.log(`${person.name} is a superhero!`);
  }
}
// ----------------------------------
const createWoodBlock = () => {
  const properties = {
    type: "wood block",
    length: 10,
    material: "pine",
    purpose: "flute",
  };
  return properties;
};

const createBeautifulCarving = (woodObject) => {
  return `The ${woodObject.length} inch ${woodObject.material} woodblock was carvered into a wooden ${woodObject.purpose}`;
  // "The 10-inch, pine woodblock was carved into a wooden flute"
  // Return a string representation of the object
};

// The function returns a value, so that value is stored in a variable
const woodObject = createWoodBlock();

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodObject); // <-- Missing an argument. Fix it.

console.log(carvingString);
