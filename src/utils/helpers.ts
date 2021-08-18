export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomFromArray = <Type>(array: Array<Type>): Type => {
  return array[randomIntFromInterval(0, array.length - 1)];
};

export const reverseScramble = (scramble: string): string => {
  const scrambleArray = scramble.split(' ');

  // Inverse move notation
  scrambleArray.map((move) => {
    if (move.endsWith("'")) {
      return move.slice(0, -1);
    }

    if (!move.endsWith('2')) {
      return move + "'";
    }

    return move;
  });

  return scrambleArray.reverse().join(' ');
};
