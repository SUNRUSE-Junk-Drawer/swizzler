import {
  float,
  vec2,
  vec3,
  vec4,
  mat2,
  int,
  ivec2,
  ivec3,
  ivec4,
  bool,
  bvec2,
  bvec3,
  bvec4,
  add,
  multiply,
} from "../..";
import { vec4Scenario } from "../../unit";

vec4Scenario(`vec4 float`, { a: float(0.4) }, ({ a }) => vec4(a), [
  0.4,
  0.4,
  0.4,
  0.4,
]);

vec4Scenario(
  `vec4 floats`,
  { a: float(0.4), b: float(0.2), c: float(0.7), d: float(0.6) },
  ({ a, b, c, d }) => vec4(a, b, c, d),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  `vec4 vec2s`,
  { a: vec2(float(0.4), float(0.2)), b: vec2(float(0.7), float(0.6)) },
  ({ a, b }) => vec4(a, b),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  `vec4 vec3s`,
  { a: vec3(float(0.4), float(0.2), float(0.7)), b: float(0.6) },
  ({ a, b }) => vec4(a, b),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  `vec4 vec4`,
  { a: vec4(float(0.4), float(0.2), float(0.7), float(0.6)) },
  ({ a }) => vec4(a),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  `vec4 mat2`,
  { a: mat2(float(0.4), float(0.2), float(0.7), float(0.6)) },
  ({ a }) => vec4(a),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  `vec4 int`,
  { a: int(3) },
  ({ a }) => add(float(0.5), multiply(float(0.125), vec4(a))),
  [0.875, 0.875, 0.875, 0.875]
);

vec4Scenario(
  `vec4 ints`,
  { a: int(3), b: int(-2), c: int(2), d: int(-1) },
  ({ a, b, c, d }) => add(float(0.5), multiply(float(0.125), vec4(a, b, c, d))),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  `vec4 ivec2s`,
  { a: ivec2(int(3), int(-2)), b: ivec2(int(2), int(-1)) },
  ({ a, b }) => add(float(0.5), multiply(float(0.125), vec4(a, b))),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  `vec4 ivec3s`,
  { a: ivec3(int(3), int(-2), int(2)), b: int(-1) },
  ({ a, b }) => add(float(0.5), multiply(float(0.125), vec4(a, b))),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  `vec4 ivec4`,
  { a: ivec4(int(3), int(-2), int(2), int(-1)) },
  ({ a }) => add(float(0.5), multiply(float(0.125), vec4(a))),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  `vec4 false`,
  { a: bool(false) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec4(a))),
  [0.25, 0.25, 0.25, 0.25]
);

vec4Scenario(
  `vec4 true`,
  { a: bool(true) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec4(a))),
  [0.75, 0.75, 0.75, 0.75]
);

vec4Scenario(
  `vec4 bools`,
  { a: bool(true), b: bool(false), c: bool(false), d: bool(true) },
  ({ a, b, c, d }) => add(float(0.25), multiply(float(0.5), vec4(a, b, c, d))),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  `vec4 bvec2s`,
  { a: bvec2(bool(true), bool(false)), b: bvec2(bool(false), bool(true)) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), vec4(a, b))),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  `vec4 bvec3s`,
  { a: bvec3(bool(true), bool(false), bool(false)), b: bool(true) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), vec4(a, b))),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  `vec4 bvec4`,
  { a: bool(true), b: bool(false), c: bool(false), d: bool(true) },
  ({ a, b, c, d }) =>
    add(float(0.25), multiply(float(0.5), vec4(bvec4(a, b, c, d)))),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  `vec4 complex`,
  { a: float(3.2), b: bvec2(bool(true), bool(false)), c: int(-2) },
  ({ a, b, c }) => add(float(0.5), multiply(float(0.125), vec4(a, b, c))),
  [0.9, 0.625, 0.5, 0.25]
);
