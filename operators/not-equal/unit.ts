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
  notEqual,
} from "../../";
import { boolScenario } from "../../unit";

boolScenario(
  "notEqual float true",
  { a: float(2.3), b: float(2.3) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual float false",
  { a: float(2.3), b: float(2.1) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec2 true true",
  { a: vec2(float(2.3), float(4.7)), b: vec2(float(2.3), float(4.7)) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual vec2 false true",
  { a: vec2(float(2.3), float(4.7)), b: vec2(float(2.1), float(4.7)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec2 true false",
  { a: vec2(float(2.3), float(4.5)), b: vec2(float(2.3), float(4.1)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec3 true true true",
  {
    a: vec3(float(2.3), float(4.7), float(6.6)),
    b: vec3(float(2.3), float(4.7), float(6.6)),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual vec3 false true true",
  {
    a: vec3(float(2.3), float(4.7), float(6.6)),
    b: vec3(float(2.1), float(4.7), float(6.6)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec3 true false true",
  {
    a: vec3(float(2.3), float(4.7), float(6.6)),
    b: vec3(float(2.3), float(4.1), float(6.6)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec3 true true false",
  {
    a: vec3(float(2.3), float(4.7), float(6.6)),
    b: vec3(float(2.3), float(4.7), float(6.1)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec4 true true true true",
  {
    a: vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual vec4 false true true true",
  {
    a: vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: vec4(float(2.1), float(4.7), float(6.6), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec4 true false true true",
  {
    a: vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: vec4(float(2.3), float(4.1), float(6.6), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec4 true true false true",
  {
    a: vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: vec4(float(2.3), float(4.7), float(6.1), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual vec4 true true true false",
  {
    a: vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: vec4(float(2.3), float(4.7), float(6.6), float(1.1)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat2 true true true true",
  {
    a: mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual mat2 false true true true",
  {
    a: mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: mat2(float(2.1), float(4.7), float(6.6), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat2 true false true true",
  {
    a: mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: mat2(float(2.3), float(4.1), float(6.6), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat2 true true false true",
  {
    a: mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: mat2(float(2.3), float(4.7), float(6.1), float(1.4)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat2 true true true false",
  {
    a: mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    b: mat2(float(2.3), float(4.7), float(6.6), float(1.1)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual mat3 false true true true true true true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.41),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true false true true true true true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.93),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true false true true true true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.03),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true false true true true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.45),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true true false true true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.91),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true true true false true true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.87),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true false true true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.42),
      float(0.06),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true true false true",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.02),
      float(0.09)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true true true false",
  {
    a: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    b: mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.04)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual mat4 false true true true true true true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.41),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true false true true true true true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.93),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true false true true true true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.07),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.03),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true false true true true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.41),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true false true true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.91),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true false true true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.81),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true false true true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.41),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true false true true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.01),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true false true true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.01),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true false true true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.11),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true false true true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.21),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true false true true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.41),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true false true true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.61),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true false true true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.31),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true true false true",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.71),
      float(0.93)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true true true false",
  {
    a: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.91)
    ),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual int true",
  { a: int(23), b: int(23) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual int false",
  { a: int(23), b: int(21) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec2 true true",
  { a: ivec2(int(23), int(47)), b: ivec2(int(23), int(47)) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual ivec2 false true",
  { a: ivec2(int(23), int(47)), b: ivec2(int(21), int(47)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec2 true false",
  { a: ivec2(int(23), int(45)), b: ivec2(int(23), int(41)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec3 true true true",
  { a: ivec3(int(23), int(47), int(66)), b: ivec3(int(23), int(47), int(66)) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual ivec3 false true true",
  { a: ivec3(int(23), int(47), int(66)), b: ivec3(int(21), int(47), int(66)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec3 true false true",
  { a: ivec3(int(23), int(47), int(66)), b: ivec3(int(23), int(41), int(66)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec3 true true false",
  { a: ivec3(int(23), int(47), int(66)), b: ivec3(int(23), int(47), int(61)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec4 true true true true",
  {
    a: ivec4(int(23), int(47), int(66), int(14)),
    b: ivec4(int(23), int(47), int(66), int(14)),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual ivec4 false true true true",
  {
    a: ivec4(int(23), int(47), int(66), int(14)),
    b: ivec4(int(21), int(47), int(66), int(14)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec4 true false true true",
  {
    a: ivec4(int(23), int(47), int(66), int(14)),
    b: ivec4(int(23), int(41), int(66), int(14)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec4 true true false true",
  {
    a: ivec4(int(23), int(47), int(66), int(14)),
    b: ivec4(int(23), int(47), int(61), int(14)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual ivec4 true true true false",
  {
    a: ivec4(int(23), int(47), int(66), int(14)),
    b: ivec4(int(23), int(47), int(66), int(11)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bool true true",
  { a: bool(true), b: bool(true) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual bool true false",
  { a: bool(true), b: bool(false) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bool false true",
  { a: bool(false), b: bool(true) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bool false false",
  { a: bool(false), b: bool(false) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual bvec2 true true",
  { a: bvec2(bool(false), bool(true)), b: bvec2(bool(false), bool(true)) },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual bvec2 false true",
  { a: bvec2(bool(false), bool(true)), b: bvec2(bool(true), bool(true)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec2 true false",
  { a: bvec2(bool(false), bool(true)), b: bvec2(bool(false), bool(false)) },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec3 true true true",
  {
    a: bvec3(bool(true), bool(false), bool(true)),
    b: bvec3(bool(true), bool(false), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual bvec3 false true true",
  {
    a: bvec3(bool(true), bool(false), bool(true)),
    b: bvec3(bool(false), bool(false), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec3 true false true",
  {
    a: bvec3(bool(true), bool(false), bool(true)),
    b: bvec3(bool(true), bool(true), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec3 true true false",
  {
    a: bvec3(bool(true), bool(false), bool(true)),
    b: bvec3(bool(true), bool(false), bool(false)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec4 true true true true",
  {
    a: bvec4(bool(true), bool(true), bool(false), bool(true)),
    b: bvec4(bool(true), bool(true), bool(false), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  false
);

boolScenario(
  "notEqual bvec4 false true true true",
  {
    a: bvec4(bool(true), bool(true), bool(false), bool(true)),
    b: bvec4(bool(false), bool(true), bool(false), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec4 true false true true",
  {
    a: bvec4(bool(true), bool(true), bool(false), bool(true)),
    b: bvec4(bool(true), bool(false), bool(false), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec4 true true false true",
  {
    a: bvec4(bool(true), bool(true), bool(false), bool(true)),
    b: bvec4(bool(true), bool(true), bool(true), bool(true)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);

boolScenario(
  "notEqual bvec4 true true true false",
  {
    a: bvec4(bool(true), bool(true), bool(false), bool(true)),
    b: bvec4(bool(true), bool(true), bool(false), bool(false)),
  },
  ({ a, b }) => notEqual(a, b),
  true
);
