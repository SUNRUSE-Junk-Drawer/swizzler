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
import { mat4Scenario } from "../../unit";

mat4Scenario("mat4 float", { a: float(0.65) }, ({ a }) => mat4(a), [
  0.65,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0,
  0.65,
]);

mat4Scenario(
  "mat4 floats",
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
    j: float(0.72),
    k: float(0.41),
    l: float(0.56),
    m: float(0.91),
    n: float(0.18),
    o: float(0.37),
    p: float(0.52),
  },
  ({ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p }) =>
    mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  "mat4 vec2s",
  {
    a: vec2(float(0.65), float(0.21)),
    b: vec2(float(0.97), float(0.46)),
    c: vec2(float(0.31), float(0.61)),
    d: vec2(float(0.14), float(0.33)),
    e: vec2(float(0.89), float(0.72)),
    f: vec2(float(0.41), float(0.56)),
    g: vec2(float(0.91), float(0.18)),
    h: vec2(float(0.37), float(0.52)),
  },
  ({ a, b, c, d, e, f, g, h }) => mat4(a, b, c, d, e, f, g, h),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  "mat4 vec3s",
  {
    a: vec3(float(0.65), float(0.21), float(0.97)),
    b: vec3(float(0.46), float(0.31), float(0.61)),
    c: vec3(float(0.14), float(0.33), float(0.89)),
    d: vec3(float(0.72), float(0.41), float(0.56)),
    e: vec3(float(0.91), float(0.18), float(0.37)),
    f: float(0.52),
  },
  ({ a, b, c, d, e, f }) => mat4(a, b, c, d, e, f),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  "mat4 vec4s",
  {
    a: vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    b: vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    c: vec4(float(0.89), float(0.72), float(0.41), float(0.56)),
    d: vec4(float(0.91), float(0.18), float(0.37), float(0.52)),
  },
  ({ a, b, c, d }) => mat4(a, b, c, d),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  "mat4 mat2",
  { a: mat2(float(0.65), float(0.21), float(0.97), float(0.46)) },
  ({ a }) => mat4(a),
  [0.65, 0.21, 0, 0, 0.97, 0.46, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
);

mat4Scenario(
  "mat4 mat3",
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
  ({ a }) => mat4(a),
  [0.65, 0.21, 0.97, 0, 0.46, 0.31, 0.61, 0, 0.14, 0.33, 0.89, 0, 0, 0, 0, 1]
);

mat4Scenario(
  "mat4 mat4",
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
  ({ a }) => mat4(a),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  "mat4 int",
  { a: int(37) },
  ({ a }) => divide(mat4(a), float(255)),
  [
    0.1450980392156863,
    0,
    0,
    0,
    0,
    0.1450980392156863,
    0,
    0,
    0,
    0,
    0.1450980392156863,
    0,
    0,
    0,
    0,
    0.1450980392156863,
  ]
);

