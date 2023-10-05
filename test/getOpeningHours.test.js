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

  // Teste adicional: Zoológico está aberto em um dia específico e horário específico
  test('Zoológico está aberto em um dia específico e horário específico', () => {
    const day = 'Tuesday';
    const time = '11:00 AM';
    const result = getOpeningHours(day, time);
    expect(result).toBe('The zoo is open');
  });

  // Teste adicional: Zoológico está fechado em um dia específico e horário específico
  test('Zoológico está fechado em um dia específico e horário específico', () => {
    const day = 'Wednesday';
    const time = '8:00 PM';
    const result = getOpeningHours(day, time);
    expect(result).toBe('The zoo is closed');
  });

  // Teste adicional: Dia inválido
  test('Dia inválido (minúsculas)', () => {
    const day = 'sunday';
    const time = '10:30 AM';
    const result = () => getOpeningHours(day, time);
    expect(result).toThrowError('The day must be valid. Example: Monday');
  });

  // Teste adicional: Hora válida (minúsculas)
  test('Hora válida (minúsculas)', () => {
    const day = 'Monday';
    const time = '1:30 pm';
    const result = getOpeningHours(day, time);
    expect(result).toBe('The zoo is open');
  });
});
