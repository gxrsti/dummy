import { NumberModule } from './modules/number';
import { StringModule } from './modules/string';

class Dummy {
  readonly string: StringModule = new StringModule();
  readonly number: NumberModule = new NumberModule();
}

const dummy = new Dummy();
export { dummy };
