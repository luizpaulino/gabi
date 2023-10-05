const data = require('../data/zoo_data');

function getEmployeesCoverage(params) {
  const { employees } = data;

  if (!params) {
    // Retorna um array com as informações de todas as pessoas colaboradoras
    return employees.map((employee) => ({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.species,
      locations: employee.locations,
    }));
  }

  if (params.id !== undefined) {
    // Retorna as informações da pessoa correspondente ao receber um objeto com a propriedade id
    const employee = employees.find((emp) => emp.id === params.id);
    if (employee) {
      return [{
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: employee.species,
        locations: employee.locations,
      }];
    }
    // Lança um erro caso o id seja inválido
    throw new Error('Informações inválidas');
  }

  if (params.name !== undefined) {
    // Retorna as informações da pessoa correspondente ao receber um objeto com a propriedade name
    const employee = employees.find((emp) => {
      const fullName = `${emp.firstName} ${emp.lastName}`;
      return fullName.toLowerCase().includes(params.name.toLowerCase());
    });
    if (employee) {
      return [{
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: employee.species,
        locations: employee.locations,
      }];
    }
    // Lança um erro caso não encontre nenhuma pessoa com o nome fornecido
    throw new Error('Informações inválidas');
  }

  // Lança um erro caso o parâmetro seja inválido
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
