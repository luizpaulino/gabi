const getOpeningHours = require('../src/getOpeningHours');

describe('getOpeningHours', () => {
  test('Zoológico está aberto em um dia e horário específicos', () => {
    const day = 'Monday';
    const time = '10:30 AM';
    const result = getOpeningHours(day, time);
    expect(result).toBe('The zoo is open');
  });

  test('Zoológico está fechado em um dia e horário específicos', () => {
    const day = 'Monday';
    const time = '5:30 PM';
    const result = getOpeningHours(day, time);
    expect(result).toBe('The zoo is closed');
  });

  test('Dia inválido', () => {
    const day = 'InvalidDay';
    const time = '10:30 AM';
    const result = () => getOpeningHours(day, time);
    expect(result).toThrowError('The day must be valid. Example: Monday');
  });

  test('Hora inválida', () => {
    const day = 'Monday';
    const time = '10:30AM';
    const result = () => getOpeningHours(day, time);
    expect(result).toThrowError('Invalid time format');
  });
  test('Hora não especificada', () => {
    const day = 'Wednesday';
    const time = null;
    const result = getOpeningHours(day, time);
    expect(result).toBe('The zoo is closed');
  });
});
