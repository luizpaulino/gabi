const data = require('../data/zoo_data');

const getSpeciesByIds = (ids) => {
  if (!Array.isArray(ids) || ids.length === 0) {
    return [];
  }
  const speciesArray = ids.map((id) => {
    const species = data.species
      .find((s) => s.id === id)
      .filter((specie) => specie !== undefined);
    return species;
  });
  return speciesArray;
};
module.exports = getSpeciesByIds;
