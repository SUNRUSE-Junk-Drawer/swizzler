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
import { ivec3Scenario } from "../../unit";

ivec3Scenario(
  `ivec3 float zero`,
  { a: float(0) },
  ({ a }) => add(int(128), ivec3(a)),
  [128, 128, 128]
);

ivec3Scenario(
  `ivec3 float positive unit interval`,
  { a: float(0.7) },
  ({ a }) => add(int(128), ivec3(a)),
  [128, 128, 128]
);

ivec3Scenario(
  `ivec3 float positive integer`,
  { a: float(32) },
  ({ a }) => add(int(128), ivec3(a)),
  [160, 160, 160]
);

ivec3Scenario(
  `ivec3 float positive float`,
  { a: float(9.6) },
  ({ a }) => add(int(128), ivec3(a)),
  [137, 137, 137]
);

ivec3Scenario(
  `ivec3 float negative unit interval`,
  { a: float(-0.7) },
  ({ a }) => add(int(128), ivec3(a)),
  [128, 128, 128]
);

ivec3Scenario(
  `ivec3 float negative integer`,
  { a: float(-32) },
  ({ a }) => add(int(128), ivec3(a)),
  [96, 96, 96]
);

ivec3Scenario(
  `ivec3 float negative float`,
  { a: float(-9.6) },
  ({ a }) => add(int(128), ivec3(a)),
  [119, 119, 119]
);

ivec3Scenario(
  `ivec3 floats`,
  { a: float(9.6), b: float(42.1), c: float(-7) },
  ({ a, b, c }) => add(int(128), ivec3(a, b, c)),
  [137, 170, 121]
);

ivec3Scenario(
  `ivec3 vec2s`,
  { a: vec2(float(9.6), float(42.1)), b: float(-7) },
  ({ a, b }) => add(int(128), ivec3(a, b)),
  [137, 170, 121]
);

ivec3Scenario(
  `ivec3 vec3`,
  { a: vec3(float(9.6), float(42.1), float(-7)) },
  ({ a }) => add(int(128), ivec3(a)),
  [137, 170, 121]
);

ivec3Scenario(`ivec3 int`, { a: int(37) }, ({ a }) => ivec3(a), [37, 37, 37]);

ivec3Scenario(
  `ivec3 ints`,
  { a: int(37), b: int(182), c: int(48) },
  ({ a, b, c }) => ivec3(a, b, c),
  [37, 182, 48]
);

ivec3Scenario(
  `ivec3 ivec2s`,
  { a: ivec2(int(37), int(182)), b: int(48) },
  ({ a, b }) => ivec3(a, b),
  [37, 182, 48]
);

ivec3Scenario(
  `ivec3 ivec3`,
  { a: ivec3(int(37), int(182), int(48)) },
  ({ a }) => ivec3(a),
  [37, 182, 48]
);

ivec3Scenario(
  `ivec3 false`,
  { a: bool(false) },
  ({ a }) => add(int(64), multiply(int(128), ivec3(a))),
  [64, 64, 64]
);

ivec3Scenario(
  `ivec3 true`,
  { a: bool(true) },
  ({ a }) => add(int(64), multiply(int(128), ivec3(a))),
  [192, 192, 192]
);

ivec3Scenario(
  `ivec3 bools`,
  { a: bool(true), b: bool(false), c: bool(false) },
  ({ a, b, c }) => add(int(64), multiply(int(128), ivec3(a, b, c))),
  [192, 64, 64]
);

ivec3Scenario(
  `ivec3 bvec2s`,
  { a: bvec2(bool(true), bool(false)), b: bool(false) },
  ({ a, b }) => add(int(64), multiply(int(128), ivec3(a, b))),
  [192, 64, 64]
);

ivec3Scenario(
  `ivec3 bvec3`,
  { a: bvec3(bool(true), bool(false), bool(false)) },
  ({ a }) => add(int(64), multiply(int(128), ivec3(a))),
  [192, 64, 64]
);
