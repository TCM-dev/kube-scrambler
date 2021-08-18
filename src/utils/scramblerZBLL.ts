import ZBLL from '../scrambles/ZBLL';
import { randomFromArray, reverseScramble } from './helpers';

export const scramblerZBLL = (): string => {
  const alg = randomFromArray(ZBLL);

  const value = randomFromArray(alg.values);

  if (value.includes('[')) {
    // Value includes an initial rotation
    return reverseScramble(value.split(']')[1].trim());
  }

  return reverseScramble(value);
};
