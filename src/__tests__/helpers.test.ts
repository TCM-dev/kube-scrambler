import {
  decorateScramble,
  randomFromArray,
  randomIntFromInterval,
  reverseScramble,
  rotateScramble,
  simplifyScramble,
} from '../utils/helpers';

describe('random helpers check', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test('randomIntFromInterval works as expected', () => {
    expect(typeof randomIntFromInterval(0, 10)).toBe('number');
    expect(randomIntFromInterval(10, 10)).toBe(10);
    expect(randomIntFromInterval(0, 10)).toBe(5);
  });

  test('randomFromArray works as expected', () => {
    expect(typeof randomFromArray(['left', 'right'])).toBe('string');
    expect(typeof randomFromArray([10, 20])).toBe('number');
    expect(randomFromArray(['left', 'right'])).toBe('right');
    expect(randomFromArray([0, 10])).toBe(10);
  });
});

describe('scrambler helpers check', () => {
  test('simplifyScramble does simplify the scramble', () => {
    const scramble = "[U] R2'";
    expect(simplifyScramble(scramble)).toBe('R2');
  });

  test('reverseScramble does reverse the scramble', () => {
    const scramble = 'U F';
    expect(reverseScramble(scramble)).toBe("F' U'");
  });

  test('rotateScramble does rotate the scramble', () => {
    const scramble = "U2 F'";
    expect(rotateScramble(scramble, 'y', 2)).toBe("U2 B'");
  });

  test('decorateScramble does decorate the scramble', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    const scramble = "U2 F'";
    expect(decorateScramble(scramble)).toBe("D2 B'");
    jest.spyOn(global.Math, 'random').mockRestore();
  });
});
