import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  bool,
  bvec2,
  bvec3,
  bvec4,
  componentwiseNotEqual,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  `componentwiseNotEqual float lesser greater`,
  { a: float(2.1), b: float(2.3) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  true
);

boolScenario(
  `componentwiseNotEqual float equal`,
  { a: float(2.2), b: float(2.2) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  false
);

boolScenario(
  `componentwiseNotEqual float greater lesser`,
  { a: float(2.3), b: float(2.1) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  true
);

bvec2Scenario(
  `componentwiseNotEqual vec2`,
  {
    a: vec2(float(2.1), float(1.2)),
    b: vec2(float(2.3), float(1.2)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false]
);

bvec3Scenario(
  `componentwiseNotEqual vec3`,
  {
    a: vec3(float(2.1), float(1.2), float(5.7)),
    b: vec3(float(2.3), float(1.2), float(5.4)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false, true]
);

bvec4Scenario(
  `componentwiseNotEqual vec4`,
  {
    a: vec4(float(2.1), float(1.2), float(5.7), float(8.8)),
    b: vec4(float(2.3), float(1.2), float(5.4), float(8.8)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false, true, false]
);

boolScenario(
  `componentwiseNotEqual int lesser greater`,
  { a: int(21), b: int(22) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  true
);

boolScenario(
  `componentwiseNotEqual int equal`,
  { a: int(22), b: int(22) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  false
);

boolScenario(
  `componentwiseNotEqual int greater lesser`,
  { a: int(22), b: int(21) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  true
);

bvec2Scenario(
  `componentwiseNotEqual ivec2`,
  { a: ivec2(int(21), int(12)), b: ivec2(int(22), int(12)) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false]
);

bvec3Scenario(
  `componentwiseNotEqual ivec3`,
  {
    a: ivec3(int(21), int(12), int(57)),
    b: ivec3(int(22), int(12), int(56)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false, true]
);

bvec4Scenario(
  `componentwiseNotEqual ivec4`,
  {
    a: ivec4(int(21), int(12), int(57), int(88)),
    b: ivec4(int(22), int(12), int(56), int(88)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false, true, false]
);

boolScenario(
  `componentwiseNotEqual bool true true`,
  { a: bool(false), b: bool(false) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  false
);

boolScenario(
  `componentwiseNotEqual bool true false`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  true
);

boolScenario(
  `componentwiseNotEqual bool false true`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  true
);

boolScenario(
  `componentwiseNotEqual bool false false`,
  { a: bool(true), b: bool(true) },
  ({ a, b }) => componentwiseNotEqual(a, b),
  false
);

bvec2Scenario(
  `componentwiseNotEqual bvec2`,
  {
    a: bvec2(bool(false), bool(true)),
    b: bvec2(bool(true), bool(true)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false]
);

bvec3Scenario(
  `componentwiseNotEqual bvec3`,
  {
    a: bvec3(bool(false), bool(true), bool(true)),
    b: bvec3(bool(true), bool(true), bool(false)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false, true]
);

bvec4Scenario(
  `componentwiseNotEqual bvec4`,
  {
    a: bvec4(bool(false), bool(true), bool(true), bool(false)),
    b: bvec4(bool(true), bool(true), bool(false), bool(false)),
  },
  ({ a, b }) => componentwiseNotEqual(a, b),
  [true, false, true, false]
);
