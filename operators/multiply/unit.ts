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
  multiply,
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
  `multiply float float`,
  { a: float(0.4), b: float(0.2941176470588235) },
  ({ a, b }) => multiply(a, b),
  0.1176470588235294
);

vec2Scenario(
  `multiply vec2 float`,
  {
    a: vec2(float(0.6862745098039216), float(0.792156862745098)),
    b: float(0.4),
  },
  ({ a, b }) => multiply(a, b),
  [0.2745098039215686, 0.316878123798539]
);

vec3Scenario(
  `multiply vec3 float`,
  {
    a: vec3(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922)
    ),
    b: float(0.4),
  },
  ({ a, b }) => multiply(a, b),
  [0.2745098039215686, 0.316878123798539, 0.3874509803921569]
);

vec4Scenario(
  `multiply vec4 float`,
  {
    a: vec4(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922),
      float(0.5647058823529412)
    ),
    b: float(0.4),
  },
  ({ a, b }) => multiply(a, b),
  [
    0.2745098039215686,
    0.316878123798539,
    0.3874509803921569,
    0.2258823529411765,
  ]
);

vec2Scenario(
  `multiply float vec2`,
  {
    a: float(0.4),
    b: vec2(float(0.6862745098039216), float(0.792156862745098)),
  },
  ({ a, b }) => multiply(a, b),
  [0.2745098039215686, 0.316878123798539]
);

vec3Scenario(
  `multiply float vec3`,
  {
    a: float(0.4),
    b: vec3(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922)
    ),
  },
  ({ a, b }) => multiply(a, b),
  [0.2745098039215686, 0.316878123798539, 0.3874509803921569]
);

vec4Scenario(
  `multiply float vec4`,
  {
    a: float(0.4),
    b: vec4(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922),
      float(0.5647058823529412)
    ),
  },
  ({ a, b }) => multiply(a, b),
  [
    0.2745098039215686,
    0.316878123798539,
    0.3874509803921569,
    0.2258823529411765,
  ]
);

vec2Scenario(
  `multiply vec2 vec2`,
  {
    a: vec2(float(0.4), float(0.5568627450980392)),
    b: vec2(float(0.2901960784313725), float(0.3450980392156863)),
  },
  ({ a, b }) => multiply(a, b),
  [0.116078431372549, 0.1921722414455978]
);

vec3Scenario(
  `multiply vec3 vec3`,
  {
    a: vec3(float(0.4), float(0.5568627450980392), float(0.5215686274509804)),
    b: vec3(
      float(0.2901960784313725),
      float(0.3450980392156863),
      float(0.1137254901960784)
    ),
  },
  ({ a, b }) => multiply(a, b),
  [0.116078431372549, 0.1921722414455978, 0.0593156478277586]
);

vec4Scenario(
  `multiply vec4 vec4`,
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
  ({ a, b }) => multiply(a, b),
  [
    0.116078431372549,
    0.1921722414455978,
    0.0593156478277586,
    0.5382545174932718,
  ]
);

mat2Scenario(
  `multiply float mat2`,
  { a: float(0.4), b: mat2(float(0.6), float(0.8), float(0.2), float(0.9)) },
  ({ a, b }) => multiply(a, b),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  `multiply float mat3`,
  {
    a: float(0.4),
    b: mat3(
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
  },
  ({ a, b }) => multiply(a, b),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  `multiply float mat4`,
  {
    a: float(0.4),
    b: mat4(
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
  },
  ({ a, b }) => multiply(a, b),
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
  `multiply mat2 float`,
  { a: mat2(float(0.6), float(0.8), float(0.2), float(0.9)), b: float(0.4) },
  ({ a, b }) => multiply(a, b),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  `multiply mat3 float`,
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
    b: float(0.4),
  },
  ({ a, b }) => multiply(a, b),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  `multiply mat4 float`,
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
    b: float(0.4),
  },
  ({ a, b }) => multiply(a, b),
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
  `multiply mat2 mat2`,
  {
    a: mat2(float(0.14), float(0.07), float(0.11), float(0.58)),
    b: mat2(float(0.36), float(0.37), float(0.54), float(0.06)),
  },
  ({ a, b }) => multiply(a, b),
  [0.0911, 0.2398, 0.0822, 0.0726]
);

mat3Scenario(
  `multiply mat3 mat3`,
  {
    a: mat3(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.88),
      float(0.16),
      float(0.49)
    ),
    b: mat3(
      float(0.36),
      float(0.37),
      float(0.07),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.11),
      float(0.73),
      float(0.2)
    ),
  },
  ({ a, b }) => multiply(a, b),
  [0.1527, 0.251, 0.4396, 0.7246, 0.1894, 0.8617, 0.2717, 0.4631, 0.3514]
);

