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
    // Instead, when possible, get a specific family, and check the angle with the same test present in algorithm.test.ts
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    const original = skrambler.get({ category: 'ZBLL', angle: 'none' });
    expect(original).toBe("B F' U' L2 U2 B2 D' B U' B2 D B2 F");

    const scrambleY = skrambler.get({ category: 'ZBLL', angle: 'y' });
    expect(scrambleY).toBe("R L' U' B2 U2 R2 D' R U' R2 D R2 L");

    const scrambleY2 = skrambler.get({ category: 'ZBLL', angle: 'y2' });
    expect(scrambleY2).toBe("F B' U' R2 U2 F2 D' F U' F2 D F2 B");

    const scrambleYPrime = skrambler.get({ category: 'ZBLL', angle: "y'" });
    expect(scrambleYPrime).toBe("L R' U' F2 U2 L2 D' L U' L2 D L2 R");

    jest.spyOn(global.Math, 'random').mockRestore();
  });
});
