import { float, vec2, int, ivec2, bool, bvec2 } from "../..";

import { bvec2Scenario } from "../../unit";

bvec2Scenario(`bvec2 float zero`, { a: float(0) }, ({ a }) => bvec2(a), [
  false,
  false,
]);

bvec2Scenario(`bvec2 float positive`, { a: float(0.1) }, ({ a }) => bvec2(a), [
  true,
  true,
]);

bvec2Scenario(`bvec2 float negative`, { a: float(-0.1) }, ({ a }) => bvec2(a), [
  true,
  true,
]);

bvec2Scenario(
  `bvec2 floats`,
  { a: float(0), b: float(0.1) },
  ({ a, b }) => bvec2(a, b),
  [false, true]
);

bvec2Scenario(
  `bvec2 vec2`,
  { a: vec2(float(0), float(0.1)) },
  ({ a }) => bvec2(a),
  [false, true]
);

bvec2Scenario(`bvec2 int zero`, { a: int(0) }, ({ a }) => bvec2(a), [
  false,
  false,
]);

bvec2Scenario(`bvec2 int positive`, { a: int(1) }, ({ a }) => bvec2(a), [
  true,
  true,
]);

bvec2Scenario(`bvec2 int negative`, { a: int(-1) }, ({ a }) => bvec2(a), [
  true,
  true,
]);

bvec2Scenario(
  `bvec2 ints`,
  { a: int(0), b: int(1) },
  ({ a, b }) => bvec2(a, b),
  [false, true]
);

bvec2Scenario(
  `bvec2 ivec2`,
  { a: ivec2(int(0), int(1)) },
  ({ a }) => bvec2(a),
  [false, true]
);

bvec2Scenario(`bvec2 false`, { a: bool(false) }, ({ a }) => bvec2(a), [
  false,
  false,
]);

bvec2Scenario(`bvec2 true`, { a: bool(true) }, ({ a }) => bvec2(a), [
  true,
  true,
]);

bvec2Scenario(
  `bvec2 bools`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => bvec2(a, b),
  [false, true]
);
