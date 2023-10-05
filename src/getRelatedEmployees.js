const data = require('../data/zoo_data');

const isManager = (id) => {
  return data.employees.some((emp) => emp.managers.includes(id));
};

const getRelatedEmployees = (managerId) => {
  const employees = data.employees.filter((emp) => emp.managers.includes(managerId));

  if (employees.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees.map((emp) => `${emp.firstName} ${emp.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };