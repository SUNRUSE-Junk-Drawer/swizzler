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
import { ivec4Scenario } from "../../unit";

ivec4Scenario(
  `ivec4 float zero`,
  { a: float(0) },
  ({ a }) => add(int(128), ivec4(a)),
  [128, 128, 128, 128]
);

ivec4Scenario(
  `ivec4 float positive unit interval`,
  { a: float(0.7) },
  ({ a }) => add(int(128), ivec4(a)),
  [128, 128, 128, 128]
);

ivec4Scenario(
  `ivec4 float positive integer`,
  { a: float(32) },
  ({ a }) => add(int(128), ivec4(a)),
  [160, 160, 160, 160]
);

ivec4Scenario(
  `ivec4 float positive float`,
  { a: float(9.6) },
  ({ a }) => add(int(128), ivec4(a)),
  [137, 137, 137, 137]
);

ivec4Scenario(
  `ivec4 float negative unit interval`,
  { a: float(-0.7) },
  ({ a }) => add(int(128), ivec4(a)),
  [128, 128, 128, 128]
);

ivec4Scenario(
  `ivec4 float negative integer`,
  { a: float(-32) },
  ({ a }) => add(int(128), ivec4(a)),
  [96, 96, 96, 96]
);

ivec4Scenario(
  `ivec4 float negative float`,
  { a: float(-9.6) },
  ({ a }) => add(int(128), ivec4(a)),
  [119, 119, 119, 119]
);

ivec4Scenario(
  `ivec4 floats`,
  { a: float(9.6), b: float(42.1), c: float(-7), d: float(15.2) },
  ({ a, b, c, d }) => add(int(128), ivec4(a, b, c, d)),
  [137, 170, 121, 143]
);

ivec4Scenario(
  `ivec4 vec2s`,
  { a: vec2(float(9.6), float(42.1)), b: vec2(float(-7), float(15.2)) },
  ({ a, b }) => add(int(128), ivec4(a, b)),
  [137, 170, 121, 143]
);

ivec4Scenario(
  `ivec4 vec3s`,
  { a: vec3(float(9.6), float(42.1), float(-7)), b: float(15.2) },
  ({ a, b }) => add(int(128), ivec4(a, b)),
  [137, 170, 121, 143]
);

ivec4Scenario(
  `ivec4 vec4`,
  { a: vec4(float(9.6), float(42.1), float(-7), float(15.2)) },
  ({ a }) => add(int(128), ivec4(a)),
  [137, 170, 121, 143]
);

ivec4Scenario(
  `ivec4 mat2`,
  { a: mat2(float(9.6), float(42.1), float(-7), float(15.2)) },
  ({ a }) => add(int(128), ivec4(a)),
  [137, 170, 121, 143]
);

ivec4Scenario(`ivec4 int`, { a: int(37) }, ({ a }) => ivec4(a), [
  37,
  37,
  37,
  37,
]);

ivec4Scenario(
  `ivec4 ints`,
  { a: int(37), b: int(182), c: int(48), d: int(99) },
  ({ a, b, c, d }) => ivec4(a, b, c, d),
  [37, 182, 48, 99]
);

ivec4Scenario(
  `ivec4 ivec2s`,
  { a: ivec2(int(37), int(182)), b: ivec2(int(48), int(99)) },
  ({ a, b }) => ivec4(a, b),
  [37, 182, 48, 99]
);

ivec4Scenario(
  `ivec4 ivec3s`,
  { a: ivec3(int(37), int(182), int(48)), b: int(99) },
  ({ a, b }) => ivec4(a, b),
  [37, 182, 48, 99]
);

ivec4Scenario(
  `ivec4 ivec4s`,
  { a: ivec4(int(37), int(182), int(48), int(99)) },
  ({ a }) => ivec4(a),
  [37, 182, 48, 99]
);

ivec4Scenario(
  `ivec4 false`,
  { a: bool(false) },
  ({ a }) => add(int(64), multiply(int(128), ivec4(a))),
  [64, 64, 64, 64]
);

ivec4Scenario(
  `ivec4 true`,
  { a: bool(true) },
  ({ a }) => add(int(64), multiply(int(128), ivec4(a))),
  [192, 192, 192, 192]
);

ivec4Scenario(
  `ivec4 bools`,
  { a: bool(true), b: bool(false), c: bool(false), d: bool(true) },
  ({ a, b, c, d }) => add(int(64), multiply(int(128), ivec4(a, b, c, d))),
  [192, 64, 64, 192]
);

ivec4Scenario(
  `ivec4 bvec2s`,
  {
    a: bvec2(bool(true), bool(false)),
    b: bvec2(bool(false), bool(true)),
  },
  ({ a, b }) => add(int(64), multiply(int(128), ivec4(a, b))),
  [192, 64, 64, 192]
);

ivec4Scenario(
  `ivec4 bvec3s`,
  {
    a: bvec3(bool(true), bool(false), bool(false)),
    b: bool(true),
  },
  ({ a, b }) => add(int(64), multiply(int(128), ivec4(a, b))),
  [192, 64, 64, 192]
);

ivec4Scenario(
  `ivec4 bvec4`,
  { a: bvec4(bool(true), bool(false), bool(false), bool(true)) },
  ({ a }) => add(int(64), multiply(int(128), ivec4(a))),
  [192, 64, 64, 192]
);
