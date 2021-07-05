import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  greaterThan,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  `greaterThan float lesser greater`,
  { a: float(2.1), b: float(2.3) },
  ({ a, b }) => greaterThan(a, b),
  false
);

boolScenario(
  `greaterThan float equal`,
  { a: float(2.2), b: float(2.2) },
  ({ a, b }) => greaterThan(a, b),
  false
);

boolScenario(
  `greaterThan float greater lesser`,
  { a: float(2.3), b: float(2.1) },
  ({ a, b }) => greaterThan(a, b),
  true
);

bvec2Scenario(
  `greaterThan vec2 a`,
  { a: vec2(float(2.1), float(1.1)), b: vec2(float(2.3), float(1.1)) },
  ({ a, b }) => greaterThan(a, b),
  [false, false]
);

bvec2Scenario(
  `greaterThan vec2 b`,
  { a: vec2(float(2.3), float(1.1)), b: vec2(float(2.1), float(1.1)) },
  ({ a, b }) => greaterThan(a, b),
  [true, false]
);

bvec3Scenario(
  `greaterThan vec3`,
  {
    a: vec3(float(2.1), float(1.1), float(5.4)),
    b: vec3(float(2.3), float(1.1), float(5.2)),
  },
  ({ a, b }) => greaterThan(a, b),
  [false, false, true]
);

bvec4Scenario(
  `greaterThan vec4`,
  {
    a: vec4(float(2.1), float(1.1), float(6.1), float(5.4)),
    b: vec4(float(2.3), float(1.1), float(6.2), float(5.2)),
  },
  ({ a, b }) => greaterThan(a, b),
  [false, false, false, true]
);

boolScenario(
  `greaterThan float lesser greater`,
  { a: int(21), b: int(22) },
  ({ a, b }) => greaterThan(a, b),
  false
);

boolScenario(
  `greaterThan int equal`,
  { a: int(22), b: int(22) },
  ({ a, b }) => greaterThan(a, b),
  false
);

boolScenario(
  `greaterThan int greater lesser`,
  { a: int(23), b: int(22) },
  ({ a, b }) => greaterThan(a, b),
  true
);

bvec2Scenario(
  `greaterThan ivec2 a`,
  { a: ivec2(int(21), int(11)), b: ivec2(int(22), int(11)) },
  ({ a, b }) => greaterThan(a, b),
  [false, false]
);

bvec2Scenario(
  `greaterThan ivec2 b`,
  { a: ivec2(int(23), int(11)), b: ivec2(int(22), int(11)) },
  ({ a, b }) => greaterThan(a, b),
  [true, false]
);

bvec3Scenario(
  `greaterThan ivec3`,
  {
    a: ivec3(int(21), int(11), int(54)),
    b: ivec3(int(22), int(11), int(53)),
  },
  ({ a, b }) => greaterThan(a, b),
  [false, false, true]
);

bvec4Scenario(
  `greaterThan ivec4`,
  {
    a: ivec4(int(21), int(11), int(61), int(54)),
    b: ivec4(int(22), int(11), int(62), int(52)),
  },
  ({ a, b }) => greaterThan(a, b),
  [false, false, false, true]
);
