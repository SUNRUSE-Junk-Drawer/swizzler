import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  lessThan,
} from "../../";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  `lessThan float lesser greater`,
  { a: float(2.1), b: float(2.3) },
  ({ a, b }) => lessThan(a, b),
  true
);

boolScenario(
  `lessThan float equal`,
  { a: float(2.2), b: float(2.2) },
  ({ a, b }) => lessThan(a, b),
  false
);

boolScenario(
  `lessThan float greater lesser`,
  { a: float(2.3), b: float(2.1) },
  ({ a, b }) => lessThan(a, b),
  false
);

bvec2Scenario(
  `lessThan vec2 a`,
  { a: vec2(float(2.1), float(1.1)), b: vec2(float(2.3), float(1.1)) },
  ({ a, b }) => lessThan(a, b),
  [true, false]
);

bvec2Scenario(
  `lessThan vec2 b`,
  { a: vec2(float(2.3), float(1.1)), b: vec2(float(2.1), float(1.1)) },
  ({ a, b }) => lessThan(a, b),
  [false, false]
);

bvec3Scenario(
  `lessThan vec3`,
  {
    a: vec3(float(2.1), float(1.1), float(5.4)),
    b: vec3(float(2.3), float(1.1), float(5.2)),
  },
  ({ a, b }) => lessThan(a, b),
  [true, false, false]
);

bvec4Scenario(
  `lessThan vec4`,
  {
    a: vec4(float(2.1), float(1.1), float(6.1), float(5.4)),
    b: vec4(float(2.3), float(1.1), float(6.2), float(5.2)),
  },
  ({ a, b }) => lessThan(a, b),
  [true, false, true, false]
);

boolScenario(
  `lessThan float lesser greater`,
  { a: int(21), b: int(22) },
  ({ a, b }) => lessThan(a, b),
  true
);

boolScenario(
  `lessThan int equal`,
  { a: int(22), b: int(22) },
  ({ a, b }) => lessThan(a, b),
  false
);

boolScenario(
  `lessThan int greater lesser`,
  { a: int(23), b: int(22) },
  ({ a, b }) => lessThan(a, b),
  false
);

bvec2Scenario(
  `lessThan ivec2 a`,
  { a: ivec2(int(21), int(11)), b: ivec2(int(22), int(11)) },
  ({ a, b }) => lessThan(a, b),
  [true, false]
);

bvec2Scenario(
  `lessThan ivec2 b`,
  { a: ivec2(int(23), int(11)), b: ivec2(int(22), int(11)) },
  ({ a, b }) => lessThan(a, b),
  [false, false]
);

bvec3Scenario(
  `lessThan ivec3`,
  { a: ivec3(int(21), int(11), int(54)), b: ivec3(int(22), int(11), int(53)) },
  ({ a, b }) => lessThan(a, b),
  [true, false, false]
);

bvec4Scenario(
  `lessThan ivec4`,
  {
    a: ivec4(int(21), int(11), int(61), int(54)),
    b: ivec4(int(22), int(11), int(62), int(52)),
  },
  ({ a, b }) => lessThan(a, b),
  [true, false, true, false]
);
