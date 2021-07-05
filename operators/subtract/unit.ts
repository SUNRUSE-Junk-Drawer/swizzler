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
  subtract,
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
  `subtract float float`,
  { a: float(0.4), b: float(0.2941176470588235) },
  ({ a, b }) => subtract(a, b),
  0.1058823529411765
);

vec2Scenario(
  `subtract vec2 float`,
  {
    a: vec2(float(0.6862745098039216), float(0.792156862745098)),
    b: float(0.4),
  },
  ({ a, b }) => subtract(a, b),
  [0.2862745098039216, 0.392156862745098]
);

vec3Scenario(
  `subtract vec3 float`,
  {
    a: vec3(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922)
    ),
    b: float(0.4),
  },
  ({ a, b }) => subtract(a, b),
  [0.2862745098039216, 0.392156862745098, 0.5686274509803922]
);

vec4Scenario(
  `subtract vec4 float`,
  {
    a: vec4(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922),
      float(0.5647058823529412)
    ),
    b: float(0.4),
  },
  ({ a, b }) => subtract(a, b),
  [
    0.2862745098039216,
    0.392156862745098,
    0.5686274509803922,
    0.1647058823529412,
  ]
);

vec2Scenario(
  `subtract float vec2`,
  {
    a: float(0.5490196078431373),
    b: vec2(float(0.2941176470588235), float(0.3490196078431373)),
  },
  ({ a, b }) => subtract(a, b),
  [0.2549019607843137, 0.2]
);

vec3Scenario(
  `subtract float vec3`,
  {
    a: float(0.5490196078431373),
    b: vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.1647058823529412)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [0.2549019607843137, 0.2, 0.3843137254901961]
);

vec4Scenario(
  `subtract float vec4`,
  {
    a: float(0.5490196078431373),
    b: vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.1647058823529412),
      float(0.1215686274509804)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [0.2549019607843137, 0.2, 0.3843137254901961, 0.4274509803921569]
);

vec2Scenario(
  `subtract vec2 vec2`,
  {
    a: vec2(float(0.4), float(0.5568627450980392)),
    b: vec2(float(0.2901960784313725), float(0.3450980392156863)),
  },
  ({ a, b }) => subtract(a, b),
  [0.1098039215686275, 0.2117647058823529]
);

