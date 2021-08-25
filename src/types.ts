export type ScrambleCategory = 'WCA' | 'PLL' | 'OLL' | 'ZBLL';
export type Alg = {
  values: string[];
  family: string;
};
export type Variation = '' | '2' | "'";
export type Rotation = 'y' | 'x' | "z";
export type Angle = "none" | "y" | "y2" | "y'";
export type Move = 'U' | 'F' | 'R' | 'B' | 'L' | 'D';