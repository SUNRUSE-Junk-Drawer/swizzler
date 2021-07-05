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
  divide,
} from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
  mat2Scenario,
  mat3Scenario,
  mat4Scenario,
  intScenario,
  ivec2Scenario,
  ivec3Scenario,
  ivec4Scenario,
} from "../../unit";

floatScenario(
  `divide float float`,
  { a: float(0.2941176470588235), b: float(0.4) },
  ({ a, b }) => divide(a, b),
  0.73529411764705882352941176470588
);

vec2Scenario(
  `divide vec2 float`,
  {
    a: vec2(float(0.2941176470588235), float(0.3490196078431373)),
    b: float(0.4),
  },
  ({ a, b }) => divide(a, b),
  [0.73529411764705882352941176470588, 0.87254901960784313725490196078431]
);

vec3Scenario(
  `divide vec3 float`,
  {
    a: vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137)
    ),
    b: float(0.4),
  },
  ({ a, b }) => divide(a, b),
  [
    0.73529411764705882352941176470588,
    0.87254901960784313725490196078431,
    0.13725490196078431372549019607843,
  ]
);

vec4Scenario(
  `divide vec4 float`,
  {
    a: vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137),
      float(0.2156862745098039)
    ),
    b: float(0.4),
  },
  ({ a, b }) => divide(a, b),
  [
    0.73529411764705882352941176470588,
    0.87254901960784313725490196078431,
    0.13725490196078431372549019607843,
    0.53921568627450980392156862745098,
  ]
);

vec2Scenario(
  `divide float vec2`,
  {
    a: float(0.1294117647058824),
    b: vec2(float(0.2941176470588235), float(0.3490196078431373)),
  },
  ({ a, b }) => divide(a, b),
  [0.44, 0.37078651685393258426966292134831]
);

vec3Scenario(
  `divide float vec3`,
  {
    a: float(0.1294117647058824),
    b: vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.2549019607843137)
    ),
  },
  ({ a, b }) => divide(a, b),
  [0.44, 0.37078651685393258426966292134831, 0.50769230769230769230769230769231]
);

vec4Scenario(
  `divide float vec4`,
  {
    a: float(0.1294117647058824),
    b: vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.2549019607843137),
      float(0.2156862745098039)
    ),
  },
  ({ a, b }) => divide(a, b),
  [
    0.44,
    0.37078651685393258426966292134831,
    0.50769230769230769230769230769231,
    0.6,
  ]
);

vec2Scenario(
  `divide vec2 vec2`,
  {
    a: vec2(float(0.2941176470588235), float(0.1215686274509804)),
    b: vec2(float(0.4), float(0.3450980392156863)),
  },
  ({ a, b }) => divide(a, b),
  [0.73529411764705882352941176470588, 0.35227272727272727272727272727273]
);

vec3Scenario(
  `divide vec3 vec3`,
  {
    a: vec3(
      float(0.2941176470588235),
      float(0.1215686274509804),
      float(0.0549019607843137)
    ),
    b: vec3(float(0.4), float(0.3450980392156863), float(0.3137254901960784)),
  },
  ({ a, b }) => divide(a, b),
  [
    0.73529411764705882352941176470588,
    0.35227272727272727272727272727273,
    0.175,
  ]
);

vec4Scenario(
  `divide vec4 vec4`,
  {
    a: vec4(
      float(0.2941176470588235),
      float(0.1215686274509804),
      float(0.0549019607843137),
      float(0.2156862745098039)
    ),
    b: vec4(
      float(0.4),
      float(0.3450980392156863),
      float(0.3137254901960784),
      float(0.3882352941176471)
    ),
  },
  ({ a, b }) => divide(a, b),
  [
    0.73529411764705882352941176470588,
    0.35227272727272727272727272727273,
    0.175,
    0.55555555555555555555555555555556,
  ]
);

mat2Scenario(
  `divide float mat2`,
  {
    a: float(0.4),
    b: mat2(
      float(1.666666666666667),
      float(1.25),
      float(5),
      float(1.111111111111111)
    ),
  },
  ({ a, b }) => divide(a, b),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  `divide float mat3`,
  {
    a: float(0.4),
    b: mat3(
      float(1.666666666666667),
      float(1.25),
      float(5),
      float(1.111111111111111),
      float(10),
      float(2),
      float(2.5),
      float(3.333333333333333),
      float(1.428571428571429)
    ),
  },
  ({ a, b }) => divide(a, b),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  `divide float mat4`,
  {
    a: float(0.4),
    b: mat4(
      float(1.666666666666667),
      float(1.25),
      float(5),
      float(1.111111111111111),
      float(10),
      float(2),
      float(2.5),
      float(3.333333333333333),
      float(1.428571428571429),
      float(4.347826086956522),
      float(1.282051282051282),
      float(3.125),
      float(1.538461538461538),
      float(1.19047619047619),
      float(1.818181818181818),
      float(1.08695652173913)
    ),
  },
  ({ a, b }) => divide(a, b),
  [
    0.24,
    0.32,
    0.08,
    0.36,
    0.04,
    0.2,
    0.16,
    0.12,
    0.28,
    0.092,
    0.312,
    0.128,
    0.26,
    0.336,
    0.22,
    0.368,
  ]
);

