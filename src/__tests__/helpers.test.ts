import { randomFromArray, randomIntFromInterval, reverseScramble } from '../utils/helpers';

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
  test('reverseScramble does reverse the scramble', () => {
    const scramble = 'U F';
    expect(reverseScramble(scramble)).toBe("F' U'");
  });
});
