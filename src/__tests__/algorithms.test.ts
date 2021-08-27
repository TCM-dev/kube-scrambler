import { Cube } from '@bedard/twister';
import ZBLL from '../algorithms/ZBLL';
import { U_ZBLL } from '../algorithms/ZBLL/U_ZBLL';
import { reverseScramble, rotateScramble, simplifyScramble } from '../utils/helpers';

describe('Check ZBLL angle', () => {
  const puzzle = new Cube({ size: 3 });
  const source = '*0*000000';

  U_ZBLL.forEach((alg) =>
    alg.values.forEach((value) => {
      test('Alg ' + value + ' is in right angle', () => {
        const scrambleValue = simplifyScramble(reverseScramble(value));
        const scramble = puzzle.parseAlgorithm(scrambleValue);

        scramble.forEach((move) => puzzle.execute(move));

        // [1,0,1,0,0,0,0,0,0]
        const face = puzzle.state.u.map((sticker) => sticker.value);

        // 101000000
        const faceString = face.join('');

        puzzle.reset();

        const invalid = isInvalid(source, faceString);

        if (invalid) {
          console.log('This scramble has wrong angle: ', value);

          // Correct scramble
          for (let count = 1; count <= 3; count++) {
            const newValue = rotateScramble(value, 'y', count);
            const scramble = puzzle.parseAlgorithm(simplifyScramble(reverseScramble(newValue)));

            scramble.forEach((move) => puzzle.execute(move));

            // [1,0,1,0,0,0,0,0,0]
            const face = puzzle.state.u.map((sticker) => sticker.value);

            // 101000000
            const faceString = face.join('');

            const invalid = isInvalid(source, faceString);

            if (!invalid) {
              console.log('Replace with following scramble: ', newValue);
            }

            puzzle.reset();
          }
        }

        expect(!invalid).toBe(true);
      });
    }),
  );
});

describe('Check ZBLL algs have no duplicates', () => {
  const scrambles = ZBLL.flatMap((alg) => alg.values);

  scrambles.forEach((scramble, index) => {
    test('ZBLL ' + scramble + ' is unique', () => {
      const differentIndex = scrambles.indexOf(scramble) !== index;
      if (differentIndex) {
        console.log('Following scramble is a duplicate: ', scramble);
      }

      expect(!differentIndex).toBe(true);
    });
  });
});

const isInvalid = (source: string, faceString: string) => {
  return indexesOf(source, /0/g)['0'].join('') !== indexesOf(faceString, /0/g)['0'].join('');
};

const indexesOf = (string: any, regex: any) => {
  let match: any = {};
  const indexes: any = {};

  regex = new RegExp(regex);

  while ((match = regex.exec(string))) {
    if (!indexes[match[0]]) indexes[match[0]] = [];
    indexes[match[0]].push(match.index);
  }

  return indexes;
};
