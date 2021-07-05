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
  add,
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
  `add float float`,
  { a: float(0.2941176470588235), b: float(0.4) },
  ({ a, b }) => add(a, b),
  0.6941176470588235
);

vec2Scenario(
  `add vec2 float`,
  {
    a: vec2(float(0.2941176470588235), float(0.3490196078431373)),
    b: float(0.4),
  },
  ({ a, b }) => add(a, b),
  [0.6941176470588235, 0.7490196078431373]
);

vec3Scenario(
  `add vec3 float`,
  {
    a: vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137)
    ),
    b: float(0.4),
  },
  ({ a, b }) => add(a, b),
  [0.6941176470588235, 0.7490196078431373, 0.4549019607843137]
);

vec4Scenario(
  `add vec4 float`,
  {
    a: vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137),
      float(0.2156862745098039)
    ),
    b: float(0.4),
  },
  ({ a, b }) => add(a, b),
  [
    0.6941176470588235,
    0.7490196078431373,
    0.4549019607843137,
    0.6156862745098039,
  ]
);

vec2Scenario(
  `add float vec2`,
  {
    a: float(0.4),
    b: vec2(float(0.2941176470588235), float(0.3490196078431373)),
  },
  ({ a, b }) => add(a, b),
  [0.6941176470588235, 0.7490196078431373]
);

vec3Scenario(
  `add float vec3`,
  {
    a: float(0.4),
    b: vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137)
    ),
  },
  ({ a, b }) => add(a, b),
  [0.6941176470588235, 0.7490196078431373, 0.4549019607843137]
);

vec4Scenario(
  `add float vec4`,
  {
    a: float(0.4),
    b: vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137),
      float(0.2156862745098039)
    ),
  },
  ({ a, b }) => add(a, b),
  [
    0.6941176470588235,
    0.7490196078431373,
    0.4549019607843137,
    0.6156862745098039,
  ]
);

vec2Scenario(
  `add vec2 vec2`,
  {
    a: vec2(float(0.2941176470588235), float(0.3490196078431373)),
    b: vec2(float(0.4), float(0.3450980392156863)),
  },
  ({ a, b }) => add(a, b),
  [0.6941176470588235, 0.6941176470588235]
);

vec3Scenario(
  `add vec3 vec3`,
  {
    a: vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.0549019607843137)
    ),
    b: vec3(float(0.4), float(0.3450980392156863), float(0.3137254901960784)),
  },
  ({ a, b }) => add(a, b),
  [0.6941176470588235, 0.6941176470588235, 0.3686274509803922]
);

vec4Scenario(
  `add vec4 vec4`,
  {
    a: vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
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
  ({ a, b }) => add(a, b),
  [
    0.6941176470588235,
    0.6941176470588235,
    0.3686274509803922,
    0.603921568627451,
  ]
);

mat2Scenario(
  `add mat2 mat2`,
  {
    a: mat2(float(0.14), float(0.07), float(0.91), float(0.28)),
    b: mat2(float(0.36), float(0.37), float(0.07), float(0.64)),
  },
  ({ a, b }) => add(a, b),
  [0.5, 0.44, 0.98, 0.92]
);

mat3Scenario(
  `add mat3 mat3`,
  {
    a: mat3(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.28),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.56),
      float(0.88)
    ),
    b: mat3(
      float(0.36),
      float(0.37),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11)
    ),
  },
  ({ a, b }) => add(a, b),
  [0.5, 0.44, 0.98, 0.92, 0.65, 0.64, 0.94, 0.79, 0.99]
);

mat4Scenario(
  `add mat4 mat4`,
  {
    a: mat4(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.28),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.56),
      float(0.88),
      float(0.16),
      float(0.49),
      float(0.52),
      float(0.37),
      float(0.06),
      float(0.27),
      float(0.35)
    ),
    b: mat4(
      float(0.36),
      float(0.37),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11),
      float(0.73),
      float(0.2),
      float(0.33),
      float(0.4),
      float(0.82),
      float(0.19),
      float(0.08)
    ),
  },
  ({ a, b }) => add(a, b),
  [
    0.5,
    0.44,
    0.98,
    0.92,
    0.65,
    0.64,
    0.94,
    0.79,
    0.99,
    0.89,
    0.69,
    0.85,
    0.77,
    0.88,
    0.46,
    0.43,
  ]
);