mat4Scenario(
  `multiply mat4 mat4`,
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
  ({ a, b }) => multiply(a, b),
  [
    0.3895,
    0.2894,
    0.6124,
    0.5684,
    0.8097,
    0.2032,
    0.9238,
    0.6449,
    0.3938,
    0.4829,
    0.4405,
    0.6591,
    0.343,
    0.5388,
    0.6509,
    0.698,
  ]
);

vec2Scenario(
  `multiply mat2 vec2`,
  {
    a: mat2(float(0.14), float(0.07), float(0.11), float(0.58)),
    b: vec2(float(0.36), float(0.11)),
  },
  ({ a, b }) => multiply(a, b),
  [0.0625, 0.089]
);

vec3Scenario(
  `multiply mat3 vec3`,
  {
    a: mat3(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.88),
      float(0.16),
      float(0.49)
    ),
    b: vec3(float(0.36), float(0.11), float(0.07)),
  },
  ({ a, b }) => multiply(a, b),
  [0.1241, 0.1002, 0.385]
);

vec4Scenario(
  `multiply mat4 vec4`,
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
    b: vec4(float(0.36), float(0.11), float(0.07), float(0.64)),
  },
  ({ a, b }) => multiply(a, b),
  [0.3609, 0.1386, 0.5578, 0.4228]
);

vec2Scenario(
  `multiply vec2 mat2`,
  {
    a: vec2(float(0.36), float(0.11)),
    b: mat2(float(0.14), float(0.07), float(0.11), float(0.58)),
  },
  ({ a, b }) => multiply(a, b),
  [0.0581, 0.1034]
);

vec3Scenario(
  `multiply vec3 mat3`,
  {
    a: vec3(float(0.36), float(0.11), float(0.07)),
    b: mat3(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.88),
      float(0.16),
      float(0.49)
    ),
  },
  ({ a, b }) => multiply(a, b),
  [0.1218, 0.1181, 0.3687]
);

vec4Scenario(
  `multiply vec4 mat4`,
  {
    a: vec4(float(0.36), float(0.11), float(0.07), float(0.64)),
    b: mat4(
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
  },
  ({ a, b }) => multiply(a, b),
  [0.301, 0.4765, 0.7015, 0.3827]
);

intScenario(
  `multiply int int`,
  { a: int(27), b: int(4) },
  ({ a, b }) => multiply(a, b),
  108
);

ivec2Scenario(
  `multiply ivec2 int`,
  { a: ivec2(int(27), int(73)), b: int(3) },
  ({ a, b }) => multiply(a, b),
  [81, 219]
);

ivec3Scenario(
  `multiply ivec3 int`,
  { a: ivec3(int(27), int(73), int(41)), b: int(3) },
  ({ a, b }) => multiply(a, b),
  [81, 219, 123]
);

ivec4Scenario(
  `multiply ivec4 int`,
  { a: ivec4(int(27), int(73), int(41), int(4)), b: int(3) },
  ({ a, b }) => multiply(a, b),
  [81, 219, 123, 12]
);

ivec2Scenario(
  `multiply int ivec2`,
  { a: int(3), b: ivec2(int(27), int(73)) },
  ({ a, b }) => multiply(a, b),
  [81, 219]
);

ivec3Scenario(
  `multiply int ivec3`,
  { a: int(3), b: ivec3(int(27), int(73), int(41)) },
  ({ a, b }) => multiply(a, b),
  [81, 219, 123]
);

ivec4Scenario(
  `multiply int ivec4`,
  { a: int(3), b: ivec4(int(27), int(73), int(41), int(4)) },
  ({ a, b }) => multiply(a, b),
  [81, 219, 123, 12]
);

ivec2Scenario(
  `multiply ivec2 ivec2`,
  { a: ivec2(int(27), int(100)), b: ivec2(int(4), int(2)) },
  ({ a, b }) => multiply(a, b),
  [108, 200]
);

ivec3Scenario(
  `multiply ivec3 ivec3`,
  { a: ivec3(int(27), int(100), int(41)), b: ivec3(int(4), int(2), int(5)) },
  ({ a, b }) => multiply(a, b),
  [108, 200, 205]
);

ivec4Scenario(
  `multiply ivec4 ivec4`,
  {
    a: ivec4(int(27), int(100), int(41), int(3)),
    b: ivec4(int(4), int(2), int(5), int(8)),
  },
  ({ a, b }) => multiply(a, b),
  [108, 200, 205, 24]
);