mat4Scenario(
  "mat4 ints",
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
    j: int(177),
    k: int(4),
    l: int(66),
    m: int(89),
    n: int(97),
    o: int(14),
    p: int(50),
  },
  ({ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p }) =>
    divide(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p), float(255)),
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 ivec2s",
  {
    a: ivec2(int(37), int(18)),
    b: ivec2(int(201), int(144)),
    c: ivec2(int(86), int(241)),
    d: ivec2(int(17), int(101)),
    e: ivec2(int(222), int(177)),
    f: ivec2(int(4), int(66)),
    g: ivec2(int(89), int(97)),
    h: ivec2(int(14), int(50)),
  },
  ({ a, b, c, d, e, f, g, h }) =>
    divide(mat4(a, b, c, d, e, f, g, h), float(255)),
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 ivec3s",
  {
    a: ivec3(int(37), int(18), int(201)),
    b: ivec3(int(144), int(86), int(241)),
    c: ivec3(int(17), int(101), int(222)),
    d: ivec3(int(177), int(4), int(66)),
    e: ivec3(int(89), int(97), int(14)),
    f: int(50),
  },
  ({ a, b, c, d, e, f }) => divide(mat4(a, b, c, d, e, f), float(255)),
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 ivec4s",
  {
    a: ivec4(int(37), int(18), int(201), int(144)),
    b: ivec4(int(86), int(241), int(17), int(101)),
    c: ivec4(int(222), int(177), int(4), int(66)),
    d: ivec4(int(89), int(97), int(14), int(50)),
  },
  ({ a, b, c, d }) => divide(mat4(a, b, c, d), float(255)),
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 false",
  { a: float(0.5) },
  ({ a }) => add(float(0.25), multiply(a, mat4(bool(false)))),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 true",
  { a: bool(true) },
  ({ a }) => add(float(0.25), multiply(float(0.5), mat4(a))),
  [
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bools a",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(b, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools b",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, b, a, a, a, a, a, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.55,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools c",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, b, a, a, a, a, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools d",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, b, a, a, a, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools e",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, b, a, a, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools f",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, b, a, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools g",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, b, a, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools h",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, b, a, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools h",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, b, a, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools i",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, b, a, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools j",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, a, b, a, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools k",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, a, a, b, a, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools l",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, a, a, a, b, a, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools m",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, a, a, a, a, b, a, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools n",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, a, a, a, a, a, b, a))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
  ]
);

mat4Scenario(
  "mat4 bools o",
  { a: bool(false), b: bool(true) },
  ({ a, b }) =>
    add(
      float(0.25),
      multiply(float(0.5), mat4(a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, b))
    ),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bvec2s",
  {
    a: bvec2(bool(true), bool(false)),
    b: bvec2(bool(false), bool(true)),
    c: bvec2(bool(true), bool(true)),
    d: bvec2(bool(false), bool(false)),
    e: bvec2(bool(true), bool(false)),
    f: bvec2(bool(true), bool(false)),
    g: bvec2(bool(false), bool(true)),
    h: bvec2(bool(false), bool(true)),
  },
  ({ a, b, c, d, e, f, g, h }) =>
    add(float(0.25), multiply(float(0.5), mat4(a, b, c, d, e, f, g, h))),
  [
    0.75,
    0.25,
    0.25,
    0.75,
    0.75,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bvec3s",
  {
    a: bvec3(bool(true), bool(false), bool(false)),
    b: bvec3(bool(true), bool(true), bool(true)),
    c: bvec3(bool(false), bool(false), bool(true)),
    d: bvec3(bool(false), bool(true), bool(false)),
    e: bvec3(bool(false), bool(true), bool(false)),
    f: bool(true),
  },
  ({ a, b, c, d, e, f }) =>
    add(float(0.25), multiply(float(0.5), mat4(a, b, c, d, e, f))),
  [
    0.75,
    0.25,
    0.25,
    0.75,
    0.75,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bvec4s",
  {
    a: bvec4(bool(true), bool(false), bool(false), bool(true)),
    b: bvec4(bool(true), bool(true), bool(false), bool(false)),
    c: bvec4(bool(true), bool(false), bool(true), bool(false)),
    d: bvec4(bool(false), bool(true), bool(false), bool(true)),
  },
  ({ a, b, c, d }) => add(float(0.25), multiply(float(0.5), mat4(a, b, c, d))),
  [
    0.75,
    0.25,
    0.25,
    0.75,
    0.75,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 complex",
  {
    a: float(3.2),
    b: bvec2(bool(true), bool(false)),
    c: ivec2(int(-2), int(2)),
    d: vec4(float(0.82), float(-0.72), float(-0.2), float(0.34)),
    e: int(1),
    f: vec4(float(0.68), float(-0.87), float(0.31), float(-0.27)),
    g: bvec2(bool(false), bool(true)),
  },
  ({ a, b, c, d, e, f, g }) =>
    add(float(0.5), multiply(float(0.125), mat4(a, b, c, d, e, f, g))),
  [
    0.9,
    0.625,
    0.5,
    0.25,
    0.75,
    0.6025,
    0.41,
    0.475,
    0.5425,
    0.625,
    0.585,
    0.39125,
    0.53875,
    0.46625,
    0.5,
    0.625,
  ]
);
