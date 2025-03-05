interface BetweenOptions {
  from: string | Date | number;
  to: string | Date | number;
}

const YearDifference = 40;

export class DateModule {
  private static getRandomTimeInRange(from: number, to: number): number {
    if (from > to) throw new Error("'from' date must be earlier than 'to' date.");
    return from + Math.random() * (to - from);
  }

  private static toTimestamp(date: string | Date | number): number {
    const time = new Date(date).getTime();
    if (isNaN(time)) throw new Error('Invalid date input.');
    return time;
  }

  private static getCurrentDateWithYearDifference(difference: number): number {
    const futureDate = new Date(Date.now());
    futureDate.setFullYear(futureDate.getFullYear() + difference);
    return futureDate.getTime();
  }

  past(): Date {
    return new Date(DateModule.getRandomTimeInRange(0, Date.now()));
  }

  future(): Date {
    return new Date(
      DateModule.getRandomTimeInRange(Date.now(), DateModule.getCurrentDateWithYearDifference(YearDifference)),
    );
  }

  anytime(): Date {
    return new Date(
      DateModule.getRandomTimeInRange(
        DateModule.getCurrentDateWithYearDifference(-YearDifference),
        DateModule.getCurrentDateWithYearDifference(YearDifference),
      ),
    );
  }

  between(options: BetweenOptions): Date {
    const fromTime = DateModule.toTimestamp(options.from);
    const toTime = DateModule.toTimestamp(options.to);
    return new Date(DateModule.getRandomTimeInRange(fromTime, toTime));
  }
}
