import ZBLL from '../algorithms/ZBLL';
import { decorateScramble, randomFromArray } from './helpers';

export const scramblerZBLL = (): string => {
  const alg = randomFromArray(ZBLL);

  const value = randomFromArray(alg.values);

  return decorateScramble(value, "y");
};
