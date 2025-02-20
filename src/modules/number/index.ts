interface IntOptions {
  min?: number;
  max?: number;
  multipleOf?: number;
}

interface FloatOptions extends IntOptions {
  precision?: number;
}

export class NumberModule {
  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static getRandomFloat(min: number, max: number, precision: number): number {
    const factor = Math.pow(10, precision);
    return Math.round((Math.random() * (max - min) + min) * factor) / factor;
  }

  int(options: number | IntOptions = {}): number {
    const {
      min = 0,
      max = Number.MAX_SAFE_INTEGER,
      multipleOf = 1,
    } = typeof options === 'number' ? { max: options } : options;

    let result = NumberModule.getRandomInt(min, max);

    if (multipleOf) {
      result = Math.floor(result / multipleOf) * multipleOf;
    }

    return result;
  }

  float(options: number | FloatOptions = {}): number {
    const {
      min = 0,
      max = Number.MAX_SAFE_INTEGER,
      multipleOf = 1,
      precision = 2,
    } = typeof options === 'number' ? { max: options } : options;

    let result = NumberModule.getRandomFloat(min, max, precision);

    if (multipleOf) {
      result = Math.floor(result / multipleOf) * multipleOf;
    }

    return Number(result.toFixed(precision));
  }
}
