import { NumberModule } from './modules/number';
import { StringModule } from './modules/string';
import { DateModule } from './modules/date';

class Dummy {
  readonly string: StringModule = new StringModule();
  readonly number: NumberModule = new NumberModule();
  readonly date: DateModule = new DateModule();
}

const dummy = new Dummy();
export { dummy };
