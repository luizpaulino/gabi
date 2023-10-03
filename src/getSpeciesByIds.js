const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) return [];
  const speciesArray = ids.map((id) => {
    const species = data.species.find((s) => s.id === id);
    return species;
  });
  return speciesArray;
};

module.exports = getSpeciesByIds;
