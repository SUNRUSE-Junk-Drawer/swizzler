import {
  float,
  vec2,
  vec3,
  int,
  ivec2,
  ivec3,
  bool,
  bvec2,
  bvec3,
  add,
  multiply,
} from "../..";
import { vec3Scenario } from "../../unit";

vec3Scenario(`vec3 float`, { a: float(0.4) }, ({ a }) => vec3(a), [
  0.4,
  0.4,
  0.4,
]);

vec3Scenario(
  `vec3 floats`,
  { a: float(0.4), b: float(0.2), c: float(0.7) },
  ({ a, b, c }) => vec3(a, b, c),
  [0.4, 0.2, 0.7]
);

vec3Scenario(
  `vec3 vec2s`,
  { a: vec2(float(0.4), float(0.2)), b: float(0.7) },
  ({ a, b }) => vec3(a, b),
  [0.4, 0.2, 0.7]
);

vec3Scenario(
  `vec3 vec3`,
  { a: vec3(float(0.4), float(0.2), float(0.7)) },
  ({ a }) => vec3(a),
  [0.4, 0.2, 0.7]
);

vec3Scenario(
  `vec3 int`,
  { a: int(3) },
  ({ a }) => add(float(0.5), multiply(float(0.125), vec3(a))),
  [0.875, 0.875, 0.875]
);

vec3Scenario(
  `vec3 ints`,
  { a: int(3), b: int(-2), c: int(2) },
  ({ a, b, c }) => add(float(0.5), multiply(float(0.125), vec3(a, b, c))),
  [0.875, 0.25, 0.75]
);

vec3Scenario(
  `vec3 ivec2s`,
  { a: ivec2(int(3), int(-2)), b: int(2) },
  ({ a, b }) => add(float(0.5), multiply(float(0.125), vec3(a, b))),
  [0.875, 0.25, 0.75]
);

vec3Scenario(
  `vec3 ivec3`,
  { a: ivec3(int(3), int(-2), int(2)) },
  ({ a }) => add(float(0.5), multiply(float(0.125), vec3(a))),
  [0.875, 0.25, 0.75]
);

vec3Scenario(
  `vec3 false`,
  { a: bool(false) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec3(a))),
  [0.25, 0.25, 0.25]
);

vec3Scenario(
  `vec3 true`,
  { a: bool(true) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec3(a))),
  [0.75, 0.75, 0.75]
);

vec3Scenario(
  `vec3 bools`,
  {
    a: bool(true),
    b: bool(false),
    c: bool(false),
  },
  ({ a, b, c }) => add(float(0.25), multiply(float(0.5), vec3(a, b, c))),
  [0.75, 0.25, 0.25]
);

vec3Scenario(
  `vec3 bvec2s`,
  { a: bvec2(bool(true), bool(false)), b: bool(false) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), vec3(a, b))),
  [0.75, 0.25, 0.25]
);

vec3Scenario(
  `vec3 bvec3`,
  { a: bvec3(bool(true), bool(false), bool(false)) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec3(a))),
  [0.75, 0.25, 0.25]
);

vec3Scenario(
  `vec3 complex`,
  { a: float(3.2), b: bool(true), c: int(-2) },
  ({ a, b, c }) => add(float(0.5), multiply(float(0.125), vec3(a, b, c))),
  [0.9, 0.625, 0.25]
);
