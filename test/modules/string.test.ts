import { dummy } from '../../src';

describe('String module', () => {
  test('alpha should return a string', () => {
    expect(typeof dummy.string.alpha()).toBe('string');
  });

  test('alphanumeric should return a string', () => {
    expect(typeof dummy.string.alphanumeric()).toBe('string');
  });

  test('numeric should return a string', () => {
    expect(typeof dummy.string.numeric()).toBe('string');
  });

  test('uuid should return a string', () => {
    expect(typeof dummy.string.uuid()).toBe('string');
  });
});
