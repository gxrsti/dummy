import { StringModule } from './modules/string';

class Dummy {
  readonly string: StringModule = new StringModule();
}

const dummy = new Dummy();
export { dummy };
