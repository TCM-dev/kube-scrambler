import { Alg } from '../../types';

const BBFF: Alg[] = [
  {
    family: 'BBFF',
    values: [
      "[U] R' F' R U R' U' R' F D' R U R' D R2",
      "[U'] r U2 R D R' U' R D' R2' U' r' F R F'",
      "[U] R U2 R' U' R U' R' U2 R' U2 R U R' U R",
    ],
  },
  {
    family: 'BBFF',
    values: [
      "[U2] l' R' D2 R U R' D2 R2 D' R' U' R D",
      "l R D2 R' U' R D2 R2' D R U R' D'",
      "[U2] R' U' R U R U' R' U' R' U R U' R U' R' U2 R U R'",
      "R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2",
    ],
  },
  {
    family: 'BBFF',
    values: ["[U2] R U R' U R U2 R2 U' R U' R' U2 R", "L U L' U L U2 L2 U' L U' L' U2 L"],
  },
  {
    family: 'BBFF',
    values: ["R' U' R U' R' U2 R2 U R' U R U2 R'"],
  },
  {
    family: 'BBFF',
    values: ["[U'] R' U' R U R' U R U2 R' U R U2 R' U' R", "[U2] R U R' U R U2 R' U R U2 R' U' R U' R'"],
  },
  {
    family: 'BBFF',
    values: ["[U'] R U R' U' R U' R' U2 R U' R' U2 R U R'"],
  },
  {
    family: 'BBFF',
    values: ["[U] R U2 R' U' R U' R' U' R U R' U R U2 R'", "[U'] L U2 L' U' L U' L' U' L U L' U L U2 L'"],
  },
  {
    family: 'BBFF',
    values: ["[U] R' U2 R U R' U R U R' U' R U' R' U2 R", "[U'] L' U2 L U L' U L U L' U' L U' L' U2 L"],
  },
  {
    family: 'BBFF',
    values: ["[U] R U2 R2 U' R2 U' R' U R' U' R U R' U R"],
  },
  {
    family: 'BBFF',
    values: [
      "[U] R' U2 R2 U R2 U R U' R U R' U' R U' R'",
      "[U'] L' U2 L2 U L2 U L U' L U L' U' L U' L'",
      "[U2] R' U' R U R U' R' U' R U' R' U R' U R2 U R'",
    ],
  },
  {
    family: 'BBFF',
    values: ["[U2] R U R' U R' U2 R2 U R2 U R2 U' R'", "L U L' U L' U2 L2 U L2 U L2 U' L'"],
  },
  {
    family: 'BBFF',
    values: ["R' U' R U' R U2 R2 U' R2 U' R2 U R"],
  },
];

export const U_ZBLL: Alg[] = [...BBFF];
