import { Rotation } from '../types';

export const randomIntFromInterval = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomFromArray = <Type>(array: Type[]): Type => {
  return array[randomIntFromInterval(0, array.length - 1)];
};

export const reverseScramble = (scramble: string): string => {
  const scrambleArray = scramble.split(' ');

  // Inverse move notation
  const inversedScrambleArray = scrambleArray.map((move) => {
    if (move.endsWith("'")) {
      return move.slice(0, -1);
    }

    return move + "'";
  });

  return inversedScrambleArray.reverse().join(' ');
};

export const simplifyScramble = (scramble: string): string => {
  const scrambleArray = scramble.split(' ');

  // Simplify move notation
  const simplifiedScramble = scrambleArray.map((move) => {
    if (move.startsWith('[')) {
      return;
    }

    if (move.endsWith("2'")) {
      return move.slice(0, -1);
    }

    return move;
  });

  return simplifiedScramble.filter((e) => e).join(' ');
};

export const decorateScramble = (scramble: string, rotation?: Rotation): string => {
  if (!rotation) {
    const rotations: Rotation[] = ['y', 'x', 'z'];

    rotation = randomFromArray(rotations);
  }

  const count = randomIntFromInterval(1, 3);

  const decoratedScramble = rotateScramble(scramble, rotation, count);

  return decoratedScramble;
};

export const rotateScramble = (scramble: string, rotation: Rotation, count: number): string => {
  const scrambleArray = scramble.split(' ');

  let rotatedScramble = scrambleArray;

  for (let index = 0; index < count; index++) {
    rotatedScramble = rotatedScramble.map((move) => {
      switch (true) {
        case move.startsWith('U'):
          switch (rotation) {
            case 'x':
              return 'B' + move.charAt(1);
            case 'z':
              return 'R' + move.charAt(1);
            default:
              return move;
          }

        case move.startsWith('F'):
          switch (rotation) {
            case 'x':
              return 'U' + move.charAt(1);
            case 'y':
              return 'L' + move.charAt(1);
            default:
              return move;
          }

        case move.startsWith('R'):
          switch (rotation) {
            case 'z':
              return 'D' + move.charAt(1);
            case 'y':
              return 'F' + move.charAt(1);
            default:
              return move;
          }

        case move.startsWith('B'):
          switch (rotation) {
            case 'x':
              return 'D' + move.charAt(1);
            case 'y':
              return 'R' + move.charAt(1);
            default:
              return move;
          }

        case move.startsWith('L'):
          switch (rotation) {
            case 'z':
              return 'U' + move.charAt(1);
            case 'y':
              return 'B' + move.charAt(1);
            default:
              return move;
          }

        case move.startsWith('D'):
          switch (rotation) {
            case 'x':
              return 'F' + move.charAt(1);
            case 'z':
              return 'L' + move.charAt(1);
            default:
              return move;
          }
      }

      return move;
    });
  }

  return rotatedScramble.join(' ');
};