mat2Scenario(
  `add float mat2`,
  {
    a: float(0.14),
    b: mat2(float(0.36), float(0.27), float(0.07), float(0.64)),
  },
  ({ a, b }) => add(a, b),
  [0.5, 0.41, 0.21, 0.78]
);

mat3Scenario(
  `add float mat3`,
  {
    a: float(0.14),
    b: mat3(
      float(0.36),
      float(0.27),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11)
    ),
  },
  ({ a, b }) => add(a, b),
  [0.5, 0.41, 0.21, 0.78, 0.68, 0.2, 0.87, 0.37, 0.25]
);

mat4Scenario(
  `add float mat4`,
  {
    a: float(0.14),
    b: mat4(
      float(0.36),
      float(0.27),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11),
      float(0.73),
      float(0.2),
      float(0.33),
      float(0.4),
      float(0.82),
      float(0.19),
      float(0.08)
    ),
  },
  ({ a, b }) => add(a, b),
  [
    0.5,
    0.41,
    0.21,
    0.78,
    0.68,
    0.2,
    0.87,
    0.37,
    0.25,
    0.87,
    0.34,
    0.47,
    0.54,
    0.96,
    0.33,
    0.22,
  ]
);

mat2Scenario(
  `add mat2 float`,
  {
    a: mat2(float(0.36), float(0.27), float(0.07), float(0.64)),
    b: float(0.14),
  },
  ({ a, b }) => add(a, b),
  [0.5, 0.41, 0.21, 0.78]
);

mat3Scenario(
  `add mat3 float`,
  {
    a: mat3(
      float(0.36),
      float(0.27),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11)
    ),
    b: float(0.14),
  },
  ({ a, b }) => add(a, b),
  [0.5, 0.41, 0.21, 0.78, 0.68, 0.2, 0.87, 0.37, 0.25]
);

mat4Scenario(
  `add mat4 float`,
  {
    a: mat4(
      float(0.36),
      float(0.27),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11),
      float(0.73),
      float(0.2),
      float(0.33),
      float(0.4),
      float(0.82),
      float(0.19),
      float(0.08)
    ),
    b: float(0.14),
  },
  ({ a, b }) => add(a, b),
  [
    0.5,
    0.41,
    0.21,
    0.78,
    0.68,
    0.2,
    0.87,
    0.37,
    0.25,
    0.87,
    0.34,
    0.47,
    0.54,
    0.96,
    0.33,
    0.22,
  ]
);

intScenario(
  `add int int`,
  { a: int(37), b: int(44) },
  ({ a, b }) => add(a, b),
  81
);

ivec2Scenario(
  `add ivec2 int`,
  { a: ivec2(int(37), int(102)), b: int(44) },
  ({ a, b }) => add(a, b),
  [81, 146]
);

ivec3Scenario(
  `add ivec3 int`,
  {
    a: ivec3(int(37), int(102), int(74)),
    b: int(44),
  },
  ({ a, b }) => add(a, b),
  [81, 146, 118]
);

ivec4Scenario(
  `add ivec4 int`,
  {
    a: ivec4(int(37), int(102), int(74), int(50)),
    b: int(44),
  },
  ({ a, b }) => add(a, b),
  [81, 146, 118, 94]
);

ivec2Scenario(
  `add int ivec2`,
  { a: int(44), b: ivec2(int(37), int(102)) },
  ({ a, b }) => add(a, b),
  [81, 146]
);

ivec3Scenario(
  `add int ivec3`,
  { a: int(44), b: ivec3(int(37), int(102), int(74)) },
  ({ a, b }) => add(a, b),
  [81, 146, 118]
);

ivec4Scenario(
  `add int ivec4`,
  { a: int(44), b: ivec4(int(37), int(102), int(74), int(50)) },
  ({ a, b }) => add(a, b),
  [81, 146, 118, 94]
);

ivec2Scenario(
  `add ivec2 ivec2`,
  { a: ivec2(int(44), int(22)), b: ivec2(int(37), int(102)) },
  ({ a, b }) => add(a, b),
  [81, 124]
);

ivec3Scenario(
  `add ivec3 ivec3`,
  { a: ivec3(int(44), int(22), int(12)), b: ivec3(int(37), int(102), int(74)) },
  ({ a, b }) => add(a, b),
  [81, 124, 86]
);

ivec4Scenario(
  `add ivec4 ivec4`,
  {
    a: ivec4(int(44), int(22), int(12), int(200)),
    b: ivec4(int(37), int(102), int(74), int(50)),
  },
  ({ a, b }) => add(a, b),
  [81, 124, 86, 250]
);
