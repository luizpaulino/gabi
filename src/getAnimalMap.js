const data = require('../data/zoo_data');

const getAnimalMap = (options) => {};
//   const animalData = data.species.reduce((acc, species) => {
//     const { name, location, residents } = species;
//     const animals = residents.map((resident) => resident.name);
//     acc[location] = acc[location] || {};
//     acc[location][name] = animals;
//     return acc;
//   }, {});

//   const filteredData = {};

//   Object.keys(animalData).forEach((location) => {
//     let animals = Object.keys(animalData[location]);

//     if (options && options.sex) {
//       animals = animals.filter((animal) => {
//         const speciesData = data.species.find(
//           (species) => species.location === location && species.name === animal,
//         );
//         return speciesData.residents.some((resident) => resident.sex === options.sex);
//       });
//     }

//     if (options && (options.sex === 'female' || options.sex === 'male')) {
//       animals = animals.filter((animal) => {
//         const speciesData = data.species.find(
//           (species) => species.location === location && species.name === animal,
//         );
//         return speciesData.residents.some((resident) => resident.sex === options.sex);
//       });

//       animals.sort();

//       filteredData[location] = animals;
//     }

//     // Ordena os nomes dos animais para cada localização.
//     Object.keys(filteredData).forEach((location) => {
//       filteredData[location].sort();
//     });

//     return filteredData;
//   });
// };

module.exports = getAnimalMap;
