import { float, vec3, int, ivec3, bool, bvec3 } from "../..";

import { bvec3Scenario } from "../../unit";

bvec3Scenario(`bvec3 float zero`, { a: float(0) }, ({ a }) => bvec3(a), [
  false,
  false,
  false,
]);

bvec3Scenario(`bvec3 float positive`, { a: float(0.1) }, ({ a }) => bvec3(a), [
  true,
  true,
  true,
]);

bvec3Scenario(`bvec3 float negative`, { a: float(-0.1) }, ({ a }) => bvec3(a), [
  true,
  true,
  true,
]);

bvec3Scenario(
  `bvec3 floats`,
  { a: float(0), b: float(0.1), c: float(-0.1) },
  ({ a, b, c }) => bvec3(a, b, c),
  [false, true, true]
);

bvec3Scenario(
  `bvec3 vec3`,
  { a: vec3(float(0), float(0.1), float(-0.1)) },
  ({ a }) => bvec3(a),
  [false, true, true]
);

bvec3Scenario(`bvec3 int zero`, { a: int(0) }, ({ a }) => bvec3(a), [
  false,
  false,
  false,
]);

bvec3Scenario(`bvec3 int positive`, { a: int(1) }, ({ a }) => bvec3(a), [
  true,
  true,
  true,
]);

bvec3Scenario(`bvec3 int negative`, { a: int(-1) }, ({ a }) => bvec3(a), [
  true,
  true,
  true,
]);

bvec3Scenario(
  `bvec3 ints`,
  { a: int(0), b: int(1), c: int(-1) },
  ({ a, b, c }) => bvec3(a, b, c),
  [false, true, true]
);

bvec3Scenario(
  `bvec3 ivec3`,
  { a: ivec3(int(0), int(1), int(-1)) },
  ({ a }) => bvec3(a),
  [false, true, true]
);

bvec3Scenario(`bvec3 false`, { a: bool(false) }, ({ a }) => bvec3(a), [
  false,
  false,
  false,
]);

bvec3Scenario(`bvec3 true`, { a: bool(true) }, ({ a }) => bvec3(a), [
  true,
  true,
  true,
]);

bvec3Scenario(
  `bvec3 bools`,
  { a: bool(false), b: bool(true), c: bool(false) },
  ({ a, b, c }) => bvec3(a, b, c),
  [false, true, false]
);
