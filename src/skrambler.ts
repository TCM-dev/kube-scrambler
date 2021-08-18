import { ScrambleCategory } from './types';
import { scramblerWCA } from './utils/scramblerWCA';
import { scramblerZBLL } from './utils/scramblerZBLL';

type getOptions = {
  category: ScrambleCategory;
};

const get = (options: getOptions = { category: 'WCA' }): string => {
  switch (options.category) {
    case 'ZBLL':
      return scramblerZBLL();

    case 'WCA':
    default:
      return scramblerWCA();
  }
};

const skrambler = {
  get,
};

export default skrambler;
