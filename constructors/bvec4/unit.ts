import { float, vec4, mat2, int, ivec4, bool, bvec4 } from "../..";

import { bvec4Scenario } from "../../unit";

bvec4Scenario(`bvec4 float zero`, { a: float(0) }, ({ a }) => bvec4(a), [
  false,
  false,
  false,
  false,
]);

bvec4Scenario(`bvec4 float positive`, { a: float(0.1) }, ({ a }) => bvec4(a), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario(`bvec4 float negative`, { a: float(-0.1) }, ({ a }) => bvec4(a), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario(
  `bvec4 floats`,
  {
    a: float(0),
    b: float(0.1),
    c: float(-0.1),
    d: float(0),
  },
  ({ a, b, c, d }) => bvec4(a, b, c, d),
  [false, true, true, false]
);

bvec4Scenario(
  `bvec4 vec4`,
  { a: vec4(float(0), float(0.1), float(-0.1), float(0)) },
  ({ a }) => bvec4(a),
  [false, true, true, false]
);

bvec4Scenario(
  `bvec4 mat2`,
  { a: mat2(float(0), float(0.1), float(-0.1), float(0)) },
  ({ a }) => bvec4(a),
  [false, true, true, false]
);

bvec4Scenario(`bvec4 int zero`, { a: int(0) }, ({ a }) => bvec4(a), [
  false,
  false,
  false,
  false,
]);

bvec4Scenario(`bvec4 int positive`, { a: int(1) }, ({ a }) => bvec4(a), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario(`bvec4 int negative`, { a: int(-1) }, ({ a }) => bvec4(a), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario(
  `bvec4 ints`,
  { a: int(0), b: int(1), c: int(-1), d: int(0) },
  ({ a, b, c, d }) => bvec4(a, b, c, d),
  [false, true, true, false]
);

bvec4Scenario(
  `bvec4 ivec4`,
  { a: int(0), b: int(1), c: int(-1), d: int(0) },
  ({ a, b, c, d }) => bvec4(ivec4(a, b, c, d)),
  [false, true, true, false]
);

bvec4Scenario(`bvec4 false`, { a: bool(false) }, ({ a }) => bvec4(a), [
  false,
  false,
  false,
  false,
]);

bvec4Scenario(`bvec4 true`, { a: bool(true) }, ({ a }) => bvec4(a), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario(
  `bvec4 bools`,
  { a: bool(false), b: bool(true), c: bool(false), d: bool(true) },
  ({ a, b, c, d }) => bvec4(a, b, c, d),
  [false, true, false, true]
);
