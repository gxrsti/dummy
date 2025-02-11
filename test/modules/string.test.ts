import { dummy } from '../../src';

describe('String module', () => {
  test('alpha should return a string', () => {
    expect(typeof dummy.string.alpha()).toBe('string');
  });

  test('alphanumeric should return a string', () => {
    expect(typeof dummy.string.alphanumeric()).toBe('string');
  });
});
