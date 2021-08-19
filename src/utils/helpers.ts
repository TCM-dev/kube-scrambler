export const randomIntFromInterval = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomFromArray = <Type>(array: Array<Type>): Type => {
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
