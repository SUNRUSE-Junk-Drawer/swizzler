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
import { mat3Scenario } from "../../unit";

mat3Scenario(`mat3 float`, { a: float(0.65) }, ({ a }) => mat3(a), [
  0.65,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0.65,
]);

mat3Scenario(
  `mat3 floats`,
  {
    a: float(0.65),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) => mat3(a, b, c, d, e, f, g, h, i),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  `mat3 vec2s`,
  {
    a: vec2(float(0.65), float(0.21)),
    b: vec2(float(0.97), float(0.46)),
    c: vec2(float(0.31), float(0.61)),
    d: vec2(float(0.14), float(0.33)),
    e: float(0.89),
  },
  ({ a, b, c, d, e }) => mat3(a, b, c, d, e),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  `mat3 vec3s`,
  {
    a: vec3(float(0.65), float(0.21), float(0.97)),
    b: vec3(float(0.46), float(0.31), float(0.61)),
    c: vec3(float(0.14), float(0.33), float(0.89)),
  },
  ({ a, b, c }) => mat3(a, b, c),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  `mat3 vec4s`,
  {
    a: vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    b: vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    c: float(0.89),
  },
  ({ a, b, c }) => mat3(a, b, c),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  `mat3 mat2`,
  { a: mat2(float(0.65), float(0.21), float(0.97), float(0.46)) },
  ({ a }) => mat3(a),
  [0.65, 0.21, 0, 0.97, 0.46, 0, 0, 0, 1]
);

mat3Scenario(
  `mat3 mat3`,
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
  ({ a }) => mat3(a),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  `mat3 mat4`,
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
  ({ a }) => mat3(a),
  [0.65, 0.21, 0.97, 0.31, 0.61, 0.14, 0.89, 0.72, 0.41]
);

mat3Scenario(
  `mat3 int`,
  { a: int(37) },
  ({ a }) => divide(mat3(a), float(255)),
  [0.1450980392156863, 0, 0, 0, 0.1450980392156863, 0, 0, 0, 0.1450980392156863]
);

mat3Scenario(
  `mat3 ints`,
  {
    a: int(37),
    b: int(18),
    c: int(201),
    d: int(144),
    e: int(86),
    f: int(241),
    g: int(17),
    h: int(101),
    i: int(222),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    divide(mat3(a, b, c, d, e, f, g, h, i), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  `mat3 ivec2s`,
  {
    a: ivec2(int(37), int(18)),
    b: ivec2(int(201), int(144)),
    c: ivec2(int(86), int(241)),
    d: ivec2(int(17), int(101)),
    e: int(222),
  },
  ({ a, b, c, d, e }) => divide(mat3(a, b, c, d, e), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  `mat3 ivec3s`,
  {
    a: ivec3(int(37), int(18), int(201)),
    b: ivec3(int(144), int(86), int(241)),
    c: ivec3(int(17), int(101), int(222)),
  },
  ({ a, b, c }) => divide(mat3(a, b, c), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  `mat3 ivec4s`,
  {
    a: ivec4(int(37), int(18), int(201), int(144)),
    b: ivec4(int(86), int(241), int(17), int(101)),
    c: int(222),
  },
  ({ a, b, c }) => divide(mat3(a, b, c), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  `mat3 false`,
  { a: bool(false) },
  ({ a }) => add(float(0.25), multiply(float(0.5), mat3(a))),
  [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 true`,
  { a: bool(true) },
  ({ a }) => add(float(0.25), multiply(float(0.5), mat3(a))),
  [0.75, 0.25, 0.25, 0.25, 0.75, 0.25, 0.25, 0.25, 0.75]
);

mat3Scenario(
  `mat3 bools a`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(b, a, a, a, a, a, a, a, a))),
  [0.75, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools b`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, b, a, a, a, a, a, a, a))),
  [0.25, 0.75, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools c`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, b, a, a, a, a, a, a))),
  [0.25, 0.25, 0.75, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools d`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, a, b, a, a, a, a, a))),
  [0.25, 0.25, 0.25, 0.75, 0.25, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools e`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, a, a, b, a, a, a, a))),
  [0.25, 0.25, 0.25, 0.25, 0.75, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools f`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, a, a, a, b, a, a, a))),
  [0.25, 0.25, 0.25, 0.25, 0.25, 0.75, 0.25, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools f`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, a, a, a, a, b, a, a))),
  [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.75, 0.25, 0.25]
);

mat3Scenario(
  `mat3 bools g`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, a, a, a, a, a, b, a))),
  [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.75, 0.25]
);

mat3Scenario(
  `mat3 bools h`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, a, a, a, a, a, a, a, b))),
  [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.75]
);

mat3Scenario(
  `mat3 bvec2s`,
  {
    a: bvec2(bool(true), bool(false)),
    b: bvec2(bool(false), bool(true)),
    c: bvec2(bool(true), bool(true)),
    d: bvec2(bool(false), bool(false)),
    e: bool(true),
  },
  ({ a, b, c, d, e }) =>
    add(float(0.25), multiply(float(0.5), mat3(a, b, c, d, e))),
  [0.75, 0.25, 0.25, 0.75, 0.75, 0.75, 0.25, 0.25, 0.75]
);

mat3Scenario(
  `mat3 bvec3s`,
  {
    a: bvec3(bool(true), bool(false), bool(false)),
    b: bvec3(bool(true), bool(true), bool(true)),
    c: bvec3(bool(false), bool(false), bool(true)),
  },
  ({ a, b, c }) => add(float(0.25), multiply(float(0.5), mat3(a, b, c))),
  [0.75, 0.25, 0.25, 0.75, 0.75, 0.75, 0.25, 0.25, 0.75]
);

mat3Scenario(
  `mat3 bvec4s`,
  {
    a: bvec4(bool(true), bool(false), bool(false), bool(true)),
    b: bvec4(bool(true), bool(true), bool(false), bool(false)),
    c: bool(true),
  },
  ({ a, b, c }) => add(float(0.25), multiply(float(0.5), mat3(a, b, c))),
  [0.75, 0.25, 0.25, 0.75, 0.75, 0.75, 0.25, 0.25, 0.75]
);

mat3Scenario(
  `mat3 complex`,
  {
    a: float(3.2),
    b: bvec2(bool(true), bool(false)),
    c: ivec2(int(-2), int(2)),
    d: vec4(float(0.82), float(-0.72), float(-0.2), float(0.34)),
  },
  ({ a, b, c, d }) => add(float(0.5), multiply(float(0.125), mat3(a, b, c, d))),
  [0.9, 0.625, 0.5, 0.25, 0.75, 0.6025, 0.41, 0.475, 0.5425]
);
