import { dummy } from '../../src';

describe('Number module', () => {
  test('int should return a number', () => {
    expect(typeof dummy.number.int()).toBe('number');
  });

  test('int should be within the given range', () => {
    const min = 10;
    const max = 50;
    const result = dummy.number.int({ min, max });

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('int should respect multipleOf', () => {
    const multipleOf = 5;
    const result = dummy.number.int({ min: 0, max: 100, multipleOf });

    expect(result % multipleOf).toBe(0);
  });

  test('float should return a number', () => {
    expect(typeof dummy.number.float()).toBe('number');
  });

  test('float should be within the given range', () => {
    const min = 1.5;
    const max = 5.5;
    const result = dummy.number.float({ min, max });

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('float should respect precision', () => {
    const precision = 3;
    const result = dummy.number.float({ min: 0, max: 10, precision });

    const decimalPlaces = result.toString().split('.')[1]?.length || 0;
    expect(decimalPlaces).toBeLessThanOrEqual(precision);
  });

  test('float should respect multipleOf', () => {
    const multipleOf = 0.5;
    const result = dummy.number.float({ min: 0, max: 10, multipleOf });

    expect(result % multipleOf).toBeCloseTo(0, 5);
  });
});
