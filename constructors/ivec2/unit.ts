import { float, vec2, int, ivec2, bool, bvec2, add, multiply } from "../..";
import { ivec2Scenario } from "../../unit";

ivec2Scenario(
  `ivec2 float zero`,
  { a: float(0) },
  ({ a }) => add(int(128), ivec2(a)),
  [128, 128]
);

ivec2Scenario(
  `ivec2 float positive unit interval`,
  { a: float(0.7) },
  ({ a }) => add(int(128), ivec2(a)),
  [128, 128]
);

ivec2Scenario(
  `ivec2 float positive integer`,
  { a: float(32) },
  ({ a }) => add(int(128), ivec2(a)),
  [160, 160]
);

ivec2Scenario(
  `ivec2 float positive float`,
  { a: float(9.6) },
  ({ a }) => add(int(128), ivec2(a)),
  [137, 137]
);

ivec2Scenario(
  `ivec2 float negative unit interval`,
  { a: float(-0.7) },
  ({ a }) => add(int(128), ivec2(a)),
  [128, 128]
);

ivec2Scenario(
  `ivec2 float negative integer`,
  { a: float(-32) },
  ({ a }) => add(int(128), ivec2(a)),
  [96, 96]
);

ivec2Scenario(
  `ivec2 float negative float`,
  { a: float(-9.6) },
  ({ a }) => add(int(128), ivec2(a)),
  [119, 119]
);

ivec2Scenario(
  `ivec2 floats`,
  { a: float(9.6), b: float(42.1) },
  ({ a, b }) => add(int(128), ivec2(a, b)),
  [137, 170]
);

ivec2Scenario(
  `ivec2 vec2`,
  { a: vec2(float(9.6), float(42.1)) },
  ({ a }) => add(int(128), ivec2(a)),
  [137, 170]
);

ivec2Scenario(`ivec2 int`, { a: int(37) }, ({ a }) => ivec2(a), [37, 37]);

ivec2Scenario(
  `ivec2 ints`,
  { a: int(37), b: int(182) },
  ({ a, b }) => ivec2(a, b),
  [37, 182]
);

ivec2Scenario(
  `ivec2 ivec2`,
  { a: int(37), b: int(182) },
  ({ a, b }) => ivec2(ivec2(a, b)),
  [37, 182]
);

ivec2Scenario(
  `ivec2 false`,
  { a: bool(false) },
  ({ a }) => add(int(64), multiply(int(128), ivec2(a))),
  [64, 64]
);

ivec2Scenario(
  `ivec2 true`,
  { a: bool(true) },
  ({ a }) => add(int(64), multiply(int(128), ivec2(a))),
  [192, 192]
);

ivec2Scenario(
  `ivec2 bools`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => add(int(64), multiply(int(128), ivec2(a, b))),
  [192, 64]
);

ivec2Scenario(
  `ivec2 bvec2`,
  { a: bvec2(bool(true), bool(false)) },
  ({ a }) => add(int(64), multiply(int(128), ivec2(a))),
  [192, 64]
);
