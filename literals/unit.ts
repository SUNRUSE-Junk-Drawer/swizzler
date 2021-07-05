import {
  divide,
  bool,
  float,
  int,
  add,
  vec2,
  vec3,
  vec4,
  mat2,
  mat3,
  mat4,
  ivec2,
  ivec3,
  ivec4,
  bvec2,
  bvec3,
  bvec4,
} from "..";
import { floatScenario, intScenario, boolScenario } from "../unit";
floatScenario(
  `float positive unit interval`,
  {},
  () => float(0.2941176470588235),
  0.2941176470588235
);

floatScenario(
  `float zero`,
  {},
  () => add(float(0), float(0.5019607843137255)),
  0.5019607843137255
);

floatScenario(
  `float negative zero a`,
  {},
  () => add(float(-0), float(0.5019607843137255)),
  0.5019607843137255
);

floatScenario(`float negative zero b`, {}, () => float(-0), 0);

floatScenario(
  `float negative unit interval`,
  {},
  () => add(float(-0.2941176470588235), float(0.5019607843137255)),
  0.207843137254902
);

floatScenario(
  `float positive integer`,
  {},
  () => add(float(2), float(-1.929411764705882)),
  0.0705882352941176
);

floatScenario(
  `float negative integer`,
  {},
  () => add(float(-2), float(2.086274509803922)),
  0.0862745098039216
);

floatScenario(
  `floats`,
  {},
  () => add(float(2.549019607843137), float(-1.607843137254902)),
  0.9411764705882353
);

it(`float NaN`, () => {
  expect(() => float(Number.NaN)).toThrowError(
    `Cannot create a float literal of NaN.`
  );
});

it(`float positive infinity`, () => {
  expect(() => float(Number.POSITIVE_INFINITY)).toThrowError(
    `Cannot create a float literal of positive infinity.`
  );
});

it(`float negative infinity`, () => {
  expect(() => float(Number.NEGATIVE_INFINITY)).toThrowError(
    `Cannot create a float literal of negative infinity.`
  );
});

intScenario(`int zero`, {}, () => add(int(0), int(128)), 128);

intScenario(`int negative zero a`, {}, () => add(int(-0), int(128)), 128);

intScenario(`int negative zero b`, {}, () => int(-0), 0);

intScenario(`int positive integer`, {}, () => int(37), 37);

intScenario(`int negative integer`, {}, () => add(int(-37), int(128)), 91);

it(`int NaN`, () => {
  expect(() => int(Number.NaN)).toThrowError(
    `Cannot create an int literal of NaN.`
  );
});

it(`int positive infinity`, () => {
  expect(() => int(Number.POSITIVE_INFINITY)).toThrowError(
    `Cannot create an int literal of positive infinity.`
  );
});

it(`int negative infinity`, () => {
  expect(() => int(Number.NEGATIVE_INFINITY)).toThrowError(
    `Cannot create an int literal of negative infinity.`
  );
});

it(`int positive unit interval`, () => {
  expect(() => int(0.3)).toThrowError(
    `Cannot create an int literal of a decimal number.`
  );
});

it(`int negative unit interval`, () => {
  expect(() => int(-0.3)).toThrowError(
    `Cannot create an int literal of a decimal number.`
  );
});

it(`int positive decimal`, () => {
  expect(() => int(27.3)).toThrowError(
    `Cannot create an int literal of a decimal number.`
  );
});

it(`int negative decimal`, () => {
  expect(() => int(-27.3)).toThrowError(
    `Cannot create an int literal of a decimal number.`
  );
});

it(`int positive unsafe integer`, () => {
  expect(() => int(9007199254740993)).toThrowError(
    `Cannot create an int literal of an unsafe integer.`
  );
});

it(`int negative unsafe integer`, () => {
  expect(() => int(-9007199254740993)).toThrowError(
    `Cannot create an int literal of an unsafe integer.`
  );
});

boolScenario(`true`, {}, () => bool(true), true);

boolScenario(`false`, {}, () => bool(false), false);

