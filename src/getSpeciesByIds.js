const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids.length) return []; // Verifica se a array de IDs está vazia e retorna um array vazio se for o caso
  const speciesArray = ids.map((id) => {
    const species = data.species.find((s) => s.id === id);
    return species;
  });
  return speciesArray.filter(Boolean); // Remove valores nulos (caso não tenha encontrado uma espécie para um ID)
};

module.exports = getSpeciesByIds;
