type Casing = 'upper' | 'lower' | 'mixed';

interface AlphaOptions {
  length?: number | { min: number; max: number };
  casing?: Casing;
  exclude?: ReadonlyArray<string> | string;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

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
}
