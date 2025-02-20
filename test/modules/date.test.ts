import { dummy } from '../../src';

describe('Date module', () => {
  test('past should return a date in the past', () => {
    expect(dummy.date.past().getTime()).toBeLessThan(Date.now());
  });

  test('future should return a date in the future', () => {
    expect(dummy.date.future().getTime()).toBeGreaterThan(Date.now());
  });

  test('between should return a date between the dates', () => {
    const from = new Date('2000-01-01');
    const to = new Date('2025-01-01');
    const result = dummy.date.between({ from, to });

    expect(result.getTime()).toBeGreaterThanOrEqual(from.getTime());
    expect(result.getTime()).toBeLessThanOrEqual(to.getTime());
  });

  test('anytime should return a date', () => {
    expect(dummy.date.past()).toBeInstanceOf(Date);
  });
});