boolScenario(`bool float zero`, {}, () => bool(float(0)), false);
boolScenario(`bool float negative zero`, {}, () => bool(float(-0)), false);
boolScenario(`bool float positive`, {}, () => bool(float(0.2)), true);
boolScenario(`bool float negative`, {}, () => bool(float(-0.2)), true);

boolScenario(
  `bool vec2 zero`,
  {
    a: float(0),
    b: float(0.21),
  },
  ({ a, b }) => bool(vec2(a, b)),
  false
);
boolScenario(
  `bool vec2 negative zero`,
  {
    a: float(-0),
    b: float(0.21),
  },
  ({ a, b }) => bool(vec2(a, b)),
  false
);
boolScenario(
  `bool vec2 positive`,
  {
    a: float(0.2),
    b: float(0.21),
  },
  ({ a, b }) => bool(vec2(a, b)),
  true
);
boolScenario(
  `bool vec2 negative`,
  {
    a: float(-0.2),
    b: float(0.21),
  },
  ({ a, b }) => bool(vec2(a, b)),
  true
);

boolScenario(
  `bool vec3 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => bool(vec3(a, b, c)),
  false
);
boolScenario(
  `bool vec3 negative zero`,
  {
    a: float(-0),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => bool(vec3(a, b, c)),
  false
);
boolScenario(
  `bool vec3 positive`,
  {
    a: float(0.2),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => bool(vec3(a, b, c)),
  true
);
boolScenario(
  `bool vec3 negative`,
  {
    a: float(-0.2),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => bool(vec3(a, b, c)),
  true
);

boolScenario(
  `bool vec4 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(vec4(a, b, c, d)),
  false
);
boolScenario(
  `bool vec4 negative zero`,
  {
    a: float(-0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(vec4(a, b, c, d)),
  false
);
boolScenario(
  `bool vec4 positive`,
  {
    a: float(0.2),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(vec4(a, b, c, d)),
  true
);
boolScenario(
  `bool vec4 negative`,
  {
    a: float(-0.2),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(vec4(a, b, c, d)),
  true
);

boolScenario(
  `bool mat2 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(mat2(a, b, c, d)),
  false
);
boolScenario(
  `bool mat2 negative zero`,
  {
    a: float(-0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(mat2(a, b, c, d)),
  false
);
boolScenario(
  `bool mat2 positive`,
  {
    a: float(0.2),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(mat2(a, b, c, d)),
  true
);
boolScenario(
  `bool mat2 negative`,
  {
    a: float(-0.2),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => bool(mat2(a, b, c, d)),
  true
);

boolScenario(
  `bool mat3 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) => bool(mat3(a, b, c, d, e, f, g, h, i)),
  false
);
boolScenario(
  `bool mat3 negative zero`,
  {
    a: float(-0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) => bool(mat3(a, b, c, d, e, f, g, h, i)),
  false
);
boolScenario(
  `bool mat3 positive`,
  {
    a: float(0.2),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) => bool(mat3(a, b, c, d, e, f, g, h, i)),
  true
);
boolScenario(
  `bool mat3 negative`,
  {
    a: float(-0.2),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) => bool(mat3(a, b, c, d, e, f, g, h, i)),
  true
);

boolScenario(
  `bool mat4 zero`,
  {
    a: float(0),
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
    bool(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)),
  false
);
boolScenario(
  `bool mat4 negative zero`,
  {
    a: float(-0),
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
    bool(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)),
  false
);
boolScenario(
  `bool mat4 positive`,
  {
    a: float(0.2),
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
    bool(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)),
  true
);
boolScenario(
  `bool mat4 negative`,
  {
    a: float(-0.2),
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
    bool(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)),
  true
);

boolScenario(`bool int zero`, {}, () => bool(int(0)), false);
boolScenario(`bool int negative zero`, {}, () => bool(int(-0)), false);
boolScenario(`bool int positive`, {}, () => bool(int(1)), true);
boolScenario(`bool int negative`, {}, () => bool(int(-1)), true);

boolScenario(
  `bool ivec2 zero`,
  {
    a: int(0),
    b: int(21),
  },
  ({ a, b }) => bool(ivec2(a, b)),
  false
);
boolScenario(
  `bool ivec2 negative zero`,
  {
    a: int(-0),
    b: int(21),
  },
  ({ a, b }) => bool(ivec2(a, b)),
  false
);
boolScenario(
  `bool ivec2 positive`,
  {
    a: int(1),
    b: int(21),
  },
  ({ a, b }) => bool(ivec2(a, b)),
  true
);
boolScenario(
  `bool ivec2 negative`,
  {
    a: int(-1),
    b: int(21),
  },
  ({ a, b }) => bool(ivec2(a, b)),
  true
);

boolScenario(
  `bool ivec3 zero`,
  {
    a: int(0),
    b: int(21),
    c: int(97),
  },
  ({ a, b, c }) => bool(ivec3(a, b, c)),
  false
);
boolScenario(
  `bool ivec3 negative zero`,
  {
    a: int(-0),
    b: int(21),
    c: int(97),
  },
  ({ a, b, c }) => bool(ivec3(a, b, c)),
  false
);
boolScenario(
  `bool ivec3 positive`,
  {
    a: int(1),
    b: int(21),
    c: int(97),
  },
  ({ a, b, c }) => bool(ivec3(a, b, c)),
  true
);
boolScenario(
  `bool ivec3 negative`,
  {
    a: int(-1),
    b: int(21),
    c: int(97),
  },
  ({ a, b, c }) => bool(ivec3(a, b, c)),
  true
);

boolScenario(
  `bool ivec4 zero`,
  {
    a: int(0),
    b: int(21),
    c: int(97),
    d: int(46),
  },
  ({ a, b, c, d }) => bool(ivec4(a, b, c, d)),
  false
);
boolScenario(
  `bool ivec4 negative zero`,
  {
    a: int(-0),
    b: int(21),
    c: int(97),
    d: int(46),
  },
  ({ a, b, c, d }) => bool(ivec4(a, b, c, d)),
  false
);
boolScenario(
  `bool ivec4 positive`,
  {
    a: int(1),
    b: int(21),
    c: int(97),
    d: int(46),
  },
  ({ a, b, c, d }) => bool(ivec4(a, b, c, d)),
  true
);
boolScenario(
  `bool ivec4 negative`,
  {
    a: int(-1),
    b: int(21),
    c: int(97),
    d: int(46),
  },
  ({ a, b, c, d }) => bool(ivec4(a, b, c, d)),
  true
);

boolScenario(`bool false`, { a: bool(false) }, ({ a }) => bool(a), false);
boolScenario(`bool true`, { b: bool(true) }, ({ b }) => bool(b), true);

boolScenario(
  `bool bvec2 false`,
  { a: bool(false), b: bool(false) },
  ({ a, b }) => bool(bvec2(a, b)),
  false
);
boolScenario(
  `bool bvec2 true`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => bool(bvec2(a, b)),
  true
);

boolScenario(
  `bool bvec3 false`,
  { a: bool(false), b: bool(false), c: bool(true) },
  ({ a, b, c }) => bool(bvec3(a, b, c)),
  false
);
boolScenario(
  `bool bvec3 true`,
  { a: bool(true), b: bool(false), c: bool(true) },
  ({ a, b, c }) => bool(bvec3(a, b, c)),
  true
);

boolScenario(
  `bool bvec4 false`,
  { a: bool(false), b: bool(true), c: bool(true), d: bool(false) },
  ({ a, b, c, d }) => bool(bvec4(a, b, c, d)),
  false
);
boolScenario(
  `bool bvec4 true`,
  { a: bool(true), b: bool(true), c: bool(true), d: bool(false) },
  ({ a, b, c, d }) => bool(bvec4(a, b, c, d)),
  true
);

intScenario(
  `int float less than -1.5`,
  {
    a: float(-1.6),
  },
  ({ a }) => add(int(16), int(a)),
  15
);

intScenario(
  `int float -1.5`,
  {
    a: float(-1.5),
  },
  ({ a }) => add(int(16), int(a)),
  15
);

intScenario(
  `int float greater than -1.5`,
  {
    a: float(-1.4),
  },
  ({ a }) => add(int(16), int(a)),
  15
);

intScenario(
  `int float -1`,
  {
    a: float(-1),
  },
  ({ a }) => add(int(16), int(a)),
  15
);

intScenario(
  `int float greater than -1`,
  {
    a: float(-1),
  },
  ({ a }) => add(int(16), int(a)),
  15
);

intScenario(
  `int float -0.5`,
  {
    a: float(-0.5),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int float greater than -0.5`,
  {
    a: float(-0.4),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int float zero`,
  {
    a: float(0),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int float less than 0.5`,
  {
    a: float(0.4),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int float 0.5`,
  {
    a: float(0.5),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int float less than 1`,
  {
    a: float(0.7),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int float 1`,
  {
    a: float(1),
  },
  ({ a }) => add(int(16), int(a)),
  17
);

intScenario(
  `int float less than 1.5`,
  {
    a: float(1.4),
  },
  ({ a }) => add(int(16), int(a)),
  17
);

intScenario(
  `int float 1.5`,
  {
    a: float(1.5),
  },
  ({ a }) => add(int(16), int(a)),
  17
);

intScenario(
  `int float greater than 1.5`,
  {
    a: float(1.6),
  },
  ({ a }) => add(int(16), int(a)),
  17
);

intScenario(
  `int vec2 less than -1.5`,
  {
    a: float(-1.6),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  15
);

intScenario(
  `int vec2 -1.5`,
  {
    a: float(-1.5),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  15
);

intScenario(
  `int vec2 greater than -1.5`,
  {
    a: float(-1.4),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  15
);

intScenario(
  `int vec2 -1`,
  {
    a: float(-1),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  15
);

intScenario(
  `int vec2 greater than -1`,
  {
    a: float(-1),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  15
);

intScenario(
  `int vec2 -0.5`,
  {
    a: float(-0.5),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  16
);

intScenario(
  `int vec2 greater than -0.5`,
  {
    a: float(-0.4),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  16
);

intScenario(
  `int vec2 zero`,
  {
    a: float(0),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  16
);

intScenario(
  `int vec2 less than 0.5`,
  {
    a: float(0.4),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  16
);

intScenario(
  `int vec2 0.5`,
  {
    a: float(0.5),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  16
);

intScenario(
  `int vec2 less than 1`,
  {
    a: float(0.7),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  16
);

intScenario(
  `int vec2 1`,
  {
    a: float(1),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  17
);

intScenario(
  `int vec2 less than 1.5`,
  {
    a: float(1.4),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  17
);

intScenario(
  `int vec2 1.5`,
  {
    a: float(1.5),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  17
);

intScenario(
  `int vec2 greater than 1.5`,
  {
    a: float(1.6),
    b: float(0.21),
  },
  ({ a, b }) => add(int(16), int(vec2(a, b))),
  17
);

intScenario(
  `int vec3 less than -1.5`,
  {
    a: float(-1.6),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  15
);

intScenario(
  `int vec3 -1.5`,
  {
    a: float(-1.5),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  15
);

intScenario(
  `int vec3 greater than -1.5`,
  {
    a: float(-1.4),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  15
);

intScenario(
  `int vec3 -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  15
);

intScenario(
  `int vec3 greater than -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  15
);

intScenario(
  `int vec3 -0.5`,
  {
    a: float(-0.5),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  16
);

intScenario(
  `int vec3 greater than -0.5`,
  {
    a: float(-0.4),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  16
);

intScenario(
  `int vec3 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  16
);

intScenario(
  `int vec3 less than 0.5`,
  {
    a: float(0.4),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  16
);

intScenario(
  `int vec3 0.5`,
  {
    a: float(0.5),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  16
);

intScenario(
  `int vec3 less than 1`,
  {
    a: float(0.7),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  16
);

intScenario(
  `int vec3 1`,
  {
    a: float(1),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  17
);

intScenario(
  `int vec3 less than 1.5`,
  {
    a: float(1.4),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  17
);

intScenario(
  `int vec3 1.5`,
  {
    a: float(1.5),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  17
);

intScenario(
  `int vec3 greater than 1.5`,
  {
    a: float(1.6),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => add(int(16), int(vec3(a, b, c))),
  17
);

intScenario(
  `int vec4 less than -1.5`,
  {
    a: float(-1.6),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  15
);

intScenario(
  `int vec4 -1.5`,
  {
    a: float(-1.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  15
);

intScenario(
  `int vec4 greater than -1.5`,
  {
    a: float(-1.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  15
);

intScenario(
  `int vec4 -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  15
);

intScenario(
  `int vec4 greater than -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  15
);

intScenario(
  `int vec4 -0.5`,
  {
    a: float(-0.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  16
);

intScenario(
  `int vec4 greater than -0.5`,
  {
    a: float(-0.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  16
);

intScenario(
  `int vec4 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  16
);

intScenario(
  `int vec4 less than 0.5`,
  {
    a: float(0.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  16
);

intScenario(
  `int vec4 0.5`,
  {
    a: float(0.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  16
);

intScenario(
  `int vec4 less than 1`,
  {
    a: float(0.7),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  16
);

intScenario(
  `int vec4 1`,
  {
    a: float(1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  17
);

intScenario(
  `int vec4 less than 1.5`,
  {
    a: float(1.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  17
);

intScenario(
  `int vec4 1.5`,
  {
    a: float(1.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  17
);

intScenario(
  `int vec4 greater than 1.5`,
  {
    a: float(1.6),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(vec4(a, b, c, d))),
  17
);

intScenario(
  `int mat2 less than -1.5`,
  {
    a: float(-1.6),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  15
);

intScenario(
  `int mat2 -1.5`,
  {
    a: float(-1.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  15
);

intScenario(
  `int mat2 greater than -1.5`,
  {
    a: float(-1.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  15
);

intScenario(
  `int mat2 -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  15
);

intScenario(
  `int mat2 greater than -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  15
);

intScenario(
  `int mat2 -0.5`,
  {
    a: float(-0.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  16
);

intScenario(
  `int mat2 greater than -0.5`,
  {
    a: float(-0.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  16
);

intScenario(
  `int mat2 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  16
);

intScenario(
  `int mat2 less than 0.5`,
  {
    a: float(0.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  16
);

intScenario(
  `int mat2 0.5`,
  {
    a: float(0.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  16
);

intScenario(
  `int mat2 less than 1`,
  {
    a: float(0.7),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  16
);

intScenario(
  `int mat2 1`,
  {
    a: float(1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  17
);

intScenario(
  `int mat2 less than 1.5`,
  {
    a: float(1.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  17
);

intScenario(
  `int mat2 1.5`,
  {
    a: float(1.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  17
);

intScenario(
  `int mat2 greater than 1.5`,
  {
    a: float(1.6),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => add(int(16), int(mat2(a, b, c, d))),
  17
);

intScenario(
  `int mat3 less than -1.5`,
  {
    a: float(-1.6),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  15
);

intScenario(
  `int mat3 -1.5`,
  {
    a: float(-1.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  15
);

intScenario(
  `int mat3 greater than -1.5`,
  {
    a: float(-1.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  15
);

intScenario(
  `int mat3 -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  15
);

intScenario(
  `int mat3 greater than -1`,
  {
    a: float(-1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  15
);

intScenario(
  `int mat3 -0.5`,
  {
    a: float(-0.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  16
);

intScenario(
  `int mat3 greater than -0.5`,
  {
    a: float(-0.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  16
);

intScenario(
  `int mat3 zero`,
  {
    a: float(0),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  16
);

intScenario(
  `int mat3 less than 0.5`,
  {
    a: float(0.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  16
);

intScenario(
  `int mat3 0.5`,
  {
    a: float(0.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  16
);

intScenario(
  `int mat3 less than 1`,
  {
    a: float(0.7),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  16
);

intScenario(
  `int mat3 1`,
  {
    a: float(1),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  17
);

intScenario(
  `int mat3 less than 1.5`,
  {
    a: float(1.4),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  17
);

intScenario(
  `int mat3 1.5`,
  {
    a: float(1.5),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  17
);

intScenario(
  `int mat3 greater than 1.5`,
  {
    a: float(1.6),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
    e: float(0.31),
    f: float(0.61),
    g: float(0.14),
    h: float(0.33),
    i: float(0.89),
  },
  ({ a, b, c, d, e, f, g, h, i }) =>
    add(int(16), int(mat3(a, b, c, d, e, f, g, h, i))),
  17
);

intScenario(
  `int mat4 less than -1.5`,
  {
    a: float(-1.6),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  15
);

intScenario(
  `int mat4 -1.5`,
  {
    a: float(-1.5),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  15
);

intScenario(
  `int mat4 greater than -1.5`,
  {
    a: float(-1.4),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  15
);

intScenario(
  `int mat4 -1`,
  {
    a: float(-1),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  15
);

intScenario(
  `int mat4 greater than -1`,
  {
    a: float(-1),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  15
);

intScenario(
  `int mat4 -0.5`,
  {
    a: float(-0.5),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  16
);

intScenario(
  `int mat4 greater than -0.5`,
  {
    a: float(-0.4),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  16
);

intScenario(
  `int mat4 zero`,
  {
    a: float(0),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  16
);

intScenario(
  `int mat4 less than 0.5`,
  {
    a: float(0.4),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  16
);

intScenario(
  `int mat4 0.5`,
  {
    a: float(0.5),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  16
);

intScenario(
  `int mat4 less than 1`,
  {
    a: float(0.7),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  16
);

intScenario(
  `int mat4 1`,
  {
    a: float(1),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  17
);

intScenario(
  `int mat4 less than 1.5`,
  {
    a: float(1.4),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  17
);

intScenario(
  `int mat4 1.5`,
  {
    a: float(1.5),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  17
);

intScenario(
  `int mat4 greater than 1.5`,
  {
    a: float(1.6),
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
    add(int(16), int(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p))),
  17
);

intScenario(
  `int int`,
  {
    a: int(4),
  },
  ({ a }) => add(int(16), int(a)),
  20
);

intScenario(
  `int ivec2`,
  {
    a: int(4),
    b: int(21),
  },
  ({ a, b }) => add(int(16), int(ivec2(a, b))),
  20
);

intScenario(
  `int ivec3`,
  {
    a: int(4),
    b: int(21),
    c: int(97),
  },
  ({ a, b, c }) => add(int(16), int(ivec3(a, b, c))),
  20
);

intScenario(
  `int ivec4`,
  {
    a: int(4),
    b: int(21),
    c: int(97),
    d: int(46),
  },
  ({ a, b, c, d }) => add(int(16), int(ivec4(a, b, c, d))),
  20
);

intScenario(
  `int false`,
  {
    a: bool(false),
  },
  ({ a }) => add(int(16), int(a)),
  16
);

intScenario(
  `int true`,
  {
    a: bool(true),
  },
  ({ a }) => add(int(16), int(a)),
  17
);

intScenario(
  `int bvec2 false`,
  {
    a: bool(false),
    b: bool(true),
  },
  ({ a, b }) => add(int(16), int(bvec2(a, b))),
  16
);

intScenario(
  `int bvec2 true`,
  {
    a: bool(true),
    b: bool(true),
  },
  ({ a, b }) => add(int(16), int(bvec2(a, b))),
  17
);

intScenario(
  `int bvec3 false`,
  {
    a: bool(false),
    b: bool(true),
    c: bool(true),
  },
  ({ a, b, c }) => add(int(16), int(bvec3(a, b, c))),
  16
);

intScenario(
  `int bvec3 true`,
  {
    a: bool(true),
    b: bool(true),
    c: bool(true),
  },
  ({ a, b, c }) => add(int(16), int(bvec3(a, b, c))),
  17
);

intScenario(
  `int bvec4 false`,
  {
    a: bool(false),
    b: bool(true),
    c: bool(true),
    d: bool(false),
  },
  ({ a, b, c, d }) => add(int(16), int(bvec4(a, b, c, d))),
  16
);

intScenario(
  `int bvec4 true`,
  {
    a: bool(true),
    b: bool(true),
    c: bool(true),
    d: bool(false),
  },
  ({ a, b, c, d }) => add(int(16), int(bvec4(a, b, c, d))),
  17
);

floatScenario(
  `float false`,
  {
    a: bool(false),
  },
  ({ a }) => add(float(0.5), float(a)),
  0.5
);

floatScenario(
  `float true`,
  {
    a: bool(true),
  },
  ({ a }) => add(float(-0.5), float(a)),
  0.5
);

floatScenario(
  `float bvec2 false`,
  {
    a: bool(false),
    b: bool(true),
  },
  ({ a, b }) => add(float(0.5), float(bvec2(a, b))),
  0.5
);

floatScenario(
  `float bvec2 true`,
  {
    a: bool(true),
    b: bool(true),
  },
  ({ a, b }) => add(float(-0.5), float(bvec2(a, b))),
  0.5
);

floatScenario(
  `float bvec3 false`,
  {
    a: bool(false),
    b: bool(true),
    c: bool(true),
  },
  ({ a, b, c }) => add(float(0.5), float(bvec3(a, b, c))),
  0.5
);

floatScenario(
  `float bvec3 true`,
  {
    a: bool(true),
    b: bool(true),
    c: bool(true),
  },
  ({ a, b, c }) => add(float(-0.5), float(bvec3(a, b, c))),
  0.5
);

floatScenario(
  `float bvec4 false`,
  {
    a: bool(false),
    b: bool(true),
    c: bool(true),
    d: bool(false),
  },
  ({ a, b, c, d }) => add(float(0.5), float(bvec4(a, b, c, d))),
  0.5
);

floatScenario(
  `float bvec4 true`,
  {
    a: bool(true),
    b: bool(true),
    c: bool(true),
    d: bool(false),
  },
  ({ a, b, c, d }) => add(float(-0.5), float(bvec4(a, b, c, d))),
  0.5
);

floatScenario(
  `float float`,
  {
    a: float(0.65),
  },
  ({ a }) => float(vec2(a)),
  0.65
);

floatScenario(
  `float vec2`,
  {
    a: float(0.65),
    b: float(0.21),
  },
  ({ a, b }) => float(vec2(a, b)),
  0.65
);

floatScenario(
  `float vec3`,
  {
    a: float(0.65),
    b: float(0.21),
    c: float(0.97),
  },
  ({ a, b, c }) => float(vec3(a, b, c)),
  0.65
);

floatScenario(
  `float vec4`,
  {
    a: float(0.65),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => float(vec4(a, b, c, d)),
  0.65
);

floatScenario(
  `float mat2`,
  {
    a: float(0.65),
    b: float(0.21),
    c: float(0.97),
    d: float(0.46),
  },
  ({ a, b, c, d }) => float(mat2(a, b, c, d)),
  0.65
);

floatScenario(
  `float mat3`,
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
  ({ a, b, c, d, e, f, g, h, i }) => float(mat3(a, b, c, d, e, f, g, h, i)),
  0.65
);

floatScenario(
  `float mat4`,
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
    float(mat4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)),
  0.65
);

floatScenario(
  `float int`,
  {
    a: int(23),
  },
  ({ a }) => divide(float(ivec3(a)), float(255)),
  0.0901960784313725
);

floatScenario(
  `float ivec2`,
  {
    a: int(23),
    b: int(-4),
  },
  ({ a, b }) => divide(float(ivec2(a, b)), float(255)),
  0.0901960784313725
);

floatScenario(
  `float ivec3`,
  {
    a: int(23),
    b: int(-4),
    c: int(64),
  },
  ({ a, b, c }) => divide(float(ivec3(a, b, c)), float(255)),
  0.0901960784313725
);

floatScenario(
  `float ivec4`,
  {
    a: int(23),
    b: int(-4),
    c: int(64),
    d: int(100),
  },
  ({ a, b, c, d }) => divide(float(ivec4(a, b, c, d)), float(255)),
  0.0901960784313725
);
