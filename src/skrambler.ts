import { Angle, ScrambleCategory } from './types';
import { scramblerWCA } from './utils/scramblerWCA';
import { scramblerZBLL } from './utils/scramblerZBLL';

export type getOptions = {
  category: ScrambleCategory;
  angle?: Angle
};

const get = (options: getOptions = { category: 'WCA' }): string => {
  switch (options.category) {
    case 'ZBLL':
      return scramblerZBLL(options);

    case 'WCA':
    default:
      return scramblerWCA();
  }
};

const skrambler = {
  get,
};

export default skrambler;
