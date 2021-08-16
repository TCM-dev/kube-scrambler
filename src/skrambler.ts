import { ScrambleCategory } from './types';
import { scramblerWCA } from './utils/scramblerWCA';

type getOptions = {
  category: ScrambleCategory;
};

const get = (options: getOptions = { category: 'WCA' }): string => {
  switch (options.category) {
    case 'ZBLL':
      break;

    case 'WCA':
    default:
      return scramblerWCA();
  }

  return '';
};

const skrambler = {
  get,
};

export default skrambler;
