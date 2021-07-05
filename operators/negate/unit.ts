import {
  add,
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
  negate,
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
  `negate positive float`,
  { a: float(0.3) },
  ({ a }) => add(negate(a), float(0.5)),
  0.2
);

floatScenario(
  `negate negative float`,
  { a: float(-0.3) },
  ({ a }) => add(negate(a), float(0.5)),
  0.8
);

vec2Scenario(
  `negate vec2`,
  { a: vec2(float(0.3), float(-0.1)) },
  ({ a }) => add(negate(a), float(0.5)),
  [0.2, 0.6]
);

vec3Scenario(
  `negate vec3`,
  { a: vec3(float(0.3), float(-0.1), float(0.2)) },
  ({ a }) => add(negate(a), float(0.5)),
  [0.2, 0.6, 0.3]
);

vec4Scenario(
  `negate vec4`,
  { a: vec4(float(0.3), float(-0.1), float(-0.2), float(0.4)) },
  ({ a }) => add(negate(a), float(0.5)),
  [0.2, 0.6, 0.7, 0.1]
);

mat2Scenario(
  `negate mat2`,
  {
    a: mat2(
      float(0.122742),
      float(0.244741),
      float(-0.204337),
      float(0.144786)
    ),
  },
  ({ a }) => add(negate(a), float(0.5)),
  [0.377258, 0.255259, 0.704337, 0.355214]
);

mat3Scenario(
  `negate mat3`,
  {
    a: mat3(
      float(0.122742),
      float(0.244741),
      float(-0.204337),
      float(0.144786),
      float(0.39316),
      float(0.280716),
      float(-0.284655),
      float(-0.332962),
      float(0.385265)
    ),
  },
  ({ a }) => add(negate(a), float(0.5)),
  [
    0.377258,
    0.255259,
    0.704337,
    0.355214,
    0.10684,
    0.219284,
    0.784655,
    0.832962,
    0.114735,
  ]
);

mat4Scenario(
  `negate mat4`,
  {
    a: mat4(
      float(0.122742),
      float(0.244741),
      float(-0.204337),
      float(0.144786),
      float(0.39316),
      float(0.280716),
      float(-0.284655),
      float(-0.332962),
      float(0.385265),
      float(0.231687),
      float(-0.194077),
      float(0.344387),
      float(0.37693),
      float(-0.422212),
      float(0.0182347),
      float(-0.0214072)
    ),
  },
  ({ a }) => add(negate(a), float(0.5)),
  [
    0.377258,
    0.255259,
    0.704337,
    0.355214,
    0.10684,
    0.219284,
    0.784655,
    0.832962,
    0.114735,
    0.268313,
    0.694077,
    0.155613,
    0.12307,
    0.922212,
    0.4817653,
    0.5214072,
  ]
);

intScenario(
  `negate int negative`,
  { a: int(-27) },
  ({ a }) => add(int(128), negate(a)),
  155
);

intScenario(
  `negate int positive`,
  { a: int(27) },
  ({ a }) => add(int(128), negate(a)),
  101
);

ivec2Scenario(
  `negate ivec2`,
  { a: ivec2(int(-27), int(104)) },
  ({ a }) => add(int(128), negate(a)),
  [155, 24]
);

ivec3Scenario(
  `negate ivec3`,
  { a: ivec3(int(-27), int(104), int(-66)) },
  ({ a }) => add(int(128), negate(a)),
  [155, 24, 194]
);

ivec4Scenario(
  `negate ivec4`,
  { a: ivec4(int(-27), int(104), int(-66), int(70)) },
  ({ a }) => add(int(128), negate(a)),
  [155, 24, 194, 58]
);
