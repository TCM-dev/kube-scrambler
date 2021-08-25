import { Cube } from '@bedard/twister';
// TODO, make sure every ZBLL are the same angle
const puzzle = new Cube({ size: 3 });

test('U ZBLL are all from same angle', () => {
  console.log(puzzle.state);
});
