import { float, vec2, int, ivec2, bool, bvec2, add, multiply } from "../..";
import { vec2Scenario } from "../../unit";

vec2Scenario(`vec2 float`, { a: float(0.4) }, ({ a }) => vec2(a), [0.4, 0.4]);

vec2Scenario(
  `vec2 floats`,
  { a: float(0.4), b: float(0.2) },
  ({ a, b }) => vec2(a, b),
  [0.4, 0.2]
);

vec2Scenario(
  `vec2 vec2`,
  { a: vec2(float(0.4), float(0.2)) },
  ({ a }) => vec2(a),
  [0.4, 0.2]
);

vec2Scenario(
  `vec2 int`,
  { a: int(3) },
  ({ a }) => add(float(0.5), multiply(float(0.125), vec2(a))),
  [0.875, 0.875]
);

vec2Scenario(
  `vec2 ints`,
  { a: int(3), b: int(-2) },
  ({ a, b }) => add(float(0.5), multiply(float(0.125), vec2(a, b))),
  [0.875, 0.25]
);

vec2Scenario(
  `vec2 ivec2`,
  { a: ivec2(int(3), int(-2)) },
  ({ a }) => add(float(0.5), multiply(float(0.125), vec2(a))),
  [0.875, 0.25]
);

vec2Scenario(
  `vec2 false`,
  { a: bool(false) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec2(a))),
  [0.25, 0.25]
);

vec2Scenario(
  `vec2 true`,
  { a: bool(true) },
  ({ a }) => add(float(0.25), multiply(float(0.5), vec2(a))),
  [0.75, 0.75]
);

vec2Scenario(
  `vec2 bools`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), vec2(a, b))),
  [0.75, 0.25]
);

vec2Scenario(
  `vec2 bvec2`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), vec2(bvec2(a, b)))),
  [0.75, 0.25]
);

vec2Scenario(
  `vec2 complex`,
  { a: float(3.2), b: bool(true) },
  ({ a, b }) => add(float(0.5), multiply(float(0.125), vec2(a, b))),
  [0.9, 0.625]
);
