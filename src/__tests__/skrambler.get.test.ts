import skrambler from '../index';
import ZBLL from '../algorithms/ZBLL';
import { reverseScramble, simplifyScramble } from '../utils/helpers';
describe('default behaviors check', () => {
  test('get method returns a string', () => {
    expect(typeof skrambler.get()).toBe('string');
  });

  test('get method returns a WCA scramble by default', () => {
    const scramble = skrambler.get().split(' ');

    expect(scramble.length).toBe(20);

    const hasImmediateDuplications = scramble.some((move, index, moves) => {
      return move.charAt(0) === moves[index - 1]?.charAt(0);
    });

    expect(hasImmediateDuplications).toBe(false);
  });
});

describe('ZBLL options check', () => {
  test('get method ZBLL option works', () => {
    expect(typeof skrambler.get({ category: 'ZBLL' })).toBe('string');
  });

  test('get method ZBLL option does return a ZBLL', () => {
    const zbll = skrambler.get({ category: 'ZBLL' });

    const isZBLL = ZBLL.some((alg) => {
      return alg.values.some((value) => simplifyScramble(reverseScramble(value)) === zbll);
    });

    expect(isZBLL).toBe(true);
  });
});
