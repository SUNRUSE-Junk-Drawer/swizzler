import {
  float,
  vec2,
  vec3,
  vec4,
  mat2,
  mat3,
  mat4,
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
  divide,
} from "../..";
import { mat2Scenario } from "../../unit";

mat2Scenario(`mat2 float`, { a: float(0.65) }, ({ a }) => mat2(a), [
  0.65,
  0,
  0,
  0.65,
]);

mat2Scenario(
  `mat2 floats`,
  {
    a: float(0.65),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => mat2(a, b, c, d),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  `mat2 vec2s`,
  { a: vec2(float(0.65), float(0.21)), b: vec2(float(0.97), float(0.46)) },
  ({ a, b }) => mat2(a, b),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  `mat2 vec3s`,
  {
    a: vec3(float(0.65), float(0.21), float(0.97)),
    b: float(0.46),
  },
  ({ a, b }) => mat2(a, b),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  `mat2 vec4`,
  { a: vec4(float(0.65), float(0.21), float(0.97), float(0.46)) },
  ({ a }) => mat2(a),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  `mat2 mat2`,
  { a: mat2(float(0.65), float(0.21), float(0.97), float(0.46)) },
  ({ a }) => mat2(a),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  `mat2 mat3`,
  {
    a: mat3(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89)
    ),
  },
  ({ a }) => mat2(a),
  [0.65, 0.21, 0.46, 0.31]
);

mat2Scenario(
  `mat2 mat4`,
  {
    a: mat4(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89),
      float(0.72),
      float(0.41),
      float(0.56),
      float(0.91),
      float(0.18),
      float(0.37),
      float(0.52)
    ),
  },
  ({ a }) => mat2(a),
  [0.65, 0.21, 0.31, 0.61]
);

mat2Scenario(
  `mat2 int`,
  { a: int(37) },
  ({ a }) => divide(mat2(a), float(255)),
  [0.1450980392156863, 0, 0, 0.1450980392156863]
);

mat2Scenario(
  `mat2 ints`,
  {
    a: int(37),
    b: int(18),
    c: int(201),
    d: int(144),
  },
  ({ a, b, c, d }) => divide(mat2(a, b, c, d), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  `mat2 ivec2s`,
  { a: ivec2(int(37), int(18)), b: ivec2(int(201), int(144)) },
  ({ a, b }) => divide(mat2(a, b), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  `mat2 ivec3s`,
  { a: ivec3(int(37), int(18), int(201)), b: int(144) },
  ({ a, b }) => divide(mat2(a, b), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  `mat2 ivec4`,
  { a: ivec4(int(37), int(18), int(201), int(144)) },
  ({ a }) => divide(mat2(a), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  `mat2 false`,
  { a: bool(false) },
  ({ a }) => add(float(0.25), multiply(float(0.5), mat2(a))),
  [0.25, 0.25, 0.25, 0.25]
);

mat2Scenario(
  `mat2 true`,
  { a: bool(true) },
  ({ a }) => add(float(0.25), multiply(float(0.5), mat2(a))),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  `mat2 bools a`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), mat2(b, a, a, a))),
  [0.75, 0.25, 0.25, 0.25]
);

mat2Scenario(
  `mat2 bools b`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), mat2(a, b, a, a))),
  [0.25, 0.75, 0.25, 0.25]
);

mat2Scenario(
  `mat2 bools c`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), mat2(a, a, b, a))),
  [0.25, 0.25, 0.75, 0.25]
);

mat2Scenario(
  `mat2 bools d`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), mat2(a, a, a, b))),
  [0.25, 0.25, 0.25, 0.75]
);

mat2Scenario(
  `mat2 bvec2s`,
  { a: bvec2(bool(true), bool(false)), b: bvec2(bool(false), bool(true)) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), mat2(a, b))),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  `mat2 bvec3s`,
  { a: bvec3(bool(true), bool(false), bool(false)), b: bool(true) },
  ({ a, b }) => add(float(0.25), multiply(float(0.5), mat2(a, b))),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  `mat2 bvec4`,
  { a: bvec4(bool(true), bool(false), bool(false), bool(true)) },
  ({ a }) => add(float(0.25), multiply(float(0.5), mat2(a))),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  `mat2 complex`,
  {
    a: float(3.2),
    b: bvec2(bool(true), bool(false)),
    c: int(-2),
  },
  ({ a, b, c }) => add(float(0.5), multiply(float(0.125), mat2(a, b, c))),
  [0.9, 0.625, 0.5, 0.25]
);
