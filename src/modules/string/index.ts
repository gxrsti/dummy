type Casing = 'upper' | 'lower' | 'mixed';

interface BaseOptions {
  length?: number | { min: number; max: number };
  exclude?: ReadonlyArray<string> | string;
}

interface CasingOptions extends BaseOptions {
  casing?: Casing;
}

interface NumericOptions extends BaseOptions {
  allowLeadingZeros?: boolean;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

const getRandomLength = (length: number | { min: number; max: number }): number => {
  return typeof length === 'number' ? length : Math.floor(Math.random() * (length.max - length.min + 1)) + length.min;
};

const getAvailableChars = (source: string, exclude: Set<string>, casing: Casing = 'mixed'): string[] => {
  let availableChars = source.split('').filter((char) => !exclude.has(char));
  if (casing !== 'mixed') {
    availableChars = availableChars.filter((char) =>
      casing === 'lower' ? char >= 'a' && char <= 'z' : char >= 'A' && char <= 'Z',
    );
  }
  return availableChars;
};

const generateString = (availableChars: string[], length: number): string => {
  return Array.from({ length }, () => availableChars[Math.floor(Math.random() * availableChars.length)]).join('');
};

export class StringModule {
  alpha(options: number | CasingOptions = {}): string {
    const {
      length = 10,
      exclude = new Set<string>(),
      casing = 'mixed',
    } = typeof options === 'number' ? { length: options } : options;
    const excludeSet = new Set(typeof exclude === 'string' ? exclude.split('') : exclude);
    const availableChars = getAvailableChars(chars, excludeSet, casing);
    return generateString(availableChars, getRandomLength(length));
  }

  alphanumeric(options: number | CasingOptions = {}): string {
    const {
      length = 10,
      exclude = new Set<string>(),
      casing = 'mixed',
    } = typeof options === 'number' ? { length: options } : options;
    const excludeSet = new Set(typeof exclude === 'string' ? exclude.split('') : exclude);
    const availableChars = getAvailableChars(chars + numbers, excludeSet, casing);
    return generateString(availableChars, getRandomLength(length));
  }

  numeric(options: number | NumericOptions = {}): string {
    const {
      length = 10,
      exclude = new Set(),
      allowLeadingZeros = true,
    } = typeof options === 'number' ? { length: options } : options;
    const excludeSet = new Set(typeof exclude === 'string' ? exclude.split('') : exclude);
    const availableDigits = numbers.split('').filter((digit) => !excludeSet.has(digit));

    let result = '';
    for (let i = 0; i < getRandomLength(length); i++) {
      if (i === 0 && !allowLeadingZeros) {
        const nonZeroDigits = availableDigits.filter((digit) => digit !== '0');
        result += nonZeroDigits[Math.floor(Math.random() * nonZeroDigits.length)];
      } else {
        result += availableDigits[Math.floor(Math.random() * availableDigits.length)];
      }
    }
    return result;
  }

  uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
