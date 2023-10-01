const data = require('../data/zoo_data');

const isManager = (id) => {
  const employee = data.employees.find((person) => person.id === id);
  return !!employee && employee.managers.length > 0;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const employees = data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);

  return employees;
};

module.exports = { isManager, getRelatedEmployees };
