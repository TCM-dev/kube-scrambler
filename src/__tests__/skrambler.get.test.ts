import skrambler from '../index';
import ZBLL from '../algorithms/ZBLL';
import { reverseScramble, rotateScramble, simplifyScramble } from '../utils/helpers';
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
      return alg.values.some((value) => {
        if (value === zbll) {
          return true;
        }

        for (const count of [1, 2, 3]) {
          if (simplifyScramble(reverseScramble(rotateScramble(value, 'y', count))) === zbll) {
            return true;
          }
        }
      });
    });

    expect(isZBLL).toBe(true);
  });

  test('get method Angle option works', () => {
    // Force ZBLL case, would prefer being able to "mock" which alg is returned
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    const original = skrambler.get({ category: 'ZBLL', angle: 'none' });
    expect(original).toBe("R2 D B2 U B2 R D R' U' R D' R' D' R2");

    const scrambleY = skrambler.get({ category: 'ZBLL', angle: 'y' });
    expect(scrambleY).toBe("F2 D R2 U R2 F D F' U' F D' F' D' F2");

    const scrambleY2 = skrambler.get({ category: 'ZBLL', angle: 'y2' });
    expect(scrambleY2).toBe("L2 D F2 U F2 L D L' U' L D' L' D' L2");

    const scrambleYPrime = skrambler.get({ category: 'ZBLL', angle: "y'" });
    expect(scrambleYPrime).toBe("B2 D L2 U L2 B D B' U' B D' B' D' B2");

    jest.spyOn(global.Math, 'random').mockRestore();
  });
});
