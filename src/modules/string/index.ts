type Casing = 'upper' | 'lower' | 'mixed';

interface AlphaOptions {
  length?: number | { min: number; max: number };
  casing?: Casing;
  exclude?: ReadonlyArray<string> | string;
}

interface AlphaNumericOptions {
  length?: number | { min: number; max: number };
  casing?: Casing;
  exclude?: ReadonlyArray<string> | string;
}

interface NumericOptions {
  length?: number | { min: number; max: number };
  exclude?: ReadonlyArray<string> | string;
  allowLeadingZeros?: boolean;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

export class StringModule {
  alpha(options: number | AlphaOptions = {}): string {
    let length = 10;
    let exclude: Set<string> = new Set();
    let casing: Casing = 'mixed';

    if (typeof options === 'number') {
      length = options;
    } else {
      if (typeof options.length === 'number') {
        length = options.length;
      } else if (options.length && typeof options.length === 'object') {
        length = Math.floor(Math.random() * (options.length.max - options.length.min + 1) + options.length.min);
      }

      if (options.exclude) {
        exclude = new Set(typeof options.exclude === 'string' ? options.exclude.split('') : options.exclude);
      }

      if (options.casing) casing = options.casing;
    }

    let availableChars = chars.split('').filter((char) => !exclude.has(char));
    if (casing !== 'mixed')
      availableChars = availableChars.filter((char) =>
        casing === 'lower' ? char >= 'a' && char <= 'z' : char >= 'A' && char <= 'Z',
      );

    return Array.from({ length }, () => availableChars[Math.floor(Math.random() * availableChars.length)]).join('');
  }

  alphanumeric(options: number | AlphaNumericOptions = {}): string {
    let length = 10;
    let exclude: Set<string> = new Set();
    let casing: Casing = 'mixed';

    if (typeof options === 'number') {
      length = options;
    } else {
      if (typeof options.length === 'number') {
        length = options.length;
      } else if (options.length && typeof options.length === 'object') {
        length = Math.floor(Math.random() * (options.length.max - options.length.min + 1) + options.length.min);
      }

      if (options.exclude) {
        exclude = new Set(typeof options.exclude === 'string' ? options.exclude.split('') : options.exclude);
      }

      if (options.casing) casing = options.casing;
    }

    let availableChars = chars
      .concat(numbers)
      .split('')
      .filter((char) => !exclude.has(char));
    if (casing !== 'mixed')
      availableChars = availableChars.filter((char) =>
        casing === 'lower' ? char >= 'a' && char <= 'z' : char >= 'A' && char <= 'Z',
      );

    return Array.from({ length }, () => availableChars[Math.floor(Math.random() * availableChars.length)]).join('');
  }

  numeric(options: number | NumericOptions = {}): string {
    let length = 10;
    let exclude: Set<string> = new Set();
    let allowLeadingZeros = true;

    if (typeof options === 'number') {
      length = options;
    } else {
      if (typeof options.length === 'number') {
        length = options.length;
      } else if (options.length && typeof options.length === 'object') {
        length = Math.floor(Math.random() * (options.length.max - options.length.min + 1) + options.length.min);
      }

      if (options.exclude) {
        exclude = new Set(typeof options.exclude === 'string' ? options.exclude.split('') : options.exclude);
      }

      if (options.allowLeadingZeros !== undefined) {
        allowLeadingZeros = options.allowLeadingZeros;
      }
    }

    let availableDigits = numbers.split('').filter((digit) => !exclude.has(digit));

    let result = '';
    for (let i = 0; i < length; i++) {
      if (i === 0 && !allowLeadingZeros) {
        const nonZeroDigits = availableDigits.filter((digit) => digit !== '0');
        result += nonZeroDigits[Math.floor(Math.random() * nonZeroDigits.length)];
      } else {
        result += availableDigits[Math.floor(Math.random() * availableDigits.length)];
      }
    }

    return result;
  }
}
