console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.find((animal) =>
  animal.name.startsWith("p")
);

console.log(firstAnimalStartingWithLetterG.name);

const indexOfAnimalWithNameLongerFive = animals
  .map((name, index) => (name.name.length > 5 ? index : null))
  .filter((index) => index !== null);

console.log(indexOfAnimalWithNameLongerFive);
// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy (and the tests work).

const animalsSortedAlphabetically = animals.toSorted((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(animalsSortedAlphabetically);

const animalsSortedByWeightStartingWithLowest = animals.toSorted((a, b) => {
  if (a.weight > b.weight) {
    return 1;
  }
  if (a.weight < b.weight) {
    return -1;
  }
  return 0;
});

console.log(animalsSortedByWeightStartingWithLowest);

const animalsSortedByWeightReversed = animals.toSorted((a, b) => {
  if (a.weight > b.weight) {
    return -1;
  }
  if (a.weight < b.weight) {
    return 1;
  }
  return 0;
});
console.log(animalsSortedByWeightReversed);

const animalWithWeightMoreThanFivehundredExists = animals.includes(
  (animal) => animal.weight > 5000
);

console.log(animalWithWeightMoreThanFivehundredExists);

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred = animals.filter((animal) => {
  if (animal.continents.includes("Europe")) {
    return animal.weight < 100;
  }
});

console.log(allAnimalsInEuropeWeighLessThanOnehundred);

// Hint: filter + map + reduce
const weightOfAllAnimalsInAfrica = animals
  .filter((animal) => animal.continents.includes("Africa"))
  .map((animal) => animal.weight)
  .reduce((a, b) => a + b, 0);

console.log(weightOfAllAnimalsInAfrica);

// Hint: As above, but divided by the number of animals in Africa.

const africanAnimals = animals.filter((animal) =>
  animal.continents.includes("Africa")
);
const africanAnimalsWeight = africanAnimals.map((animal) => animal.weight);
const totalWeight = africanAnimalsWeight.reduce((a, b) => a + b, 0);
const numbersOfAnimalsInAfrica = africanAnimals.length;

const averageWeightOfAllAnimalsInAfrica =
  totalWeight / numbersOfAnimalsInAfrica;

console.log(numbersOfAnimalsInAfrica);
console.log(averageWeightOfAllAnimalsInAfrica);

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
