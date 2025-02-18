import { dummy } from '../../src';

describe('Number module', () => {
  test('int should return a number', () => {
    expect(typeof dummy.number.int()).toBe('number');
  });
});
