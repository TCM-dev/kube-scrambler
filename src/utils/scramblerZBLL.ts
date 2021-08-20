import ZBLL from '../algorithms/ZBLL';
import { randomFromArray, reverseScramble, simplifyScramble } from './helpers';

export const scramblerZBLL = (): string => {
  const alg = randomFromArray(ZBLL);

  const value = randomFromArray(alg.values);

  return simplifyScramble(reverseScramble(value));
};
