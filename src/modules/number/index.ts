interface IntOptions {
  min?: number;
  max?: number;
  multipleOf?: number;
}

export class NumberModule {
  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
}