mat2Scenario(
  `divide mat2 float`,
  { a: mat2(float(0.6), float(0.8), float(0.2), float(0.9)), b: float(2.5) },
  ({ a, b }) => divide(a, b),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  `divide mat3 float`,
  {
    a: mat3(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.1),
      float(0.5),
      float(0.4),
      float(0.3),
      float(0.7)
    ),
    b: float(2.5),
  },
  ({ a, b }) => divide(a, b),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  `divide mat4 float`,
  {
    a: mat4(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.1),
      float(0.5),
      float(0.4),
      float(0.3),
      float(0.7),
      float(0.23),
      float(0.78),
      float(0.32),
      float(0.65),
      float(0.84),
      float(0.55),
      float(0.92)
    ),
    b: float(2.5),
  },
  ({ a, b }) => divide(a, b),
  [
    0.24,
    0.32,
    0.08,
    0.36,
    0.04,
    0.2,
    0.16,
    0.12,
    0.28,
    0.092,
    0.312,
    0.128,
    0.26,
    0.336,
    0.22,
    0.368,
  ]
);

mat2Scenario(
  `divide mat2 mat2`,
  {
    a: mat2(float(0.6), float(0.8), float(0.2), float(0.9)),
    b: mat2(float(2.4), float(4.2), float(2.7), float(1.9)),
  },
  ({ a, b }) => divide(a, b),
  [0.25, 0.1904761904761905, 0.0740740740740741, 0.4736842105263158]
);

mat3Scenario(
  `divide mat3 mat3`,
  {
    a: mat3(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.2),
      float(0.4),
      float(0.7),
      float(2.4),
      float(0.58)
    ),
    b: mat3(
      float(2.4),
      float(4.2),
      float(2.7),
      float(1.9),
      float(0.5),
      float(1.8),
      float(3.1),
      float(5.2),
      float(3.2)
    ),
  },
  ({ a, b }) => divide(a, b),
  [
    0.25,
    0.1904761904761905,
    0.0740740740740741,
    0.4736842105263158,
    0.4,
    0.2222222222222222,
    0.2258064516129032,
    0.4615384615384615,
    0.18125,
  ]
);

mat4Scenario(
  `divide mat4 mat4`,
  {
    a: mat4(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.2),
      float(0.4),
      float(0.7),
      float(2.4),
      float(0.58),

      float(2.1),
      float(0.75),
      float(0.48),
      float(0.71),
      float(3.2),
      float(1.4),
      float(2.8)
    ),
    b: mat4(
      float(2.4),
      float(4.2),
      float(2.7),
      float(1.9),
      float(0.5),
      float(1.8),
      float(3.1),
      float(5.2),
      float(3.2),

      float(2.5),
      float(1.44),
      float(0.67),
      float(0.8),
      float(4.8),
      float(1.8),
      float(3.7)
    ),
  },
  ({ a, b }) => divide(a, b),
  [
    0.25,
    0.1904761904761905,
    0.0740740740740741,
    0.4736842105263158,
    0.4,
    0.2222222222222222,
    0.2258064516129032,
    0.4615384615384615,
    0.18125,
    0.84,
    0.5208333333333333,
    0.7164179104477612,
    0.8875,
    0.6666666666666667,
    0.7777777777777778,
    0.7567567567567568,
  ]
);

intScenario(
  `divide int int`,
  { a: int(27), b: int(4) },
  ({ a, b }) => divide(a, b),
  6
);

ivec2Scenario(
  `divide ivec2 int`,
  { a: int(29), b: int(100) },
  ({ a, b }) => divide(ivec2(a, b), int(3)),
  [9, 33]
);

ivec3Scenario(
  `divide ivec3 int`,
  { a: ivec3(int(29), int(100), int(41)), b: int(3) },
  ({ a, b }) => divide(a, b),
  [9, 33, 13]
);

ivec4Scenario(
  `divide ivec4 int`,
  { a: ivec4(int(29), int(100), int(41), int(8)), b: int(3) },
  ({ a, b }) => divide(a, b),
  [9, 33, 13, 2]
);

ivec2Scenario(
  `divide int ivec2`,
  { a: int(201), b: ivec2(int(4), int(7)) },
  ({ a, b }) => divide(a, b),
  [50, 28]
);

ivec3Scenario(
  `divide int ivec3`,
  { a: int(201), b: ivec3(int(4), int(7), int(2)) },
  ({ a, b }) => divide(a, b),
  [50, 28, 100]
);

ivec4Scenario(
  `divide int ivec4`,
  { a: int(201), b: ivec4(int(4), int(7), int(2), int(12)) },
  ({ a, b }) => divide(a, b),
  [50, 28, 100, 16]
);

ivec2Scenario(
  `divide ivec2 ivec2`,
  { a: ivec2(int(27), int(100)), b: ivec2(int(4), int(2)) },
  ({ a, b }) => divide(a, b),
  [6, 50]
);

ivec3Scenario(
  `divide ivec3 ivec3`,
  { a: ivec3(int(27), int(100), int(41)), b: ivec3(int(4), int(2), int(5)) },
  ({ a, b }) => divide(a, b),
  [6, 50, 8]
);

ivec4Scenario(
  `divide ivec4 ivec4`,
  {
    a: ivec4(int(27), int(100), int(41), int(8)),
    b: ivec4(int(4), int(2), int(5), int(3)),
  },
  ({ a, b }) => divide(a, b),
  [6, 50, 8, 2]
);
