import ZBLL from '../algorithms/ZBLL';
import { decorateScramble, randomFromArray, reverseScramble, simplifyScramble } from './helpers';

export const scramblerZBLL = (): string => {
  const alg = randomFromArray(ZBLL);

  const value = randomFromArray(alg.values);

  return simplifyScramble(reverseScramble(decorateScramble(value, 'y')));
};
