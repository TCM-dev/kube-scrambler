import ZBLL from '../algorithms/ZBLL';
import { getOptions } from '../skrambler';
import { decorateScramble, randomFromArray, reverseScramble, rotateScramble, simplifyScramble } from './helpers';

export const scramblerZBLL = (options: getOptions): string => {
  const alg = randomFromArray(ZBLL);

  const value = randomFromArray(alg.values);

  if (options.angle) {
    let count = 0;

    switch (options.angle) {
      case 'y':
        count = 1;
        break;

      case 'y2':
        count = 2;
        break;

      case "y'":
        count = 3;
        break;

      default:
        break;
    }

    return simplifyScramble(reverseScramble(rotateScramble(value, 'y', count)));
  }

  return simplifyScramble(reverseScramble(decorateScramble(value, 'y')));
};
