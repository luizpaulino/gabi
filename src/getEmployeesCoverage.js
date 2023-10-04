const data = require('../data/zoo_data');

// const employees = [
//   {
//     id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//     firstName: 'Sharonda',
//     lastName: 'Spry',
//     species: ['otters', 'frogs'],
//     locations: ['SE', 'SW'],
//   },
// ];

function getEmployeesCoverage(params) {}
//   if (!params || (params.id === undefined && params.name === undefined)) {
//     throw new Error('Informações inválidas');
//   }

//   if (params.id !== undefined) {
//     const employee = employees.find((emp) => emp.id === params.id);
//     if (employee) {
//       return [{
//         id: employee.id,
//         fullName: `${employee.firstName} ${employee.lastName}`,
//         species: employee.species,
//         locations: employee.locations,
//       }];
//     }
//     throw new Error('Informações inválidas');
//   }

//   if (params.name !== undefined) {
//     const employee = employees.find((emp) => {
//       const fullName = `${emp.firstName} ${emp.lastName}`;
//       return fullName.toLowerCase().includes(params.name.toLowerCase());
//     });
//     if (employee) {
//       return [{
//         id: employee.id,
//         fullName: `${employee.firstName} ${employee.lastName}`,
//         species: employee.species,
//         locations: employee.locations,
//       }];
//     }
//     throw new Error('Informações inválidas');
//   }

//   throw new Error('Informações inválidas');
// }

module.exports = getEmployeesCoverage;
