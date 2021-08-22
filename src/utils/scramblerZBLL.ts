import ZBLL from '../algorithms/ZBLL';
import { decorateScramble, randomFromArray, reverseScramble } from './helpers';

export const scramblerZBLL = (): string => {
  const alg = randomFromArray(ZBLL);

  const value = randomFromArray(alg.values);

  return reverseScramble(decorateScramble(value, "y"));
};