vec3Scenario(
  `subtract vec3 vec3`,
  {
    a: vec3(float(0.4), float(0.5568627450980392), float(0.5215686274509804)),
    b: vec3(
      float(0.2901960784313725),
      float(0.3450980392156863),
      float(0.1137254901960784)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [0.1098039215686275, 0.2117647058823529, 0.407843137254902]
);

vec4Scenario(
  `subtract vec4 vec4`,
  {
    a: vec4(
      float(0.4),
      float(0.5568627450980392),
      float(0.5215686274509804),
      float(0.9803921568627451)
    ),
    b: vec4(
      float(0.2901960784313725),
      float(0.3450980392156863),
      float(0.1137254901960784),
      float(0.5490196078431373)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [
    0.1098039215686275,
    0.2117647058823529,
    0.407843137254902,
    0.4313725490196078,
  ]
);

mat2Scenario(
  `subtract float mat2`,
  {
    a: float(0.8),
    b: mat2(float(0.1), float(0.3), float(0.4), float(0.2)),
  },
  ({ a, b }) => subtract(a, b),
  [0.7, 0.5, 0.4, 0.6]
);

mat3Scenario(
  `subtract float mat3`,
  {
    a: float(0.8),
    b: mat3(
      float(0.1),
      float(0.3),
      float(0.4),
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [0.7, 0.5, 0.4, 0.6, 0.1, 0.2, 0.3, 0.25, 0.45]
);

mat4Scenario(
  `subtract float mat4`,
  {
    a: float(0.8),
    b: mat4(
      float(0.1),
      float(0.3),
      float(0.4),
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.05),
      float(0.15),
      float(0.425),
      float(0.475),
      float(0.075),
      float(0.125)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [
    0.7,
    0.5,
    0.4,
    0.6,
    0.1,
    0.2,
    0.3,
    0.25,
    0.45,
    0.35,
    0.75,
    0.65,
    0.375,
    0.325,
    0.725,
    0.675,
  ]
);

mat2Scenario(
  `subtract mat2 float`,
  { a: mat2(float(0.2), float(0.7), float(0.6), float(0.5)), b: float(0.1) },
  ({ a, b }) => subtract(a, b),
  [0.1, 0.6, 0.5, 0.4]
);

mat3Scenario(
  `subtract mat3 float`,
  {
    a: mat3(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15)
    ),
    b: float(0.1),
  },
  ({ a, b }) => subtract(a, b),
  [0.1, 0.6, 0.5, 0.4, 0.45, 0.25, 0.35, 0.075, 0.05]
);

mat4Scenario(
  `subtract mat4 float`,
  {
    a: mat4(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15),
      float(0.425),
      float(0.175),
      float(0.3),
      float(0.4),
      float(0.475),
      float(0.275),
      float(0.125)
    ),
    b: float(0.1),
  },
  ({ a, b }) => subtract(a, b),
  [
    0.1,
    0.6,
    0.5,
    0.4,
    0.45,
    0.25,
    0.35,
    0.075,
    0.05,
    0.325,
    0.075,
    0.2,
    0.3,
    0.375,
    0.175,
    0.025,
  ]
);

mat2Scenario(
  `subtract mat2 mat2`,
  {
    a: mat2(float(0.2), float(0.7), float(0.6), float(0.5)),
    b: mat2(float(0.12), float(0.24), float(0.34), float(0.12)),
  },
  ({ a, b }) => subtract(a, b),
  [0.08, 0.46, 0.26, 0.38]
);

mat3Scenario(
  `subtract mat3 mat3`,
  {
    a: mat3(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15)
    ),
    b: mat3(
      float(0.12),
      float(0.24),
      float(0.34),
      float(0.12),
      float(0.52),
      float(0.16),
      float(0.38),
      float(0.02),
      float(0.08)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [0.08, 0.46, 0.26, 0.38, 0.03, 0.19, 0.07, 0.155, 0.07]
);

mat4Scenario(
  `subtract mat4 mat4`,
  {
    a: mat4(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15),
      float(0.425),
      float(0.175),
      float(0.3),
      float(0.4),
      float(0.475),
      float(0.275),
      float(0.125)
    ),
    b: mat4(
      float(0.12),
      float(0.24),
      float(0.34),
      float(0.12),
      float(0.52),
      float(0.16),
      float(0.38),
      float(0.02),
      float(0.08),
      float(0.311),
      float(0.05),
      float(0.12),
      float(0.05),
      float(0.31),
      float(0.15),
      float(0.06)
    ),
  },
  ({ a, b }) => subtract(a, b),
  [
    0.08,
    0.46,
    0.26,
    0.38,
    0.03,
    0.19,
    0.07,
    0.155,
    0.07,
    0.114,
    0.125,
    0.18,
    0.35,
    0.165,
    0.125,
    0.065,
  ]
);

intScenario(
  `subtract int int`,
  { a: int(128), b: int(27) },
  ({ a, b }) => subtract(a, b),
  101
);

ivec2Scenario(
  `subtract int ivec2`,
  { a: int(128), b: ivec2(int(27), int(104)) },
  ({ a, b }) => subtract(a, b),
  [101, 24]
);

ivec3Scenario(
  `subtract int ivec3`,
  { a: int(128), b: ivec3(int(27), int(104), int(66)) },
  ({ a, b }) => subtract(a, b),
  [101, 24, 62]
);

ivec4Scenario(
  `subtract int ivec4`,
  { a: int(128), b: ivec4(int(27), int(104), int(66), int(70)) },
  ({ a, b }) => subtract(a, b),
  [101, 24, 62, 58]
);

ivec2Scenario(
  `subtract ivec2 int`,
  { a: ivec2(int(27), int(104)), b: int(6) },
  ({ a, b }) => subtract(a, b),
  [21, 98]
);

ivec3Scenario(
  `subtract ivec3 int`,
  { a: ivec3(int(27), int(104), int(66)), b: int(6) },
  ({ a, b }) => subtract(a, b),
  [21, 98, 60]
);

ivec4Scenario(
  `subtract ivec4 int`,
  { a: ivec4(int(27), int(104), int(66), int(70)), b: int(6) },
  ({ a, b }) => subtract(a, b),
  [21, 98, 60, 64]
);

ivec2Scenario(
  `subtract ivec2 ivec2`,
  { a: ivec2(int(178), int(63)), b: ivec2(int(44), int(21)) },
  ({ a, b }) => subtract(a, b),
  [134, 42]
);

ivec3Scenario(
  `subtract ivec3 ivec3`,
  {
    a: ivec3(int(178), int(63), int(202)),
    b: ivec3(int(44), int(21), int(88)),
  },
  ({ a, b }) => subtract(a, b),
  [134, 42, 114]
);

ivec4Scenario(
  `subtract ivec4 ivec4`,
  {
    a: ivec4(int(178), int(63), int(202), int(144)),
    b: ivec4(int(44), int(21), int(88), int(37)),
  },
  ({ a, b }) => subtract(a, b),
  [134, 42, 114, 107]
);
